-- Adds the bank-transfer (RIB) alternative to the Stripe payment_requests
-- flow introduced in 20260831030000_stripe_payments.sql. Additive only:
-- every existing/default request keeps method = 'stripe' and behaves
-- exactly as before. Depends on payment_ribs (20260831020000_payment_ribs.sql).

ALTER TABLE public.payment_requests
  ADD COLUMN method TEXT NOT NULL DEFAULT 'stripe' CHECK (method IN ('stripe', 'rib')),
  ADD COLUMN rib_id UUID REFERENCES public.payment_ribs(id) ON DELETE SET NULL;

-- create_payment_request: same validation/locking as before, now also
-- accepting a method + RIB choice. A 'rib' request is never given a Stripe
-- PaymentIntent — it's settled manually (mark_invoice_paid / a future
-- "mark request paid" action), same trust model the app already had for
-- bank transfers before Stripe existed.
--
-- The new params extend the signature, so the old 4-arg overload must be
-- dropped first — otherwise Postgres keeps both and a 4-named-arg RPC call
-- becomes ambiguous between the two.
DROP FUNCTION IF EXISTS public.create_payment_request(UUID, NUMERIC, TEXT, TEXT);

CREATE OR REPLACE FUNCTION public.create_payment_request(
  _invoice_id UUID,
  _amount NUMERIC,
  _type TEXT,
  _idempotency_key TEXT,
  _method TEXT DEFAULT 'stripe',
  _rib_id UUID DEFAULT NULL
) RETURNS UUID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_project_id UUID;
  v_client_id UUID;
  v_amount_total NUMERIC;
  v_paid_total NUMERIC;
  v_pending NUMERIC;
  v_remaining NUMERIC;
  v_id UUID;
BEGIN
  SELECT i.project_id, p.client_id, i.amount, i.paid_total
  INTO v_project_id, v_client_id, v_amount_total, v_paid_total
  FROM public.invoices i JOIN public.projects p ON p.id = i.project_id
  WHERE i.id = _invoice_id
  FOR UPDATE OF i;

  IF v_project_id IS NULL THEN
    RAISE EXCEPTION 'invoice not found';
  END IF;
  IF NOT public.is_project_admin(v_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;
  IF _type NOT IN ('deposit', 'partial', 'balance') THEN
    RAISE EXCEPTION 'invalid payment request type';
  END IF;
  IF _amount IS NULL OR _amount <= 0 THEN
    RAISE EXCEPTION 'amount must be positive';
  END IF;
  IF _method NOT IN ('stripe', 'rib') THEN
    RAISE EXCEPTION 'invalid method';
  END IF;
  IF _method = 'rib' AND (
    _rib_id IS NULL OR NOT EXISTS (SELECT 1 FROM public.payment_ribs WHERE id = _rib_id AND active)
  ) THEN
    RAISE EXCEPTION 'rib not found or inactive';
  END IF;

  -- Idempotent on double-click: return the existing row instead of erroring.
  SELECT id INTO v_id FROM public.payment_requests WHERE idempotency_key = _idempotency_key;
  IF v_id IS NOT NULL THEN
    RETURN v_id;
  END IF;

  SELECT COALESCE(SUM(amount), 0) INTO v_pending
  FROM public.payment_requests WHERE invoice_id = _invoice_id AND status = 'pending';

  v_remaining := v_amount_total - v_paid_total - v_pending;
  IF _amount > v_remaining THEN
    RAISE EXCEPTION 'amount exceeds the remaining balance (% > %)', _amount, v_remaining;
  END IF;

  INSERT INTO public.payment_requests
    (invoice_id, project_id, client_id, type, amount, currency, idempotency_key, created_by,
     method, rib_id)
  VALUES
    (_invoice_id, v_project_id, v_client_id, _type, _amount,
     (SELECT currency FROM public.invoices WHERE id = _invoice_id),
     _idempotency_key, auth.uid(),
     _method, CASE WHEN _method = 'rib' THEN _rib_id ELSE NULL END)
  RETURNING id INTO v_id;

  RETURN v_id;
END; $$;
REVOKE ALL ON FUNCTION public.create_payment_request(uuid, numeric, text, text, text, uuid)
  FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.create_payment_request(uuid, numeric, text, text, text, uuid)
  TO authenticated;

-- get_rib_details: the only place the decrypted IBAN/BIC ever surface,
-- gated on the caller being an admin of the request's own project (not
-- superadmin-only — any admin sending the request needs to read it back
-- to build the email).
CREATE OR REPLACE FUNCTION public.get_rib_details(_rib_id UUID, _project_id UUID)
RETURNS TABLE (label TEXT, holder_name TEXT, iban TEXT, bic TEXT)
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $$
BEGIN
  IF NOT public.is_project_admin(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  RETURN QUERY
  SELECT r.label, r.holder_name,
         (ds.decrypted_secret::jsonb ->> 'iban')::TEXT,
         (ds.decrypted_secret::jsonb ->> 'bic')::TEXT
  FROM public.payment_ribs r
  JOIN vault.decrypted_secrets ds ON ds.id = r.vault_secret_id
  WHERE r.id = _rib_id AND r.active;
END;
$$;

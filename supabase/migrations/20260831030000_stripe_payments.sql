-- Real Stripe integration: deposits, partial payments, payment-request history.
-- Additive only — existing `invoices.status` (paid|waiting|upcoming) keeps working
-- unchanged for every current screen; new logic lives in `payment_status` and the
-- new `payment_requests` table, which is the source of truth for amounts paid.

-- 1. clients: one Stripe Customer per company.
ALTER TABLE public.clients ADD COLUMN stripe_customer_id TEXT UNIQUE;

-- 2. invoices: deposit configuration + running totals. All monetary columns are
-- NUMERIC (exact, matches the existing `amount`/`total_amount`/`paid_amount`
-- convention) — never float. Amounts are only converted to integer cents at the
-- Stripe API call boundary, in server code, never stored that way.
ALTER TABLE public.invoices
  ADD COLUMN deposit_type TEXT CHECK (deposit_type IN ('percentage', 'fixed')),
  ADD COLUMN deposit_percentage NUMERIC(5, 2),
  ADD COLUMN deposit_amount NUMERIC(12, 2),
  ADD COLUMN paid_total NUMERIC(12, 2) NOT NULL DEFAULT 0,
  ADD COLUMN currency TEXT NOT NULL DEFAULT 'eur',
  ADD COLUMN payment_status TEXT NOT NULL DEFAULT 'unpaid'
    CHECK (payment_status IN ('unpaid', 'deposit_pending', 'deposit_paid', 'partially_paid', 'paid', 'overdue')),
  ADD COLUMN reconciliation_flag BOOLEAN NOT NULL DEFAULT false;

-- Additive enum values for any future direct use of `invoice_status`; existing
-- values (paid|waiting|upcoming) are untouched, so every current call site
-- reading `invoices.status` keeps working exactly as before.
ALTER TYPE public.invoice_status ADD VALUE IF NOT EXISTS 'deposit_pending';
ALTER TYPE public.invoice_status ADD VALUE IF NOT EXISTS 'deposit_paid';
ALTER TYPE public.invoice_status ADD VALUE IF NOT EXISTS 'partially_paid';
ALTER TYPE public.invoice_status ADD VALUE IF NOT EXISTS 'failed';
ALTER TYPE public.invoice_status ADD VALUE IF NOT EXISTS 'cancelled';
ALTER TYPE public.invoice_status ADD VALUE IF NOT EXISTS 'refunded';

-- 3. payment_requests: full history of every payment ask against an invoice.
-- Never overwritten — the running total is always a SUM over this table.
CREATE TABLE public.payment_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES public.invoices(id) ON DELETE CASCADE,
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('deposit', 'partial', 'balance')),
  amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0),
  currency TEXT NOT NULL DEFAULT 'eur',
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'paid', 'canceled', 'failed', 'refunded')),
  stripe_payment_intent_id TEXT UNIQUE,
  idempotency_key TEXT UNIQUE NOT NULL,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  paid_at TIMESTAMPTZ,
  canceled_at TIMESTAMPTZ
);

CREATE INDEX payment_requests_invoice_id_idx ON public.payment_requests(invoice_id);
CREATE INDEX payment_requests_project_id_idx ON public.payment_requests(project_id);
CREATE INDEX payment_requests_stripe_pi_idx ON public.payment_requests(stripe_payment_intent_id);

GRANT SELECT ON public.payment_requests TO authenticated;
GRANT ALL ON public.payment_requests TO service_role;
ALTER TABLE public.payment_requests ENABLE ROW LEVEL SECURITY;

-- Writes only ever happen through the SECURITY DEFINER functions below (or the
-- service-role webhook handler) — no direct INSERT/UPDATE/DELETE grant to
-- `authenticated`, mirroring how `invoices`/`offers` already restrict writes.
CREATE POLICY "payment_requests read" ON public.payment_requests
  FOR SELECT TO authenticated USING (public.is_project_member(project_id));

-- 4. stripe_events: webhook idempotency ledger. Service-role only — Stripe's
-- webhook handler runs with no user auth context and no direct client access.
CREATE TABLE public.stripe_events (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  received_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  payload JSONB NOT NULL
);
GRANT ALL ON public.stripe_events TO service_role;
ALTER TABLE public.stripe_events ENABLE ROW LEVEL SECURITY;
-- No policies -> authenticated/anon have zero access; only service_role
-- (which bypasses RLS entirely) can touch this table.

-- 5. billing_settings: singleton, superadmin-editable default deposit %.
CREATE TABLE public.billing_settings (
  id INT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  default_deposit_percentage NUMERIC(5, 2) NOT NULL DEFAULT 30,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);
INSERT INTO public.billing_settings (id) VALUES (1);
GRANT SELECT ON public.billing_settings TO authenticated;
GRANT ALL ON public.billing_settings TO service_role;
ALTER TABLE public.billing_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "billing_settings read" ON public.billing_settings
  FOR SELECT TO authenticated USING (public.is_admin_or_above(auth.uid()));

-- 6. recompute_invoice_totals: the ONLY place `paid_total`/`payment_status` are
-- written. Called by the webhook handler (service-role context) and by the
-- reconciliation trigger below. Not granted to `authenticated` — it is not a
-- client-facing RPC.
CREATE OR REPLACE FUNCTION public.recompute_invoice_totals(_invoice_id UUID)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_amount NUMERIC;
  v_deposit_amount NUMERIC;
  v_paid NUMERIC;
  v_status TEXT;
  v_legacy_status public.invoice_status;
BEGIN
  SELECT amount, deposit_amount INTO v_amount, v_deposit_amount
  FROM public.invoices WHERE id = _invoice_id FOR UPDATE;
  IF NOT FOUND THEN RETURN; END IF;

  SELECT COALESCE(SUM(amount), 0) INTO v_paid
  FROM public.payment_requests WHERE invoice_id = _invoice_id AND status = 'paid';

  v_status := CASE
    WHEN v_paid <= 0 THEN 'unpaid'
    WHEN v_paid >= v_amount THEN 'paid'
    WHEN v_deposit_amount IS NOT NULL AND v_paid >= v_deposit_amount THEN 'partially_paid'
    WHEN v_deposit_amount IS NOT NULL AND v_paid < v_deposit_amount THEN 'partially_paid'
    ELSE 'partially_paid'
  END;
  -- deposit_paid is a distinct, more specific status only while the invoice
  -- carries a deposit and exactly the deposit has been settled so far.
  IF v_deposit_amount IS NOT NULL AND v_paid >= v_deposit_amount AND v_paid < v_amount THEN
    v_status := 'deposit_paid';
  END IF;

  v_legacy_status := CASE WHEN v_status = 'paid' THEN 'paid'::public.invoice_status
    WHEN v_status = 'unpaid' THEN 'waiting'::public.invoice_status
    ELSE 'waiting'::public.invoice_status END;

  UPDATE public.invoices
  SET paid_total = v_paid,
      payment_status = v_status,
      status = v_legacy_status,
      paid_at = CASE WHEN v_status = 'paid' THEN COALESCE(paid_at, now()) ELSE NULL END
  WHERE id = _invoice_id;
END; $$;
REVOKE ALL ON FUNCTION public.recompute_invoice_totals(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.recompute_invoice_totals(uuid) TO service_role;

-- 7. Flag (never silently break) an invoice whose total changes after payment
-- activity already exists against it.
CREATE OR REPLACE FUNCTION public.flag_invoice_amount_change()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NEW.amount IS DISTINCT FROM OLD.amount
     AND EXISTS (SELECT 1 FROM public.payment_requests WHERE invoice_id = NEW.id) THEN
    NEW.reconciliation_flag := true;
  END IF;
  RETURN NEW;
END; $$;

CREATE TRIGGER invoices_flag_amount_change
  BEFORE UPDATE ON public.invoices
  FOR EACH ROW EXECUTE FUNCTION public.flag_invoice_amount_change();

-- 8. set_invoice_deposit: superadmin-only pricing control.
CREATE OR REPLACE FUNCTION public.set_invoice_deposit(
  _invoice_id UUID,
  _deposit_type TEXT,
  _deposit_value NUMERIC
) RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_amount NUMERIC;
  v_deposit_amount NUMERIC;
BEGIN
  IF NOT public.is_superadmin(auth.uid()) THEN
    RAISE EXCEPTION 'not allowed: only a superadmin can set deposit pricing';
  END IF;
  IF _deposit_type NOT IN ('percentage', 'fixed') THEN
    RAISE EXCEPTION 'invalid deposit type';
  END IF;

  SELECT amount INTO v_amount FROM public.invoices WHERE id = _invoice_id;
  IF v_amount IS NULL THEN
    RAISE EXCEPTION 'invoice not found';
  END IF;

  v_deposit_amount := CASE
    WHEN _deposit_type = 'percentage' THEN ROUND(v_amount * _deposit_value / 100, 2)
    ELSE _deposit_value
  END;
  IF v_deposit_amount <= 0 OR v_deposit_amount > v_amount THEN
    RAISE EXCEPTION 'deposit amount must be between 0 and the invoice total';
  END IF;

  UPDATE public.invoices
  SET deposit_type = _deposit_type,
      deposit_percentage = CASE WHEN _deposit_type = 'percentage' THEN _deposit_value ELSE NULL END,
      deposit_amount = v_deposit_amount
  WHERE id = _invoice_id;
END; $$;
REVOKE ALL ON FUNCTION public.set_invoice_deposit(uuid, text, numeric) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.set_invoice_deposit(uuid, text, numeric) TO authenticated;

-- 9. set_default_deposit_percentage: superadmin-only global default.
CREATE OR REPLACE FUNCTION public.set_default_deposit_percentage(_pct NUMERIC)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT public.is_superadmin(auth.uid()) THEN
    RAISE EXCEPTION 'not allowed: only a superadmin can change the default deposit';
  END IF;
  IF _pct <= 0 OR _pct > 100 THEN
    RAISE EXCEPTION 'percentage must be between 0 and 100';
  END IF;
  UPDATE public.billing_settings
  SET default_deposit_percentage = _pct, updated_at = now(), updated_by = auth.uid()
  WHERE id = 1;
END; $$;
REVOKE ALL ON FUNCTION public.set_default_deposit_percentage(numeric) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.set_default_deposit_percentage(numeric) TO authenticated;

-- 10. create_payment_request: any project admin (or superadmin) can send a
-- request, but never for more than the real remaining balance, recomputed
-- from the DB and locked against concurrent requests.
CREATE OR REPLACE FUNCTION public.create_payment_request(
  _invoice_id UUID,
  _amount NUMERIC,
  _type TEXT,
  _idempotency_key TEXT
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
    (invoice_id, project_id, client_id, type, amount, currency, idempotency_key, created_by)
  VALUES
    (_invoice_id, v_project_id, v_client_id, _type, _amount,
     (SELECT currency FROM public.invoices WHERE id = _invoice_id),
     _idempotency_key, auth.uid())
  RETURNING id INTO v_id;

  RETURN v_id;
END; $$;
REVOKE ALL ON FUNCTION public.create_payment_request(uuid, numeric, text, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.create_payment_request(uuid, numeric, text, text) TO authenticated;

-- 11. cancel_payment_request: admin-only, idempotent no-op once settled.
CREATE OR REPLACE FUNCTION public.cancel_payment_request(_id UUID)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_project_id UUID;
BEGIN
  SELECT project_id INTO v_project_id FROM public.payment_requests WHERE id = _id;
  IF v_project_id IS NULL THEN RETURN; END IF;
  IF NOT public.is_project_admin(v_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;
  UPDATE public.payment_requests
  SET status = 'canceled', canceled_at = now()
  WHERE id = _id AND status = 'pending';
END; $$;
REVOKE ALL ON FUNCTION public.cancel_payment_request(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.cancel_payment_request(uuid) TO authenticated;

-- 12. mark_invoice_paid: keep working for legacy/off-Stripe invoices (wire
-- transfer, etc.), but refuse once Stripe payment activity exists for this
-- invoice — the webhook is then the only authority allowed to settle it.
CREATE OR REPLACE FUNCTION public.mark_invoice_paid(_invoice_id uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  v_project_id UUID;
  v_amount NUMERIC;
  v_phase public.project_phase;
BEGIN
  SELECT project_id, amount INTO v_project_id, v_amount FROM public.invoices WHERE id = _invoice_id;
  IF v_project_id IS NULL OR NOT public.is_project_admin(v_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;
  IF EXISTS (SELECT 1 FROM public.payment_requests WHERE invoice_id = _invoice_id) THEN
    RAISE EXCEPTION 'invoice is Stripe-managed; use the payment request flow instead';
  END IF;

  UPDATE public.invoices SET status = 'paid', paid_at = now() WHERE id = _invoice_id AND status <> 'paid';
  IF NOT FOUND THEN RETURN; END IF;

  UPDATE public.projects SET paid_amount = paid_amount + v_amount WHERE id = v_project_id
  RETURNING phase INTO v_phase;

  UPDATE public.documents SET status = 'completed'
  WHERE project_id = v_project_id AND type = 'invoice' AND status <> 'completed';

  IF v_phase = 'deposit' THEN
    PERFORM public.advance_project(v_project_id, 'launch', 'wayne', 58);
  END IF;
END; $function$;

-- 13. Service-role-only functions the webhook handler calls. These run with
-- no user auth context (Stripe → server, signature-verified, no JWT), so they
-- are granted to `service_role` only, never `authenticated`/`anon`. Status
-- guards make every one of them safe against duplicate/out-of-order delivery.

CREATE OR REPLACE FUNCTION public.service_confirm_payment_request(_payment_intent_id TEXT)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_id UUID;
  v_invoice_id UUID;
  v_project_id UUID;
  v_type TEXT;
  v_status TEXT;
  v_phase public.project_phase;
  v_payment_status TEXT;
BEGIN
  SELECT id, invoice_id, project_id, type, status INTO v_id, v_invoice_id, v_project_id, v_type, v_status
  FROM public.payment_requests WHERE stripe_payment_intent_id = _payment_intent_id
  FOR UPDATE;

  IF v_id IS NULL THEN RETURN; END IF; -- defensive: no matching request
  IF v_status = 'paid' THEN RETURN; END IF; -- idempotent: duplicate/out-of-order event

  UPDATE public.payment_requests SET status = 'paid', paid_at = now() WHERE id = v_id;
  PERFORM public.recompute_invoice_totals(v_invoice_id);

  SELECT payment_status INTO v_payment_status FROM public.invoices WHERE id = v_invoice_id;
  SELECT phase INTO v_phase FROM public.projects WHERE id = v_project_id;

  -- Mirrors mark_invoice_paid's existing rule: first confirmed deposit while
  -- the project is waiting on it unblocks the next onboarding step, with no
  -- admin confirmation required.
  IF v_type = 'deposit' AND v_phase = 'deposit'
     AND v_payment_status IN ('deposit_paid', 'paid') THEN
    UPDATE public.projects
    SET phase = 'launch', waiting_on = 'wayne', progress = GREATEST(progress, 58)
    WHERE id = v_project_id;
    PERFORM public.sync_milestones(v_project_id, 'launch');
  END IF;
END; $$;
REVOKE ALL ON FUNCTION public.service_confirm_payment_request(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.service_confirm_payment_request(text) TO service_role;

CREATE OR REPLACE FUNCTION public.service_fail_payment_request(_payment_intent_id TEXT)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  UPDATE public.payment_requests SET status = 'failed'
  WHERE stripe_payment_intent_id = _payment_intent_id AND status = 'pending';
END; $$;
REVOKE ALL ON FUNCTION public.service_fail_payment_request(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.service_fail_payment_request(text) TO service_role;

CREATE OR REPLACE FUNCTION public.service_cancel_payment_request_by_pi(_payment_intent_id TEXT)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  UPDATE public.payment_requests SET status = 'canceled', canceled_at = now()
  WHERE stripe_payment_intent_id = _payment_intent_id AND status = 'pending';
END; $$;
REVOKE ALL ON FUNCTION public.service_cancel_payment_request_by_pi(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.service_cancel_payment_request_by_pi(text) TO service_role;

CREATE OR REPLACE FUNCTION public.service_refund_payment_request(_payment_intent_id TEXT)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_invoice_id UUID;
BEGIN
  UPDATE public.payment_requests SET status = 'refunded'
  WHERE stripe_payment_intent_id = _payment_intent_id AND status = 'paid'
  RETURNING invoice_id INTO v_invoice_id;

  IF v_invoice_id IS NOT NULL THEN
    PERFORM public.recompute_invoice_totals(v_invoice_id);
  END IF;
END; $$;
REVOKE ALL ON FUNCTION public.service_refund_payment_request(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.service_refund_payment_request(text) TO service_role;

-- 14. record_stripe_event: idempotency guard, service-role only.
-- Returns true the first time an event id is seen, false on any replay.
CREATE OR REPLACE FUNCTION public.record_stripe_event(_id TEXT, _type TEXT, _payload JSONB)
RETURNS BOOLEAN LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.stripe_events (id, type, payload) VALUES (_id, _type, _payload)
  ON CONFLICT (id) DO NOTHING;
  RETURN FOUND;
END; $$;
REVOKE ALL ON FUNCTION public.record_stripe_event(text, text, jsonb) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.record_stripe_event(text, text, jsonb) TO service_role;

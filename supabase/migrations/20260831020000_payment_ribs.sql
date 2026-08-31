-- PAYMENT_RIBS: bank transfer details an admin can attach to a payment
-- request, as an alternative to a payment link. The IBAN/BIC are never
-- hardcoded anywhere and never stored in cleartext — they're encrypted at
-- rest via Supabase Vault (pgsodium) and only ever decrypted server-side,
-- inside a SECURITY DEFINER function, at the moment a request is actually
-- sent. A bare SELECT on this table (or any RLS-exposed view) never returns
-- the IBAN/BIC — only vault_secret_id, an opaque pointer.
CREATE EXTENSION IF NOT EXISTS supabase_vault CASCADE;

CREATE TABLE public.payment_ribs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label TEXT NOT NULL,
  holder_name TEXT NOT NULL,
  vault_secret_id UUID NOT NULL,
  active BOOLEAN NOT NULL DEFAULT true,
  created_by UUID NOT NULL REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.payment_ribs TO authenticated;
GRANT ALL ON public.payment_ribs TO service_role;
ALTER TABLE public.payment_ribs ENABLE ROW LEVEL SECURITY;

-- Read-only for admins-or-above (to choose a RIB when sending a request, or
-- to manage the list as superadmin). No INSERT/UPDATE/DELETE policy exists
-- at all — every write goes through a SECURITY DEFINER RPC below that
-- enforces is_superadmin() itself, so RLS has nothing further to add there.
CREATE POLICY "payment_ribs read admin_or_above" ON public.payment_ribs
  FOR SELECT TO authenticated USING (public.is_admin_or_above(auth.uid()));

-- Superadmin-only RIB management. Each function re-checks is_superadmin
-- itself rather than relying on a table policy, since writes here always
-- go through vault.secrets too (no table policy could cover that half).

CREATE OR REPLACE FUNCTION public.superadmin_create_rib(
  _label TEXT,
  _holder_name TEXT,
  _iban TEXT,
  _bic TEXT
) RETURNS UUID
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $$
DECLARE
  v_secret_id UUID;
  v_rib_id UUID;
BEGIN
  IF NOT public.is_superadmin(auth.uid()) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;
  IF _iban IS NULL OR length(regexp_replace(_iban, '\s', '', 'g')) < 10 THEN
    RAISE EXCEPTION 'invalid iban';
  END IF;

  v_secret_id := vault.create_secret(
    jsonb_build_object(
      'iban', upper(regexp_replace(_iban, '\s', '', 'g')),
      'bic', upper(regexp_replace(coalesce(_bic, ''), '\s', '', 'g'))
    )::text,
    'rib-' || gen_random_uuid()::text,
    'Payment RIB'
  );

  INSERT INTO public.payment_ribs (label, holder_name, vault_secret_id, created_by)
  VALUES (_label, _holder_name, v_secret_id, auth.uid())
  RETURNING id INTO v_rib_id;

  RETURN v_rib_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.superadmin_update_rib(
  _rib_id UUID,
  _label TEXT,
  _holder_name TEXT,
  _iban TEXT,
  _bic TEXT
) RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $$
DECLARE
  v_secret_id UUID;
BEGIN
  IF NOT public.is_superadmin(auth.uid()) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;
  IF _iban IS NULL OR length(regexp_replace(_iban, '\s', '', 'g')) < 10 THEN
    RAISE EXCEPTION 'invalid iban';
  END IF;

  SELECT vault_secret_id INTO v_secret_id FROM public.payment_ribs WHERE id = _rib_id;
  IF v_secret_id IS NULL THEN
    RAISE EXCEPTION 'rib not found';
  END IF;

  UPDATE vault.secrets
  SET secret = jsonb_build_object(
    'iban', upper(regexp_replace(_iban, '\s', '', 'g')),
    'bic', upper(regexp_replace(coalesce(_bic, ''), '\s', '', 'g'))
  )::text
  WHERE id = v_secret_id;

  UPDATE public.payment_ribs SET label = _label, holder_name = _holder_name WHERE id = _rib_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.superadmin_set_rib_active(_rib_id UUID, _active BOOLEAN)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $$
BEGIN
  IF NOT public.is_superadmin(auth.uid()) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;
  UPDATE public.payment_ribs SET active = _active WHERE id = _rib_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.superadmin_delete_rib(_rib_id UUID)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $$
DECLARE
  v_secret_id UUID;
BEGIN
  IF NOT public.is_superadmin(auth.uid()) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  SELECT vault_secret_id INTO v_secret_id FROM public.payment_ribs WHERE id = _rib_id;
  DELETE FROM public.payment_ribs WHERE id = _rib_id;
  IF v_secret_id IS NOT NULL THEN
    DELETE FROM vault.secrets WHERE id = v_secret_id;
  END IF;
END;
$$;

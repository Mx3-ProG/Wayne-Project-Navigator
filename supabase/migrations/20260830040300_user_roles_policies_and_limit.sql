-- Role management: only a superadmin can grant/revoke roles, and there can
-- never be more than 2 superadmins (enforced in the database, not just in
-- application code).

GRANT INSERT, UPDATE, DELETE ON public.user_roles TO authenticated;

CREATE POLICY "roles insert superadmin" ON public.user_roles
  FOR INSERT TO authenticated
  WITH CHECK (public.is_superadmin(auth.uid()));

CREATE POLICY "roles update superadmin" ON public.user_roles
  FOR UPDATE TO authenticated
  USING (public.is_superadmin(auth.uid()))
  WITH CHECK (public.is_superadmin(auth.uid()));

CREATE POLICY "roles delete superadmin" ON public.user_roles
  FOR DELETE TO authenticated
  USING (public.is_superadmin(auth.uid()));

-- Hard cap: at most 2 rows with role = 'superadmin', ever. Applies to
-- INSERT and UPDATE (e.g. promoting an existing admin to superadmin), and
-- runs regardless of who/what performs the write (app, RPC, service_role).
CREATE OR REPLACE FUNCTION public.enforce_superadmin_limit()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NEW.role = 'superadmin' THEN
    IF (SELECT count(*) FROM public.user_roles
        WHERE role = 'superadmin' AND user_id <> NEW.user_id) >= 2 THEN
      RAISE EXCEPTION 'Maximum of 2 superadmins allowed';
    END IF;
  END IF;
  RETURN NEW;
END; $$;

CREATE TRIGGER trg_enforce_superadmin_limit
BEFORE INSERT OR UPDATE ON public.user_roles
FOR EACH ROW EXECUTE FUNCTION public.enforce_superadmin_limit();

-- Single, audited entry point for role changes, so the client never has to
-- build raw INSERT/DELETE statements against user_roles directly.
CREATE OR REPLACE FUNCTION public.superadmin_set_role(_target_user_id UUID, _role public.app_role)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT public.is_superadmin(auth.uid()) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (_target_user_id, _role)
  ON CONFLICT (user_id, role) DO NOTHING;
END; $$;

REVOKE ALL ON FUNCTION public.superadmin_set_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.superadmin_set_role(uuid, public.app_role) TO authenticated;

CREATE OR REPLACE FUNCTION public.superadmin_revoke_role(_target_user_id UUID, _role public.app_role)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT public.is_superadmin(auth.uid()) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  DELETE FROM public.user_roles WHERE user_id = _target_user_id AND role = _role;
END; $$;

REVOKE ALL ON FUNCTION public.superadmin_revoke_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.superadmin_revoke_role(uuid, public.app_role) TO authenticated;

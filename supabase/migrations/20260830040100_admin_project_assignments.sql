-- Per-project admin assignments: an 'admin' now only has access to the
-- projects listed here. 'superadmin' always bypasses this and sees/does
-- everything (see is_project_admin below).
CREATE TABLE public.admin_project_assignments (
  admin_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  assigned_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (admin_id, project_id)
);

GRANT SELECT ON public.admin_project_assignments TO authenticated;
GRANT ALL ON public.admin_project_assignments TO service_role;
ALTER TABLE public.admin_project_assignments ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.is_superadmin(_user_id UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.has_role(_user_id, 'superadmin');
$$;

CREATE OR REPLACE FUNCTION public.is_admin_or_above(_user_id UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.has_role(_user_id, 'admin') OR public.has_role(_user_id, 'superadmin');
$$;

-- True for a superadmin (always), or for an admin explicitly assigned to
-- this project. This is the single primitive every project-scoped policy
-- and RPC should use instead of a bare has_role(uid,'admin') check.
CREATE OR REPLACE FUNCTION public.is_project_admin(_project_id UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.is_superadmin(auth.uid()) OR EXISTS (
    SELECT 1 FROM public.admin_project_assignments
    WHERE project_id = _project_id AND admin_id = auth.uid()
  );
$$;

CREATE POLICY "assignments read own" ON public.admin_project_assignments
  FOR SELECT TO authenticated
  USING (admin_id = auth.uid() OR public.is_superadmin(auth.uid()));

CREATE POLICY "assignments insert superadmin" ON public.admin_project_assignments
  FOR INSERT TO authenticated
  WITH CHECK (public.is_superadmin(auth.uid()));

CREATE POLICY "assignments update superadmin" ON public.admin_project_assignments
  FOR UPDATE TO authenticated
  USING (public.is_superadmin(auth.uid()))
  WITH CHECK (public.is_superadmin(auth.uid()));

CREATE POLICY "assignments delete superadmin" ON public.admin_project_assignments
  FOR DELETE TO authenticated
  USING (public.is_superadmin(auth.uid()));

-- Replace the global "any admin sees everything" bypass with per-project
-- scoping (public.is_project_admin), while superadmin keeps full access
-- everywhere via public.is_superadmin.

-- is_project_member is used by nearly every project-scoped read policy and
-- RPC, so fixing it here fixes almost all of them at once.
CREATE OR REPLACE FUNCTION public.is_project_member(_project_id UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.project_members
    WHERE project_id = _project_id AND user_id = auth.uid()
  ) OR public.is_project_admin(_project_id);
$$;

CREATE OR REPLACE FUNCTION public.is_client_member(_client_id UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.project_members m
    JOIN public.projects p ON p.id = m.project_id
    WHERE p.client_id = _client_id AND m.user_id = auth.uid()
  ) OR public.is_superadmin(auth.uid()) OR EXISTS (
    SELECT 1 FROM public.projects p
    WHERE p.client_id = _client_id AND public.is_project_admin(p.id)
  );
$$;

-- Direct has_role(admin) policies -> scoped to assigned projects
-- (is_project_admin already includes the superadmin bypass).

DROP POLICY IF EXISTS "own roles read" ON public.user_roles;
CREATE POLICY "own roles read" ON public.user_roles
  FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.is_admin_or_above(auth.uid()));

DROP POLICY IF EXISTS "project update admin" ON public.projects;
CREATE POLICY "project update admin" ON public.projects
  FOR UPDATE TO authenticated
  USING (public.is_project_admin(id)) WITH CHECK (public.is_project_admin(id));

DROP POLICY IF EXISTS "milestones write admin" ON public.milestones;
CREATE POLICY "milestones write admin" ON public.milestones
  FOR UPDATE TO authenticated
  USING (public.is_project_admin(project_id)) WITH CHECK (public.is_project_admin(project_id));

DROP POLICY IF EXISTS "invoices update admin" ON public.invoices;
CREATE POLICY "invoices update admin" ON public.invoices
  FOR UPDATE TO authenticated
  USING (public.is_project_admin(project_id)) WITH CHECK (public.is_project_admin(project_id));

DROP POLICY IF EXISTS "offers read published" ON public.offers;
CREATE POLICY "offers read published" ON public.offers
  FOR SELECT TO authenticated
  USING (public.is_project_admin(project_id) OR (status = 'published' AND public.is_project_member(project_id)));

DROP POLICY IF EXISTS "offers admin insert" ON public.offers;
CREATE POLICY "offers admin insert" ON public.offers
  FOR INSERT TO authenticated
  WITH CHECK (public.is_project_admin(project_id));

DROP POLICY IF EXISTS "offers admin update" ON public.offers;
CREATE POLICY "offers admin update" ON public.offers
  FOR UPDATE TO authenticated
  USING (public.is_project_admin(project_id)) WITH CHECK (public.is_project_admin(project_id));

DROP POLICY IF EXISTS "notes admin read" ON public.project_notes;
CREATE POLICY "notes admin read" ON public.project_notes
  FOR SELECT TO authenticated USING (public.is_project_admin(project_id));

DROP POLICY IF EXISTS "notes admin insert" ON public.project_notes;
CREATE POLICY "notes admin insert" ON public.project_notes
  FOR INSERT TO authenticated WITH CHECK (public.is_project_admin(project_id) AND author_id = auth.uid());

DROP POLICY IF EXISTS "notes admin update" ON public.project_notes;
CREATE POLICY "notes admin update" ON public.project_notes
  FOR UPDATE TO authenticated USING (public.is_project_admin(project_id)) WITH CHECK (public.is_project_admin(project_id));

DROP POLICY IF EXISTS "notes admin delete" ON public.project_notes;
CREATE POLICY "notes admin delete" ON public.project_notes
  FOR DELETE TO authenticated USING (public.is_project_admin(project_id));

-- Superadmin-only deletion of clients/projects (no delete policy existed before).
GRANT DELETE ON public.clients TO authenticated;
CREATE POLICY "clients delete superadmin" ON public.clients
  FOR DELETE TO authenticated USING (public.is_superadmin(auth.uid()));

GRANT DELETE ON public.projects TO authenticated;
CREATE POLICY "projects delete superadmin" ON public.projects
  FOR DELETE TO authenticated USING (public.is_superadmin(auth.uid()));

-- RPCs that gated on a bare has_role(admin) -> scope to the project they operate on.

CREATE OR REPLACE FUNCTION public.save_offer(
  _project_id UUID,
  _title TEXT,
  _description TEXT,
  _stripe_url TEXT,
  _publish BOOLEAN DEFAULT false
) RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $$
BEGIN
  IF NOT public.is_project_admin(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  INSERT INTO public.offers (project_id, title, description, stripe_url, status, published_at)
  VALUES (
    _project_id,
    COALESCE(NULLIF(_title, ''), 'Proposition'),
    _description,
    _stripe_url,
    CASE WHEN _publish THEN 'published' ELSE 'draft' END,
    CASE WHEN _publish THEN now() ELSE NULL END
  )
  ON CONFLICT (project_id) DO UPDATE SET
    title = COALESCE(NULLIF(EXCLUDED.title, ''), 'Proposition'),
    description = EXCLUDED.description,
    stripe_url = EXCLUDED.stripe_url,
    status = CASE WHEN _publish THEN 'published' ELSE public.offers.status END,
    published_at = CASE
      WHEN _publish THEN COALESCE(public.offers.published_at, now())
      ELSE public.offers.published_at
    END;
END; $$;

CREATE OR REPLACE FUNCTION public.unpublish_offer(_project_id UUID)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $$
BEGIN
  IF NOT public.is_project_admin(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;
  UPDATE public.offers SET status = 'draft', published_at = NULL WHERE project_id = _project_id;
END; $$;

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

-- admin_list_projects: callable by any admin-or-above, but only returns the
-- projects a plain admin is assigned to (superadmin still sees everything).
DROP FUNCTION IF EXISTS public.admin_list_projects();

CREATE FUNCTION public.admin_list_projects()
RETURNS TABLE (
  project_id UUID,
  project_name TEXT,
  client_name TEXT,
  company TEXT,
  full_name TEXT,
  email TEXT,
  phase public.project_phase,
  waiting_on public.waiting_on,
  progress INTEGER,
  total_amount NUMERIC,
  paid_amount NUMERIC,
  business_profile JSONB,
  business_profile_submitted_at TIMESTAMPTZ,
  brief_submitted_at TIMESTAMPTZ,
  brief_type TEXT,
  brief_categories TEXT[],
  agreement_signed_at TIMESTAMPTZ,
  offer_status TEXT,
  created_at TIMESTAMPTZ
)
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $$
BEGIN
  IF NOT public.is_admin_or_above(auth.uid()) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  RETURN QUERY
  SELECT
    p.id,
    p.name,
    c.name,
    pr.company,
    pr.full_name,
    pr.email,
    p.phase,
    p.waiting_on,
    p.progress,
    p.total_amount,
    p.paid_amount,
    p.business_profile,
    p.business_profile_submitted_at,
    b.submitted_at,
    b.project_type,
    b.categories,
    a.signed_at,
    COALESCE(o.status, 'none'),
    p.created_at
  FROM public.projects p
  JOIN public.clients c ON c.id = p.client_id
  LEFT JOIN public.project_members m ON m.project_id = p.id AND m.role = 'owner'
  LEFT JOIN public.profiles pr ON pr.id = m.user_id
  LEFT JOIN public.briefs b ON b.project_id = p.id
  LEFT JOIN public.agreements a ON a.project_id = p.id
  LEFT JOIN public.offers o ON o.project_id = p.id
  WHERE public.is_superadmin(auth.uid()) OR EXISTS (
    SELECT 1 FROM public.admin_project_assignments apa
    WHERE apa.project_id = p.id AND apa.admin_id = auth.uid()
  )
  ORDER BY p.created_at DESC;
END; $$;

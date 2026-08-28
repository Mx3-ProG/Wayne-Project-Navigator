-- Hardware + Software brief support.
-- Additive, forward-only: existing rows and callers keep working unchanged.

-- 1. Narrow, queryable columns on briefs, purely for admin filtering.
-- All the rich per-branch content (hardware fields, software free text, etc.)
-- stays inside `answers` JSONB exactly as before — no schema explosion.
ALTER TABLE public.briefs
  ADD COLUMN IF NOT EXISTS project_type TEXT CHECK (project_type IN ('software','hardware','hybrid')),
  ADD COLUMN IF NOT EXISTS categories TEXT[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS unsure BOOLEAN NOT NULL DEFAULT false;

-- 2. Backfill: reclassify already-submitted (or in-progress) legacy briefs
-- into the new model so admin filters work for every project, old and new.
-- Idempotent (guarded by `project_type IS NULL`), never touches `answers`.
UPDATE public.briefs
SET project_type = 'software',
    categories = ARRAY[answers->>'project_type']
WHERE answers ? 'project_type' AND project_type IS NULL;

-- 3. submit_brief gains trailing defaulted params — additive signature
-- change, no DROP FUNCTION needed. Old in-flight calls without the new
-- params still work.
CREATE OR REPLACE FUNCTION public.submit_brief(
  _project_id UUID,
  _answers JSONB,
  _project_type TEXT DEFAULT NULL,
  _categories TEXT[] DEFAULT NULL,
  _unsure BOOLEAN DEFAULT false
)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_deposit_paid BOOLEAN;
BEGIN
  IF NOT public.is_project_member(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  UPDATE public.briefs
  SET answers = _answers,
      project_type = COALESCE(_project_type, project_type),
      categories = COALESCE(_categories, categories),
      unsure = _unsure,
      submitted_at = now()
  WHERE project_id = _project_id;

  UPDATE public.documents SET status = 'completed' WHERE project_id = _project_id AND type = 'brief';

  SELECT EXISTS (
    SELECT 1 FROM public.invoices
    WHERE project_id = _project_id AND i18n_key = 'deposit' AND status = 'paid'
  ) INTO v_deposit_paid;

  IF v_deposit_paid THEN
    PERFORM public.advance_project(_project_id, 'launch', 'wayne', 58);
  ELSE
    PERFORM public.advance_project(_project_id, 'brief', 'client', 30);
  END IF;
END; $$;

GRANT EXECUTE ON FUNCTION public.submit_brief(uuid, jsonb, text, text[], boolean) TO authenticated;
REVOKE ALL ON FUNCTION public.submit_brief(uuid, jsonb, text, text[], boolean) FROM PUBLIC, anon;

-- 4. admin_list_projects: the returned column list changes, which Postgres
-- does not allow via a bare CREATE OR REPLACE — drop and recreate.
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
  IF NOT public.has_role(auth.uid(), 'admin') THEN
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
  ORDER BY p.created_at DESC;
END; $$;

-- 5. Storage bucket for brief attachments (PDF, plans, photos, videos,
-- CAD/3D files, technical docs). Private bucket, RLS-gated per project.
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'brief-attachments',
  'brief-attachments',
  false,
  52428800,
  ARRAY[
    'application/pdf',
    'image/png',
    'image/jpeg',
    'image/webp',
    'image/gif',
    'video/mp4',
    'video/quicktime',
    'model/step',
    'model/stl',
    'application/sla',
    'application/vnd.ms-pki.stl',
    'application/octet-stream'
  ]
)
ON CONFLICT (id) DO NOTHING;

-- Path convention: {project_id}/{uuid}-{filename} — the project_id prefix is
-- what makes these policies straightforward.
CREATE POLICY "brief attachments insert" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'brief-attachments'
    AND public.is_project_member((storage.foldername(name))[1]::uuid)
  );

CREATE POLICY "brief attachments read" ON storage.objects
  FOR SELECT TO authenticated
  USING (
    bucket_id = 'brief-attachments'
    AND public.is_project_member((storage.foldername(name))[1]::uuid)
  );

CREATE POLICY "brief attachments delete" ON storage.objects
  FOR DELETE TO authenticated
  USING (
    bucket_id = 'brief-attachments'
    AND public.is_project_member((storage.foldername(name))[1]::uuid)
  );

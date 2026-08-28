ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS business_profile jsonb NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS business_profile_submitted_at timestamptz;

CREATE OR REPLACE FUNCTION public.save_business_profile(_project_id uuid, _profile jsonb, _submit boolean DEFAULT false)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF NOT public.is_project_member(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  UPDATE public.projects
  SET business_profile = COALESCE(_profile, '{}'::jsonb),
      business_profile_submitted_at = CASE
        WHEN _submit THEN COALESCE(business_profile_submitted_at, now())
        ELSE business_profile_submitted_at
      END
  WHERE id = _project_id;
END; $$;

REVOKE ALL ON FUNCTION public.save_business_profile(uuid, jsonb, boolean) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.save_business_profile(uuid, jsonb, boolean) TO authenticated;
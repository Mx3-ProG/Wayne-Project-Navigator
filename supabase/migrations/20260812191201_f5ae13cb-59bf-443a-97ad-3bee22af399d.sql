CREATE TABLE public.offers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT 'Proposition',
  description TEXT,
  stripe_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX offers_project_unique ON public.offers(project_id);

GRANT SELECT, INSERT, UPDATE ON public.offers TO authenticated;
GRANT ALL ON public.offers TO service_role;

ALTER TABLE public.offers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "offers read published" ON public.offers
  FOR SELECT TO authenticated
  USING ((status = 'published' AND public.is_project_member(project_id)) OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "offers admin insert" ON public.offers
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "offers admin update" ON public.offers
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER offers_updated BEFORE UPDATE ON public.offers
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Upsert / publish an offer (admin only)
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
  IF NOT public.has_role(auth.uid(), 'admin') THEN
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
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'not allowed';
  END IF;
  UPDATE public.offers SET status = 'draft', published_at = NULL WHERE project_id = _project_id;
END; $$;

-- Invoices can only be marked paid by an admin from now on
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
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  SELECT project_id, amount INTO v_project_id, v_amount FROM public.invoices WHERE id = _invoice_id;
  IF v_project_id IS NULL THEN
    RAISE EXCEPTION 'not found';
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

-- Admin overview
CREATE OR REPLACE FUNCTION public.admin_list_projects()
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

-- Grant admin role to the owner account
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin' FROM public.profiles WHERE email = '3xcorp.amadeus@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;

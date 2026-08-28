CREATE OR REPLACE FUNCTION public.sync_milestones(_project_id UUID, _phase public.project_phase)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_order INTEGER;
BEGIN
  v_order := array_position(ARRAY['agreement','welcome','deposit','brief','launch','production','review','delivery','live']::text[], _phase::text);
  UPDATE public.milestones m
  SET status = CASE
        WHEN array_position(ARRAY['agreement','welcome','deposit','brief','launch','production','review','delivery','live']::text[], m.key) < v_order THEN 'done'::public.step_status
        WHEN array_position(ARRAY['agreement','welcome','deposit','brief','launch','production','review','delivery','live']::text[], m.key) = v_order THEN 'active'::public.step_status
        ELSE 'upcoming'::public.step_status
      END,
      completed_at = CASE
        WHEN array_position(ARRAY['agreement','welcome','deposit','brief','launch','production','review','delivery','live']::text[], m.key) < v_order THEN COALESCE(m.completed_at, now())
        ELSE NULL
      END
  WHERE m.project_id = _project_id;
END; $$;
REVOKE ALL ON FUNCTION public.sync_milestones(uuid, public.project_phase) FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.advance_project(
  _project_id UUID,
  _phase public.project_phase,
  _waiting_on public.waiting_on,
  _progress INTEGER
) RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT public.is_project_member(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  UPDATE public.projects
  SET phase = _phase,
      waiting_on = _waiting_on,
      progress = GREATEST(0, LEAST(100, _progress)),
      delivered_at = CASE WHEN _phase IN ('delivery','live') THEN COALESCE(delivered_at, now()) ELSE delivered_at END
  WHERE id = _project_id;

  PERFORM public.sync_milestones(_project_id, _phase);
END; $$;

CREATE OR REPLACE FUNCTION public.sign_agreement(_project_id UUID, _name TEXT)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT public.is_project_member(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  UPDATE public.agreements
  SET signed_name = _name, signed_at = now()
  WHERE project_id = _project_id;

  UPDATE public.documents
  SET status = 'signed'
  WHERE project_id = _project_id AND type = 'agreement';

  PERFORM public.advance_project(_project_id, 'welcome', 'client', 18);
END; $$;

CREATE OR REPLACE FUNCTION public.mark_invoice_paid(_invoice_id UUID)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_project_id UUID;
  v_amount NUMERIC;
  v_phase public.project_phase;
BEGIN
  SELECT project_id, amount INTO v_project_id, v_amount FROM public.invoices WHERE id = _invoice_id;
  IF v_project_id IS NULL OR NOT public.is_project_member(v_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  UPDATE public.invoices SET status = 'paid', paid_at = now() WHERE id = _invoice_id AND status <> 'paid';
  IF NOT FOUND THEN RETURN; END IF;

  UPDATE public.projects SET paid_amount = paid_amount + v_amount WHERE id = v_project_id
  RETURNING phase INTO v_phase;

  UPDATE public.documents SET status = 'completed'
  WHERE project_id = v_project_id AND type = 'invoice' AND status <> 'completed';

  IF v_phase = 'deposit' THEN
    PERFORM public.advance_project(v_project_id, 'brief', 'client', 42);
  END IF;
END; $$;

CREATE OR REPLACE FUNCTION public.submit_brief(_project_id UUID, _answers JSONB)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT public.is_project_member(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  UPDATE public.briefs SET answers = _answers, submitted_at = now() WHERE project_id = _project_id;
  UPDATE public.documents SET status = 'completed' WHERE project_id = _project_id AND type = 'brief';
  PERFORM public.advance_project(_project_id, 'launch', 'wayne', 58);
END; $$;

GRANT EXECUTE ON FUNCTION public.advance_project(uuid, public.project_phase, public.waiting_on, integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.sign_agreement(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.mark_invoice_paid(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.submit_brief(uuid, jsonb) TO authenticated;
REVOKE ALL ON FUNCTION public.advance_project(uuid, public.project_phase, public.waiting_on, integer) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.sign_agreement(uuid, text) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.mark_invoice_paid(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.submit_brief(uuid, jsonb) FROM PUBLIC, anon;
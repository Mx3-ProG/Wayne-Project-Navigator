-- 1. Translatable labels + optional custom names
ALTER TABLE public.documents ADD COLUMN IF NOT EXISTS i18n_key TEXT, ADD COLUMN IF NOT EXISTS name_override TEXT;
ALTER TABLE public.invoices ADD COLUMN IF NOT EXISTS i18n_key TEXT, ADD COLUMN IF NOT EXISTS label_override TEXT;
ALTER TABLE public.milestones ADD COLUMN IF NOT EXISTS title_override TEXT;
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS welcome_checklist JSONB NOT NULL DEFAULT '{}'::jsonb;

UPDATE public.documents SET i18n_key = COALESCE(i18n_key, CASE
  WHEN type = 'agreement' THEN 'agreement'
  WHEN type = 'welcome' THEN 'welcome'
  WHEN type = 'invoice' THEN 'invoice_deposit'
  WHEN type = 'brief' THEN 'brief'
  ELSE 'deliverable' END);

UPDATE public.invoices SET i18n_key = COALESCE(i18n_key, CASE
  WHEN reference = 'WW-001' OR label ILIKE 'deposit%' THEN 'deposit'
  ELSE 'balance' END);

-- 2. New phase order everywhere
CREATE OR REPLACE FUNCTION public.sync_milestones(_project_id UUID, _phase public.project_phase)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_seq TEXT[] := ARRAY['agreement','welcome','brief','deposit','launch','production','review','delivery','live'];
  v_order INTEGER;
BEGIN
  v_order := array_position(v_seq, _phase::text);
  UPDATE public.milestones m
  SET status = CASE
        WHEN array_position(v_seq, m.key) < v_order THEN 'done'::public.step_status
        WHEN array_position(v_seq, m.key) = v_order THEN 'active'::public.step_status
        ELSE 'upcoming'::public.step_status
      END,
      position = COALESCE(array_position(v_seq, m.key), m.position),
      completed_at = CASE
        WHEN array_position(v_seq, m.key) < v_order THEN COALESCE(m.completed_at, now())
        ELSE NULL
      END
  WHERE m.project_id = _project_id;
END; $$;
REVOKE ALL ON FUNCTION public.sync_milestones(uuid, public.project_phase) FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.submit_brief(_project_id UUID, _answers JSONB)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_deposit_paid BOOLEAN;
BEGIN
  IF NOT public.is_project_member(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  UPDATE public.briefs SET answers = _answers, submitted_at = now() WHERE project_id = _project_id;
  UPDATE public.documents SET status = 'completed' WHERE project_id = _project_id AND type = 'brief';

  SELECT EXISTS (
    SELECT 1 FROM public.invoices
    WHERE project_id = _project_id AND i18n_key = 'deposit' AND status = 'paid'
  ) INTO v_deposit_paid;

  IF v_deposit_paid THEN
    PERFORM public.advance_project(_project_id, 'launch', 'wayne', 58);
  ELSE
    PERFORM public.advance_project(_project_id, 'deposit', 'client', 45);
  END IF;
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
    PERFORM public.advance_project(v_project_id, 'launch', 'wayne', 58);
  END IF;
END; $$;

-- 3. Welcome document interactions
CREATE OR REPLACE FUNCTION public.save_welcome_checklist(_project_id UUID, _checklist JSONB)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT public.is_project_member(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;
  UPDATE public.projects SET welcome_checklist = COALESCE(_checklist, '{}'::jsonb) WHERE id = _project_id;
END; $$;

CREATE OR REPLACE FUNCTION public.complete_welcome(_project_id UUID)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_phase public.project_phase;
BEGIN
  IF NOT public.is_project_member(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;
  SELECT phase INTO v_phase FROM public.projects WHERE id = _project_id;
  UPDATE public.documents SET status = 'completed'
  WHERE project_id = _project_id AND type = 'welcome' AND status <> 'completed';
  IF v_phase = 'welcome' THEN
    PERFORM public.advance_project(_project_id, 'brief', 'client', 30);
  END IF;
END; $$;

-- 4. Reopen brief while the deposit is unpaid
CREATE OR REPLACE FUNCTION public.reopen_brief(_project_id UUID)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_deposit_paid BOOLEAN;
BEGIN
  IF NOT public.is_project_member(_project_id) THEN
    RAISE EXCEPTION 'not allowed';
  END IF;

  SELECT EXISTS (
    SELECT 1 FROM public.invoices
    WHERE project_id = _project_id AND i18n_key = 'deposit' AND status = 'paid'
  ) INTO v_deposit_paid;

  IF v_deposit_paid THEN
    RAISE EXCEPTION 'brief locked';
  END IF;

  UPDATE public.briefs SET submitted_at = NULL WHERE project_id = _project_id;
  UPDATE public.documents SET status = 'waiting' WHERE project_id = _project_id AND type = 'brief';
  PERFORM public.advance_project(_project_id, 'brief', 'client', 30);
END; $$;

GRANT EXECUTE ON FUNCTION public.save_welcome_checklist(uuid, jsonb) TO authenticated;
GRANT EXECUTE ON FUNCTION public.complete_welcome(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.reopen_brief(uuid) TO authenticated;
REVOKE ALL ON FUNCTION public.save_welcome_checklist(uuid, jsonb) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.complete_welcome(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.reopen_brief(uuid) FROM PUBLIC, anon;

-- 5. Bootstrap new signups with the new order + translation keys
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_client_id UUID;
  v_project_id UUID;
  v_name TEXT;
  v_company TEXT;
BEGIN
  v_name := COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1));
  v_company := COALESCE(NEW.raw_user_meta_data->>'company', v_name);

  INSERT INTO public.profiles (id, full_name, company, email)
  VALUES (NEW.id, v_name, v_company, NEW.email);

  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'client');

  INSERT INTO public.clients (name) VALUES (v_company) RETURNING id INTO v_client_id;

  INSERT INTO public.projects (client_id, name, package_name, phase, progress, waiting_on, project_manager, start_date, deadline, total_amount, paid_amount)
  VALUES (v_client_id, v_company || ' — Digital Platform', 'Signature Build', 'agreement', 5, 'client', 'Alex Wayne', CURRENT_DATE, CURRENT_DATE + 45, 7500, 0)
  RETURNING id INTO v_project_id;

  INSERT INTO public.project_members (project_id, user_id, role) VALUES (v_project_id, NEW.id, 'owner');

  INSERT INTO public.milestones (project_id, key, title, description, status, position, due_date) VALUES
    (v_project_id,'agreement','Agreement','Review and sign your client agreement.','active',1, CURRENT_DATE + 2),
    (v_project_id,'welcome','Welcome','Discover how we will work together.','upcoming',2, CURRENT_DATE + 3),
    (v_project_id,'brief','Project Brief','Tell us everything about your vision.','upcoming',3, CURRENT_DATE + 6),
    (v_project_id,'deposit','Deposit','Secure your production slot.','upcoming',4, CURRENT_DATE + 8),
    (v_project_id,'launch','Project Launch','Kick-off call and roadmap.','upcoming',5, CURRENT_DATE + 10),
    (v_project_id,'production','Production','Our team builds your product.','upcoming',6, CURRENT_DATE + 30),
    (v_project_id,'review','Review','You review the first version.','upcoming',7, CURRENT_DATE + 38),
    (v_project_id,'delivery','Delivery','Your project goes live.','upcoming',8, CURRENT_DATE + 45);

  INSERT INTO public.agreements (project_id, content) VALUES (v_project_id,
    'This agreement confirms the collaboration between Wayne-Web and ' || v_company || ' for the design and development of a custom digital platform. Scope, timeline and investment are detailed in your proposal. You may cancel before the deposit is paid at no cost. Deposit: 2 500 EUR. Remaining balance: 5 000 EUR, due on delivery.');

  INSERT INTO public.briefs (project_id) VALUES (v_project_id);

  INSERT INTO public.invoices (project_id, label, i18n_key, reference, amount, status, due_date) VALUES
    (v_project_id,'Deposit — 1/2','deposit','WW-001', 2500,'waiting', CURRENT_DATE + 8),
    (v_project_id,'Final balance — 2/2','balance','WW-002', 5000,'upcoming', CURRENT_DATE + 45);

  INSERT INTO public.documents (project_id, name, i18n_key, type, status) VALUES
    (v_project_id,'Client Agreement','agreement','agreement','waiting'),
    (v_project_id,'Welcome Document','welcome','welcome','available'),
    (v_project_id,'Project Brief','brief','brief','waiting'),
    (v_project_id,'Deposit Invoice','invoice_deposit','invoice','waiting');

  RETURN NEW;
END; $$;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- 6. Re-sync existing projects to the new milestone order
DO $$
DECLARE r RECORD;
BEGIN
  FOR r IN SELECT id, phase FROM public.projects LOOP
    PERFORM public.sync_milestones(r.id, r.phase);
  END LOOP;
END $$;
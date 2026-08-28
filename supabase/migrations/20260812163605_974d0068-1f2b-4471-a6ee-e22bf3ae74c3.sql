-- ENUMS
CREATE TYPE public.app_role AS ENUM ('admin','client');
CREATE TYPE public.project_phase AS ENUM ('agreement','welcome','deposit','brief','launch','production','review','delivery','live');
CREATE TYPE public.step_status AS ENUM ('done','active','upcoming');
CREATE TYPE public.waiting_on AS ENUM ('client','wayne');
CREATE TYPE public.doc_status AS ENUM ('signed','waiting','completed','available');
CREATE TYPE public.invoice_status AS ENUM ('paid','waiting','upcoming');

CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql SET search_path = public;

-- PROFILES
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  company TEXT,
  email TEXT,
  phone TEXT,
  goal TEXT,
  onboarded BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- ROLES
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

-- CLIENTS
CREATE TABLE public.clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  industry TEXT,
  website TEXT,
  logo_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.clients TO authenticated;
GRANT ALL ON public.clients TO service_role;
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- PROJECTS
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  package_name TEXT,
  phase public.project_phase NOT NULL DEFAULT 'agreement',
  progress INTEGER NOT NULL DEFAULT 0,
  waiting_on public.waiting_on NOT NULL DEFAULT 'client',
  project_manager TEXT,
  start_date DATE,
  deadline DATE,
  total_amount NUMERIC(12,2) NOT NULL DEFAULT 0,
  paid_amount NUMERIC(12,2) NOT NULL DEFAULT 0,
  project_url TEXT,
  delivered_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.projects TO authenticated;
GRANT ALL ON public.projects TO service_role;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- MEMBERS
CREATE TABLE public.project_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'owner',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (project_id, user_id)
);
GRANT SELECT, INSERT ON public.project_members TO authenticated;
GRANT ALL ON public.project_members TO service_role;
ALTER TABLE public.project_members ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.is_project_member(_project_id UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.project_members
    WHERE project_id = _project_id AND user_id = auth.uid()
  ) OR public.has_role(auth.uid(), 'admin');
$$;

CREATE OR REPLACE FUNCTION public.is_client_member(_client_id UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.project_members m
    JOIN public.projects p ON p.id = m.project_id
    WHERE p.client_id = _client_id AND m.user_id = auth.uid()
  ) OR public.has_role(auth.uid(), 'admin');
$$;

-- MILESTONES
CREATE TABLE public.milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  key TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status public.step_status NOT NULL DEFAULT 'upcoming',
  position INTEGER NOT NULL DEFAULT 0,
  due_date DATE,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.milestones TO authenticated;
GRANT ALL ON public.milestones TO service_role;
ALTER TABLE public.milestones ENABLE ROW LEVEL SECURITY;

-- DOCUMENTS
CREATE TABLE public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  status public.doc_status NOT NULL DEFAULT 'available',
  url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.documents TO authenticated;
GRANT ALL ON public.documents TO service_role;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- INVOICES
CREATE TABLE public.invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  reference TEXT,
  amount NUMERIC(12,2) NOT NULL DEFAULT 0,
  status public.invoice_status NOT NULL DEFAULT 'upcoming',
  due_date DATE,
  paid_at TIMESTAMPTZ,
  payment_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.invoices TO authenticated;
GRANT ALL ON public.invoices TO service_role;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;

-- BRIEFS
CREATE TABLE public.briefs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL UNIQUE REFERENCES public.projects(id) ON DELETE CASCADE,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  current_step INTEGER NOT NULL DEFAULT 0,
  submitted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.briefs TO authenticated;
GRANT ALL ON public.briefs TO service_role;
ALTER TABLE public.briefs ENABLE ROW LEVEL SECURITY;

-- AGREEMENTS
CREATE TABLE public.agreements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL UNIQUE REFERENCES public.projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT 'Client Agreement',
  content TEXT,
  signed_name TEXT,
  signed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.agreements TO authenticated;
GRANT ALL ON public.agreements TO service_role;
ALTER TABLE public.agreements ENABLE ROW LEVEL SECURITY;

-- PROJECT LINKS
CREATE TABLE public.project_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'website',
  url TEXT NOT NULL,
  icon TEXT,
  status TEXT NOT NULL DEFAULT 'available',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.project_links TO authenticated;
GRANT ALL ON public.project_links TO service_role;
ALTER TABLE public.project_links ENABLE ROW LEVEL SECURITY;

-- FEEDBACK
CREATE TABLE public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL,
  comment TEXT,
  allow_testimonial BOOLEAN NOT NULL DEFAULT false,
  allow_case_study BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.feedback TO authenticated;
GRANT ALL ON public.feedback TO service_role;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- PACKAGES
CREATE TABLE public.packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  price_from NUMERIC(12,2),
  position INTEGER NOT NULL DEFAULT 0,
  active BOOLEAN NOT NULL DEFAULT true
);
GRANT SELECT ON public.packages TO authenticated;
GRANT ALL ON public.packages TO service_role;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;

-- POLICIES
CREATE POLICY "own profile read" ON public.profiles FOR SELECT TO authenticated USING (id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "own profile insert" ON public.profiles FOR INSERT TO authenticated WITH CHECK (id = auth.uid());
CREATE POLICY "own profile update" ON public.profiles FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());

CREATE POLICY "own roles read" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));

CREATE POLICY "client read" ON public.clients FOR SELECT TO authenticated USING (public.is_client_member(id));
CREATE POLICY "client update" ON public.clients FOR UPDATE TO authenticated USING (public.is_client_member(id)) WITH CHECK (public.is_client_member(id));

CREATE POLICY "project read" ON public.projects FOR SELECT TO authenticated USING (public.is_project_member(id));
CREATE POLICY "project update admin" ON public.projects FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE POLICY "members read" ON public.project_members FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));

CREATE POLICY "milestones read" ON public.milestones FOR SELECT TO authenticated USING (public.is_project_member(project_id));
CREATE POLICY "milestones write admin" ON public.milestones FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE POLICY "documents read" ON public.documents FOR SELECT TO authenticated USING (public.is_project_member(project_id));
CREATE POLICY "documents insert" ON public.documents FOR INSERT TO authenticated WITH CHECK (public.is_project_member(project_id));
CREATE POLICY "documents update" ON public.documents FOR UPDATE TO authenticated USING (public.is_project_member(project_id)) WITH CHECK (public.is_project_member(project_id));

CREATE POLICY "invoices read" ON public.invoices FOR SELECT TO authenticated USING (public.is_project_member(project_id));
CREATE POLICY "invoices update admin" ON public.invoices FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE POLICY "briefs read" ON public.briefs FOR SELECT TO authenticated USING (public.is_project_member(project_id));
CREATE POLICY "briefs insert" ON public.briefs FOR INSERT TO authenticated WITH CHECK (public.is_project_member(project_id));
CREATE POLICY "briefs update" ON public.briefs FOR UPDATE TO authenticated USING (public.is_project_member(project_id)) WITH CHECK (public.is_project_member(project_id));

CREATE POLICY "agreements read" ON public.agreements FOR SELECT TO authenticated USING (public.is_project_member(project_id));
CREATE POLICY "agreements update" ON public.agreements FOR UPDATE TO authenticated USING (public.is_project_member(project_id)) WITH CHECK (public.is_project_member(project_id));

CREATE POLICY "links read" ON public.project_links FOR SELECT TO authenticated USING (public.is_project_member(project_id));

CREATE POLICY "feedback read" ON public.feedback FOR SELECT TO authenticated USING (public.is_project_member(project_id));
CREATE POLICY "feedback insert" ON public.feedback FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid() AND public.is_project_member(project_id));

CREATE POLICY "packages read" ON public.packages FOR SELECT TO authenticated USING (active);

CREATE TRIGGER profiles_updated BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER projects_updated BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER briefs_updated BEFORE UPDATE ON public.briefs FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER clients_updated BEFORE UPDATE ON public.clients FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- WORKSPACE BOOTSTRAP ON SIGNUP
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
    (v_project_id,'deposit','Deposit','Secure your production slot.','upcoming',3, CURRENT_DATE + 5),
    (v_project_id,'brief','Project Brief','Tell us everything about your vision.','upcoming',4, CURRENT_DATE + 8),
    (v_project_id,'launch','Project Launch','Kick-off call and roadmap.','upcoming',5, CURRENT_DATE + 10),
    (v_project_id,'production','Production','Our team builds your product.','upcoming',6, CURRENT_DATE + 30),
    (v_project_id,'review','Review','You review the first version.','upcoming',7, CURRENT_DATE + 38),
    (v_project_id,'delivery','Delivery','Your project goes live.','upcoming',8, CURRENT_DATE + 45);

  INSERT INTO public.agreements (project_id, content) VALUES (v_project_id,
    'This agreement confirms the collaboration between Wayne-Web and ' || v_company || ' for the design and development of a custom digital platform. Scope, timeline and investment are detailed in your proposal. You may cancel before the deposit is paid at no cost. Deposit: 2 500 EUR. Remaining balance: 5 000 EUR, due on delivery.');

  INSERT INTO public.briefs (project_id) VALUES (v_project_id);

  INSERT INTO public.invoices (project_id, label, reference, amount, status, due_date) VALUES
    (v_project_id,'Deposit — 1/2','WW-001', 2500,'waiting', CURRENT_DATE + 5),
    (v_project_id,'Final balance — 2/2','WW-002', 5000,'upcoming', CURRENT_DATE + 45);

  INSERT INTO public.documents (project_id, name, type, status) VALUES
    (v_project_id,'Client Agreement','agreement','waiting'),
    (v_project_id,'Welcome Document','welcome','available'),
    (v_project_id,'Deposit Invoice','invoice','waiting'),
    (v_project_id,'Project Brief','brief','waiting');

  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

INSERT INTO public.packages (name, description, category, price_from, position) VALUES
  ('Maintenance','Continuous updates, monitoring and priority support.','care',290,1),
  ('SEO','Technical SEO, content strategy and measurable growth.','growth',890,2),
  ('Automation','Remove manual work with tailored automations.','ops',1500,3),
  ('AI Integration','Custom AI assistants and intelligent workflows.','ai',2500,4),
  ('Mobile Application','Native-grade mobile experience for your product.','build',9000,5),
  ('Custom Development','New modules and features for your platform.','build',3500,6);
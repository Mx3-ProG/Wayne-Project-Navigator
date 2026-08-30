-- AUTH_CODES
-- Passwordless email login: single-use, hashed, short-lived codes.
-- Only ever touched by service-role server functions (never RLS-exposed to
-- authenticated/anon), so no policies are needed beyond enabling RLS itself.
CREATE TABLE public.auth_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL,
  used_at TIMESTAMPTZ,
  attempt_count INTEGER NOT NULL DEFAULT 0,
  request_ip TEXT
);
GRANT ALL ON public.auth_codes TO service_role;
ALTER TABLE public.auth_codes ENABLE ROW LEVEL SECURITY;

CREATE INDEX auth_codes_email_idx ON public.auth_codes (email);
CREATE INDEX auth_codes_created_at_idx ON public.auth_codes (created_at);

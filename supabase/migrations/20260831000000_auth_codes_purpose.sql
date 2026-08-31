-- AUTH_CODES: split codes by purpose so a login code and a password-reset
-- code are never interchangeable, even though they share the same
-- hashed/rate-limited/single-use infrastructure.
ALTER TABLE public.auth_codes
  ADD COLUMN purpose TEXT NOT NULL DEFAULT 'login';

ALTER TABLE public.auth_codes
  ADD CONSTRAINT auth_codes_purpose_check CHECK (purpose IN ('login', 'password_reset'));

CREATE INDEX auth_codes_email_purpose_idx ON public.auth_codes (email, purpose);

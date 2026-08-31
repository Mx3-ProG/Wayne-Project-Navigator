-- AUTH_CODES: allow a third purpose for the hardened, single-address admin
-- login (contact@flux-wayne.com only, enforced in application code).
ALTER TABLE public.auth_codes
  DROP CONSTRAINT auth_codes_purpose_check;

ALTER TABLE public.auth_codes
  ADD CONSTRAINT auth_codes_purpose_check
  CHECK (purpose IN ('login', 'password_reset', 'admin_login'));

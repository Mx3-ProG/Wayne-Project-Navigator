// Single source of truth for the hardened admin login. Not a secret — the
// security boundary is possession of this mailbox, not knowledge of the
// address — so this constant is safe to import from client route files.
export const ADMIN_LOGIN_EMAIL = "contact@flux-wayne.com";

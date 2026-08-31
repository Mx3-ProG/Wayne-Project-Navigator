// Server-only: passwordless login code generation/hashing.
// Load inside server handlers: const { generateLoginCode } = await import("@/lib/auth-code.server");
// Top-level import is safe only in other .server.ts modules — route files and *.functions.ts ship to the client bundle.
import { createHash, randomInt, timingSafeEqual } from "node:crypto";

export const LOGIN_CODE_LENGTH = 20;
export const LOGIN_CODE_TTL_MS = 10 * 60 * 1000;
export const ADMIN_CODE_TTL_MS = 5 * 60 * 1000;
export const LOGIN_CODE_MAX_ATTEMPTS = 5;

// Alphanumeric + a curated set of symbols — no ambiguous/lookalike characters
// (no backtick, quote, backslash) so the code stays easy to read and paste.
const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-_";

/** Cryptographically secure random code. Never uses Math.random(). */
export function generateLoginCode(): string {
  let code = "";
  for (let i = 0; i < LOGIN_CODE_LENGTH; i++) {
    code += CHARSET[randomInt(CHARSET.length)];
  }
  return code;
}

export function hashLoginCode(code: string): string {
  return createHash("sha256").update(code, "utf8").digest("hex");
}

/** Constant-time comparison against a stored hash — never leaks timing info. */
export function verifyLoginCode(code: string, storedHash: string): boolean {
  const candidateHash = hashLoginCode(code);
  const a = Buffer.from(candidateHash, "hex");
  const b = Buffer.from(storedHash, "hex");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

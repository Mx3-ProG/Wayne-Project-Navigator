import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";

const REQUEST_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_EMAIL = 5;
const MAX_REQUESTS_PER_IP = 10;

const GENERIC_SENT_MESSAGE =
  "Si cette adresse est autorisée, un code de connexion vient d'être envoyé.";
const GENERIC_INVALID_MESSAGE = "Code invalide ou expiré.";
const GENERIC_THROTTLE_MESSAGE = "Trop de tentatives. Réessayez dans quelques minutes.";

function requestIp(): string | null {
  const request = getRequest();
  const forwarded = request?.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? null;
  return request?.headers.get("x-real-ip") ?? null;
}

const requestCodeSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
});

export const requestLoginCode = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => requestCodeSchema.parse(data))
  .handler(async ({ data }) => {
    const { email } = data;
    const ip = requestIp();
    const now = new Date();

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { generateLoginCode, hashLoginCode, LOGIN_CODE_TTL_MS } =
      await import("@/lib/auth-code.server");

    const windowStart = new Date(now.getTime() - REQUEST_WINDOW_MS).toISOString();

    const { count: emailCount } = await supabaseAdmin
      .from("auth_codes")
      .select("id", { count: "exact", head: true })
      .eq("email", email)
      .gte("created_at", windowStart);

    if ((emailCount ?? 0) >= MAX_REQUESTS_PER_EMAIL) {
      throw new Error(GENERIC_THROTTLE_MESSAGE);
    }

    if (ip) {
      const { count: ipCount } = await supabaseAdmin
        .from("auth_codes")
        .select("id", { count: "exact", head: true })
        .eq("request_ip", ip)
        .gte("created_at", windowStart);

      if ((ipCount ?? 0) >= MAX_REQUESTS_PER_IP) {
        throw new Error(GENERIC_THROTTLE_MESSAGE);
      }
    }

    // A fresh code invalidates any still-pending code for this email.
    await supabaseAdmin
      .from("auth_codes")
      .update({ used_at: now.toISOString() })
      .eq("email", email)
      .is("used_at", null);

    const code = generateLoginCode();
    const codeHash = hashLoginCode(code);
    const expiresAt = new Date(now.getTime() + LOGIN_CODE_TTL_MS).toISOString();

    const { error: insertError } = await supabaseAdmin.from("auth_codes").insert({
      email,
      code_hash: codeHash,
      expires_at: expiresAt,
      request_ip: ip,
    });
    if (insertError) throw new Error("Unable to create login code");

    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
    await sendTemplateEmail("login-code", email, {
      templateData: { code },
      idempotencyKey: `login-code-${email}-${now.getTime()}`,
    });

    return { ok: true, message: GENERIC_SENT_MESSAGE };
  });

const verifyCodeSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  code: z.string().length(20),
});

export const verifyLoginCode = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => verifyCodeSchema.parse(data))
  .handler(async ({ data }) => {
    const { email, code } = data;
    const now = new Date();

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { verifyLoginCode: checkCode, LOGIN_CODE_MAX_ATTEMPTS } =
      await import("@/lib/auth-code.server");

    const { data: rows, error: fetchError } = await supabaseAdmin
      .from("auth_codes")
      .select("id, code_hash, expires_at, used_at, attempt_count")
      .eq("email", email)
      .is("used_at", null)
      .order("created_at", { ascending: false })
      .limit(1);
    if (fetchError) throw new Error(GENERIC_INVALID_MESSAGE);

    const record = rows?.[0];
    if (!record) throw new Error(GENERIC_INVALID_MESSAGE);

    if (record.attempt_count >= LOGIN_CODE_MAX_ATTEMPTS) {
      await supabaseAdmin
        .from("auth_codes")
        .update({ used_at: now.toISOString() })
        .eq("id", record.id);
      throw new Error("Trop de tentatives pour ce code. Demandez-en un nouveau.");
    }

    if (new Date(record.expires_at).getTime() < now.getTime()) {
      await supabaseAdmin
        .from("auth_codes")
        .update({ used_at: now.toISOString() })
        .eq("id", record.id);
      throw new Error(GENERIC_INVALID_MESSAGE);
    }

    if (!checkCode(code, record.code_hash)) {
      await supabaseAdmin
        .from("auth_codes")
        .update({ attempt_count: record.attempt_count + 1 })
        .eq("id", record.id);
      throw new Error(GENERIC_INVALID_MESSAGE);
    }

    // Single-use: consume immediately, before doing anything else.
    await supabaseAdmin
      .from("auth_codes")
      .update({ used_at: now.toISOString() })
      .eq("id", record.id);

    let link = await supabaseAdmin.auth.admin.generateLink({ type: "magiclink", email });
    if (link.error) {
      const created = await supabaseAdmin.auth.admin.createUser({
        email,
        email_confirm: true,
      });
      if (created.error) throw new Error("Unable to create account");
      link = await supabaseAdmin.auth.admin.generateLink({ type: "magiclink", email });
      if (link.error) throw new Error("Unable to create session");
    }

    const tokenHash = link.data.properties?.hashed_token;
    if (!tokenHash) throw new Error("Unable to create session");

    return { email, tokenHash };
  });

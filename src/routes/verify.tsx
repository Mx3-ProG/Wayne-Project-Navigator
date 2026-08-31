import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { z } from "zod";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { requestLoginCode, verifyLoginCode } from "@/lib/auth-code.functions";
import { useT } from "@/lib/i18n";

const searchSchema = z.object({
  email: z.string().email().optional().catch(undefined),
  purpose: z.enum(["login", "password_reset", "admin_login"]).optional().catch("login"),
  // Whitelisted, not a free-form string — an open `redirectTo` on an auth
  // verification page is an open-redirect vector.
  redirectTo: z.enum(["/dashboard", "/reset-password", "/admin"]).optional().catch(undefined),
});

export const Route = createFileRoute("/verify")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [{ title: "Enter your code — Wayne Client Portal" }],
  }),
  component: VerifyPage,
});

const RESEND_COOLDOWN_S = 30;

function VerifyPage() {
  const navigate = useNavigate();
  const t = useT();
  const { email: initialEmail, purpose = "login", redirectTo } = Route.useSearch();

  const [email, setEmail] = useState(initialEmail ?? "");
  const [editingEmail, setEditingEmail] = useState(!initialEmail);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Only the login flow auto-skips on an existing session — a
    // password-reset code must always run through verification, even if
    // the browser already holds a session (possibly for another account).
    if (purpose !== "login") return;
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/dashboard", replace: true });
    });
  }, [navigate, purpose]);

  useEffect(() => {
    if (!initialEmail) return;
    setCooldown(RESEND_COOLDOWN_S);
  }, [initialEmail]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = window.setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => window.clearInterval(id);
  }, [cooldown]);

  async function handleVerify(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { tokenHash } = await verifyLoginCode({
        data: { email: email.trim().toLowerCase(), code: code.trim(), purpose },
      });
      const { error: verifyError } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: "magiclink",
      });
      if (verifyError) throw verifyError;
      setSuccess(true);
      navigate({ to: redirectTo ?? "/dashboard", replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : t("auth.toast.error"));
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    if (cooldown > 0 || !email) return;
    setError(null);
    setResending(true);
    try {
      await requestLoginCode({ data: { email: email.trim().toLowerCase(), purpose } });
      setCooldown(RESEND_COOLDOWN_S);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("auth.toast.error"));
    } finally {
      setResending(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-5 py-14">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <span className="mx-auto flex size-11 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 font-display text-lg font-bold text-primary">
            W
          </span>
          <h1 className="mt-5 font-display text-3xl font-semibold">{t("auth.verify.title")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {email ? t("auth.verify.subtitle", { email }) : t("auth.verify.subtitleNoEmail")}
          </p>
        </div>

        <GlassCard variant="strong" interactive={false} className="p-6 sm:p-8">
          <form onSubmit={handleVerify} className="space-y-4">
            {purpose === "admin_login" ? (
              <p className="text-sm text-muted-foreground">{email}</p>
            ) : editingEmail ? (
              <div className="space-y-2">
                <Label htmlFor="email">{t("auth.field.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  placeholder={t("auth.field.email.placeholder")}
                />
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                {email}{" "}
                <button
                  type="button"
                  onClick={() => setEditingEmail(true)}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  {t("auth.verify.changeEmail")}
                </button>
              </p>
            )}

            <div className="space-y-2">
              <Label htmlFor="code">{t("auth.verify.codeLabel")}</Label>
              <Input
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                maxLength={20}
                autoComplete="one-time-code"
                autoFocus={!editingEmail}
                spellCheck={false}
                placeholder="A7@kP2!x9Q#m4Z8$Rt5N"
                className="font-mono tracking-wide"
              />
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            {success ? <p className="text-sm text-success">{t("auth.verify.success")}</p> : null}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={loading || code.trim().length !== 20 || !email}
            >
              {loading ? t("auth.submit.loading") : t("auth.verify.submit")}
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
            <button
              type="button"
              onClick={handleResend}
              disabled={resending || cooldown > 0 || !email}
              className="font-medium text-primary underline-offset-4 hover:underline disabled:cursor-not-allowed disabled:text-muted-foreground disabled:no-underline"
            >
              {cooldown > 0
                ? t("auth.verify.resendCooldown", { seconds: cooldown })
                : t("auth.verify.resend")}
            </button>
            <Link
              to={
                purpose === "password_reset"
                  ? "/forgot-password"
                  : purpose === "admin_login"
                    ? "/admin-login"
                    : "/login"
              }
              className="hover:underline"
            >
              {t("auth.verify.backToLogin")}
            </Link>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

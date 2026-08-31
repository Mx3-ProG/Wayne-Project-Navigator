import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { supabase } from "@/integrations/supabase/client";
import { useT } from "@/lib/i18n";
import { revokeOtherSessions } from "@/lib/session-security.functions";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [{ title: "Choose a new password — Wayne Client Portal" }],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const t = useT();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // This page only ever does anything useful once an authenticated session
  // exists — and the only way to get one here is by verifying the emailed,
  // single-use, 10-minute reset code on /verify. No session, no page.
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate({ to: "/forgot-password", replace: true });
        return;
      }
      setReady(true);
    });
  }, [navigate]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (password !== confirm) {
      setError(t("auth.resetPassword.mismatch"));
      return;
    }

    setLoading(true);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) throw updateError;

      const { data: sessionData } = await supabase.auth.getSession();
      const accessToken = sessionData.session?.access_token;
      if (accessToken) {
        // Best-effort: a session an attacker may hold is killed the moment
        // the real owner regains control. Failure here shouldn't block the
        // password change itself, which already succeeded.
        await revokeOtherSessions({ data: { accessToken } }).catch(() => {});
      }

      toast.success(t("auth.resetPassword.success"));
      navigate({ to: "/dashboard", replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : t("auth.toast.error"));
    } finally {
      setLoading(false);
    }
  }

  if (!ready) return null;

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
          <h1 className="mt-5 font-display text-3xl font-semibold">
            {t("auth.resetPassword.title")}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("auth.resetPassword.subtitle")}</p>
        </div>

        <GlassCard variant="strong" interactive={false} className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">{t("auth.resetPassword.newPassword")}</Label>
              <PasswordInput
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoFocus
                toggleAriaLabelShow={t("auth.password.show")}
                toggleAriaLabelHide={t("auth.password.hide")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">{t("auth.resetPassword.confirmPassword")}</Label>
              <PasswordInput
                id="confirmPassword"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                minLength={6}
                toggleAriaLabelShow={t("auth.password.show")}
                toggleAriaLabelHide={t("auth.password.hide")}
              />
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? t("auth.submit.loading") : t("auth.resetPassword.submit")}
            </Button>
          </form>
        </GlassCard>
      </motion.div>
    </div>
  );
}

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { requestLoginCode } from "@/lib/auth-code.functions";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset your password — Wayne Client Portal" },
      {
        name: "description",
        content: "Request a password reset code for your Wayne Client Portal account.",
      },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const t = useT();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/dashboard", replace: true });
    });
  }, [navigate]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    try {
      const normalized = email.trim().toLowerCase();
      await requestLoginCode({ data: { email: normalized, purpose: "password_reset" } });
      navigate({
        to: "/verify",
        search: { email: normalized, purpose: "password_reset", redirectTo: "/reset-password" },
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("auth.toast.error"));
    } finally {
      setLoading(false);
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
          <h1 className="mt-5 font-display text-3xl font-semibold">
            {t("auth.forgotPassword.title")}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("auth.forgotPassword.subtitle")}</p>
        </div>

        <GlassCard variant="strong" interactive={false} className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
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

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? t("auth.submit.loading") : t("auth.forgotPassword.submit")}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            <Link
              to="/auth"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t("auth.forgotPassword.backToSignin")}
            </Link>
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}

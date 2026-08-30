import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Wayne Client Portal" },
      {
        name: "description",
        content: "Access your Wayne Client Portal to follow your project, documents and payments.",
      },
      { property: "og:title", content: "Sign in — Wayne Client Portal" },
      {
        property: "og:description",
        content: "Access your Wayne Client Portal to follow your project, documents and payments.",
      },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const t = useT();
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: { full_name: fullName, company },
          },
        });
        if (error) throw error;
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) {
          toast.success(t("auth.toast.accountCreated"));
          setMode("signin");
          return;
        }
        navigate({ to: "/onboarding", replace: true });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/dashboard", replace: true });
      }
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
            {mode === "signup" ? t("auth.title.signup") : t("auth.title.signin")}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "signup" ? t("auth.subtitle.signup") : t("auth.subtitle.signin")}
          </p>
        </div>

        <GlassCard variant="strong" interactive={false} className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">{t("auth.field.fullName")}</Label>
                  <Input
                    id="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder={t("auth.field.fullName.placeholder")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{t("auth.field.company")}</Label>
                  <Input
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    placeholder={t("auth.field.company.placeholder")}
                  />
                </div>
              </>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">{t("auth.field.email")}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={t("auth.field.email.placeholder")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t("auth.field.password")}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading
                ? t("auth.submit.loading")
                : mode === "signup"
                  ? t("auth.submit.signup")
                  : t("auth.submit.signin")}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "signup" ? t("auth.switch.toSignin") : t("auth.switch.toSignup")}{" "}
            <button
              type="button"
              onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {mode === "signup" ? t("auth.switch.signinAction") : t("auth.switch.signupAction")}
            </button>
          </p>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            <Link
              to="/login"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t("auth.switch.usePasswordless")}
            </Link>
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}

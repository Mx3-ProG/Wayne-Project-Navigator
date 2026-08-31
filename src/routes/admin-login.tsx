import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { ADMIN_LOGIN_EMAIL } from "@/lib/admin-auth.config";
import { supabase } from "@/integrations/supabase/client";
import { requestLoginCode } from "@/lib/auth-code.functions";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/admin-login")({
  head: () => ({
    meta: [{ title: "Admin access — Wayne Client Portal" }],
  }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const navigate = useNavigate();
  const t = useT();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/dashboard", replace: true });
    });
  }, [navigate]);

  async function handleRequestCode() {
    setLoading(true);
    try {
      await requestLoginCode({ data: { email: ADMIN_LOGIN_EMAIL, purpose: "admin_login" } });
      navigate({
        to: "/verify",
        search: { email: ADMIN_LOGIN_EMAIL, purpose: "admin_login", redirectTo: "/admin" },
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
          <h1 className="mt-5 font-display text-3xl font-semibold">{t("auth.adminLogin.title")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("auth.adminLogin.subtitle")}</p>
        </div>

        <GlassCard variant="strong" interactive={false} className="p-6 sm:p-8">
          <Button
            type="button"
            size="lg"
            className="w-full"
            disabled={loading}
            onClick={handleRequestCode}
          >
            {loading ? t("auth.submit.loading") : t("auth.adminLogin.submit")}
          </Button>
        </GlassCard>
      </motion.div>
    </div>
  );
}

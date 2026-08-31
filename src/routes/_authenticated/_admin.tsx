import { createFileRoute, Link, Outlet, redirect, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, Landmark, LogOut, ShieldCheck } from "lucide-react";

import { PreferenceControls } from "@/components/layout/PreferenceControls";
import { Button } from "@/components/ui/button";
import { useIsSuperadmin } from "@/hooks/useAdmin";
import { supabase } from "@/integrations/supabase/client";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/_admin")({
  ssr: false,
  beforeLoad: async () => {
    const { data: auth } = await supabase.auth.getUser();
    const user = auth.user;
    if (!user) throw redirect({ to: "/auth" });
    const { data: isAdminOrAbove } = await supabase.rpc("is_admin_or_above", {
      _user_id: user.id,
    });
    if (!isAdminOrAbove) throw redirect({ to: "/dashboard" });
    return { isAdmin: true };
  },
  component: AdminLayout,
});

function AdminLayout() {
  const t = useT();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: isSuperadmin } = useIsSuperadmin();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
          <Link to="/admin" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg border border-primary/40 bg-primary/15 text-primary">
              <ShieldCheck className="size-4" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              {t("admin.title")}
              <span className="block text-[10px] font-normal uppercase tracking-[0.2em] text-muted-foreground">
                {t("admin.subtitle")}
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <PreferenceControls />
            {isSuperadmin && (
              <Button asChild variant="ghost" size="sm">
                <Link to="/admin/ribs">
                  <Landmark className="mr-1.5 size-4" />
                  {t("payments.ribs.navLabel")}
                </Link>
              </Button>
            )}
            <Button asChild variant="ghost" size="sm">
              <Link to="/dashboard">
                <ArrowLeft className="mr-1.5 size-4" />
                {t("admin.backToPortal")}
              </Link>
            </Button>
            <Button variant="secondary" size="sm" onClick={signOut}>
              <LogOut className="mr-1.5 size-4" />
              {t("common.nav.logout")}
            </Button>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <Outlet />
      </main>
    </div>
  );
}

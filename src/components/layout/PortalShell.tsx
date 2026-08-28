import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import {
  CreditCard,
  FileText,
  Handshake,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  ShieldCheck,
  Rocket,
  Sparkles,
  User,
} from "lucide-react";
import type { ReactNode } from "react";
import { useIsAdmin } from "@/hooks/useAdmin";
import { supabase } from "@/integrations/supabase/client";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { PreferenceControls } from "@/components/layout/PreferenceControls";

const NAV = [
  { to: "/dashboard", labelKey: "common.nav.dashboard", icon: LayoutDashboard },
  { to: "/welcome", labelKey: "common.nav.welcome", icon: Handshake },
  { to: "/project", labelKey: "common.nav.project", icon: Rocket },
  { to: "/documents", labelKey: "common.nav.documents", icon: FileText },
  { to: "/billing", labelKey: "common.nav.billing", icon: CreditCard },
  { to: "/support", labelKey: "common.nav.support", icon: LifeBuoy },
  { to: "/services", labelKey: "common.nav.services", icon: Sparkles },
] as const;


export function PortalShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const t = useT();
  const { data: isAdmin } = useIsAdmin();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <div className="min-h-screen lg:flex">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border/60 px-5 py-7 lg:flex">
        <Link to="/dashboard" className="flex items-center gap-2 px-2">
          <span className="flex size-8 items-center justify-center rounded-lg border border-primary/40 bg-primary/15 font-display text-sm font-bold text-primary">
            W
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            {t("common.brand")}
            <span className="block text-[10px] font-normal uppercase tracking-[0.2em] text-muted-foreground">
              {t("common.brandSub")}
            </span>
          </span>
        </Link>

        <nav className="mt-9 flex-1 space-y-1">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                  active
                    ? "bg-primary/12 text-foreground ring-1 ring-primary/25"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                )}
              >
                <item.icon className="size-4" />
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        <PreferenceControls className="mb-4 justify-center" />

        <div className="space-y-1 border-t border-border/60 pt-4">
          {isAdmin && (
            <Link
              to="/admin"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-primary transition-colors hover:bg-primary/10"
            >
              <ShieldCheck className="size-4" />
              {t("admin.nav.link")}
            </Link>
          )}
          <Link
            to="/profile"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
          >
            <User className="size-4" />
            {t("common.nav.profile")}
          </Link>
          {isAdmin && (
          <button
            onClick={signOut}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
          >
            <LogOut className="size-4" />
            {t("common.nav.logout")}
          </button>
          )}
        </div>
      </aside>

      <main className="flex-1 pb-28 lg:pb-10">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-end px-5 pt-5 sm:px-8 lg:hidden">
          <PreferenceControls />
        </div>
        <div className="mx-auto w-full max-w-4xl px-5 pt-4 sm:px-8 lg:pt-8">{children}</div>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/80 px-2 py-2 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between">
          {NAV.slice(0, 5).map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-[10px] font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                <item.icon className="size-5" />
                {t(item.labelKey)}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, CreditCard } from "lucide-react";
import { useEffect } from "react";
import { GlassCard } from "@/components/glass/GlassCard";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { NextActionCard } from "@/components/journey/NextActionCard";
import { ProgressCard } from "@/components/journey/ProgressCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useWorkspace } from "@/hooks/usePortal";
import { useI18n, useT } from "@/lib/i18n";
import { computeNextAction, formatMoney } from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_portal/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Wayne Client Portal" },
      {
        name: "description",
        content: "See your project progress, your next action and everything Wayne is working on.",
      },
      { property: "og:title", content: "Dashboard — Wayne Client Portal" },
      {
        property: "og:description",
        content: "See your project progress, your next action and everything Wayne is working on.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { data, isLoading } = useWorkspace();
  const navigate = useNavigate();
  const t = useT();
  const { locale } = useI18n();

  useEffect(() => {
    if (data && !data.profile.onboarded) navigate({ to: "/onboarding", replace: true });
  }, [data, navigate]);

  if (isLoading || !data) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-56" />
        <Skeleton className="h-48 w-full rounded-2xl" />
        <Skeleton className="h-40 w-full rounded-2xl" />
      </div>
    );
  }

  const action = computeNextAction(data.project, t);
  const firstName = (data.profile.full_name ?? t("journey.dashboard.fallbackName")).split(" ")[0] ?? "";
  const remaining = Number(data.project.total_amount) - Number(data.project.paid_amount);

  return (
    <div className="space-y-6 pb-8">
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {t("journey.dashboard.hello", { name: firstName })}
        </h1>
        <p className="mt-2 text-muted-foreground">{action.greeting}</p>
      </motion.header>

      <ProgressCard action={action} projectName={data.project.name} />
      <NextActionCard action={action} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Link to="/documents">
          <GlassCard className="h-full p-5">
            <FileText className="size-5 text-primary" />
            <p className="mt-3 font-medium">{t("journey.dashboard.documents.title")}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("journey.dashboard.documents.count", { count: data.documents.length })}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
              {t("journey.dashboard.open")} <ArrowUpRight className="size-3.5" />
            </span>
          </GlassCard>
        </Link>
        <Link to="/billing">
          <GlassCard className="h-full p-5">
            <CreditCard className="size-5 text-primary" />
            <p className="mt-3 font-medium">{t("journey.dashboard.billing.title")}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("journey.dashboard.billing.remaining", {
                remaining: formatMoney(remaining, locale),
                total: formatMoney(data.project.total_amount, locale),
              })}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
              {t("journey.dashboard.open")} <ArrowUpRight className="size-3.5" />
            </span>
          </GlassCard>
        </Link>
      </div>

      <GlassCard interactive={false} className="p-6 sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {t("journey.timeline.title")}
        </p>
        <div className="mt-5">
          <JourneyTimeline milestones={data.milestones} project={data.project} />
        </div>
      </GlassCard>
    </div>
  );
}

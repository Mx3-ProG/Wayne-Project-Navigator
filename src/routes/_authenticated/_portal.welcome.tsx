import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { GlassCard } from "@/components/glass/GlassCard";
import { Celebration } from "@/components/journey/Celebration";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { WelcomeWizard } from "@/components/journey/WelcomeWizard";
import { BusinessProfileSheet } from "@/components/print/BusinessProfileSheet";
import { Button } from "@/components/ui/button";
import { useCompleteWelcome, useWorkspace } from "@/hooks/usePortal";
import { type BusinessProfileValues, parseBusinessProfile } from "@/lib/business-profile";
import { useT } from "@/lib/i18n";
import { phaseIndex } from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_portal/welcome")({
  head: () => ({
    meta: [
      { title: "Welcome journey — Wayne Client Portal" },
      {
        name: "description",
        content:
          "Read how we work, fill in your business fiche step by step and download your document.",
      },
      { property: "og:title", content: "Welcome journey — Wayne Client Portal" },
      {
        property: "og:description",
        content:
          "Read how we work, fill in your business fiche step by step and download your document.",
      },
    ],
  }),
  component: WelcomePage,
});

const HOW = ["rhythm", "channels", "response", "manager"] as const;

function WelcomePage() {
  const t = useT();
  const { data } = useWorkspace();
  const complete = useCompleteWelcome();
  const navigate = useNavigate();
  const [celebrate, setCelebrate] = useState(false);
  const [business, setBusiness] = useState<BusinessProfileValues>(() =>
    parseBusinessProfile(data?.project.business_profile),
  );
  const handleBusinessChange = useCallback(
    (values: BusinessProfileValues) => setBusiness(values),
    [],
  );

  if (!data) return null;
  const project = data.project;
  const passed = phaseIndex(project.phase) > phaseIndex("welcome");
  const firstName = data.profile.full_name?.split(" ")[0] ?? data.clientName ?? "";

  async function onComplete() {
    try {
      await complete.mutateAsync(project.id);
      setCelebrate(true);
      setTimeout(() => navigate({ to: "/brief" }), 2000);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("welcome.error.default"));
    }
  }

  const guide = (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold">{t("welcome.how.title")}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {HOW.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="h-full p-5">
                <p className="font-medium">{t(`welcome.how.${key}.title`)}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(`welcome.how.${key}.body`, { manager: project.project_manager ?? "Wayne" })}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold">{t("welcome.expect.title")}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {(["you", "us"] as const).map((side) => (
            <GlassCard key={side} interactive={false} className="p-5">
              <p className="font-medium">{t(`welcome.expect.${side}.title`)}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[1, 2, 3].map((n) => (
                  <li key={n} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{t(`welcome.expect.${side}.${n}`)}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <div className="space-y-6 pb-8">
      <Celebration
        show={celebrate}
        title={t("welcome.celebration.title")}
        subtitle={t("welcome.celebration.subtitle")}
      />

      <BusinessProfileSheet
        values={business}
        projectName={project.name}
        clientName={data.clientName ?? data.profile.full_name ?? ""}
        submittedAt={project.business_profile_submitted_at}
      />

      <header className="print:hidden">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {t("welcome.title")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          {t("welcome.greeting", { name: firstName || t("journey.dashboard.fallbackName") })}
        </h1>
        <p className="mt-2 text-muted-foreground">{t("welcome.subtitle")}</p>
      </header>

      <div className="print:hidden">
        <WelcomeWizard
          projectId={project.id}
          raw={project.business_profile}
          submittedAt={project.business_profile_submitted_at}
          storedChecklist={project.welcome_checklist}
          guide={guide}
          onChange={handleBusinessChange}
          onDownload={() => window.print()}
          onComplete={onComplete}
          completing={complete.isPending}
          passed={passed}
        />
      </div>

      {passed && (
        <GlassCard interactive={false} className="p-6 print:hidden">
          <p className="font-medium">{t("welcome.done.title")}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t("welcome.done.body")}</p>
          <Button size="lg" className="mt-4" onClick={() => navigate({ to: "/brief" })}>
            {t("welcome.done.cta")}
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </GlassCard>
      )}

      <section className="space-y-3 print:hidden">
        <h2 className="font-display text-xl font-semibold">{t("welcome.steps.title")}</h2>
        <GlassCard interactive={false} className="p-6">
          <p className="mb-4 text-sm text-muted-foreground">{t("welcome.steps.hint")}</p>
          <JourneyTimeline milestones={data.milestones} project={project} detailed />
        </GlassCard>
      </section>
    </div>
  );
}

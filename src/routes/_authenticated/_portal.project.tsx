import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/glass/GlassCard";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { ProgressCard } from "@/components/journey/ProgressCard";
import { WaitingBadge } from "@/components/journey/WaitingBadge";
import { useWorkspace } from "@/hooks/usePortal";
import { useT } from "@/lib/i18n";
import { computeNextAction } from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_portal/project")({
  head: () => ({
    meta: [
      { title: "Project — Wayne Client Portal" },
      { name: "description", content: "Follow your project roadmap, progress and live links." },
      { property: "og:title", content: "Project — Wayne Client Portal" },
      {
        property: "og:description",
        content: "Follow your project roadmap, progress and live links.",
      },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { data } = useWorkspace();
  const t = useT();
  if (!data) return null;
  const action = computeNextAction(data.project, t);

  return (
    <div className="space-y-6 pb-8">
      <header>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{data.project.name}</h1>
        <div className="mt-3">
          <WaitingBadge owner={action.owner} />
        </div>
      </header>

      <ProgressCard action={action} projectName={data.project.name} />

      <GlassCard interactive={false} className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t("project.roadmap")}
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-3 py-1 text-[11px] font-medium text-success">
            <span className="size-1.5 animate-pulse rounded-full bg-success" />
            {t("journey.timeline.live")}
          </span>
        </div>
        <div className="mt-5">
          <JourneyTimeline milestones={data.milestones} project={data.project} detailed />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{t("journey.timeline.updated")}</p>
      </GlassCard>


      {data.links.length > 0 && (
        <GlassCard interactive={false} className="p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t("project.yourLinks")}
          </p>
          <div className="mt-4 space-y-2">
            {data.links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-border/70 px-4 py-3 text-sm transition-colors hover:bg-secondary/60"
              >
                <span>
                  <span className="font-medium">{link.name}</span>
                  <span className="ml-2 text-muted-foreground">{link.url}</span>
                </span>
                <ExternalLink className="size-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </GlassCard>
      )}
    </div>
  );
}

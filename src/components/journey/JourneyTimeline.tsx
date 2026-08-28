import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useI18n, useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import {
  formatDate,
  milestoneStatus,
  milestoneTitle,
  orderedMilestones,
  phaseRoute,
  type Milestone,
  type Project,
} from "@/lib/journey";

export function JourneyTimeline({
  milestones,
  project,
  detailed = false,
}: {
  milestones: Milestone[];
  project: Project;
  detailed?: boolean;
}) {
  const t = useT();
  const { locale } = useI18n();
  const ordered = orderedMilestones(milestones);
  return (
    <ol className="relative space-y-2">
      {ordered.map((milestone, index) => {
        const status = milestoneStatus(milestone, project);

        return (
          <motion.li
            key={milestone.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "flex gap-4 rounded-xl px-3 py-3 transition-colors",
              status === "active" && "bg-primary/8 ring-1 ring-primary/25",
              status === "upcoming" && "opacity-55",
            )}
          >
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold",
                  status === "done" && "border-success/50 bg-success/15 text-success",
                  status === "active" && "border-primary bg-primary/20 text-primary",
                  status === "upcoming" && "border-border bg-secondary text-muted-foreground",
                )}
              >
                {status === "done" ? (
                  <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Check className="size-3.5" />
                  </motion.span>
                ) : status === "active" ? (
                  <span className="size-2 rounded-full bg-primary animate-pulse" />
                ) : (
                  index + 1
                )}
              </span>
              {index < ordered.length - 1 && (
                <span
                  className={cn(
                    "mt-1 w-px flex-1",
                    status === "done" ? "bg-success/40" : "bg-border",
                  )}
                />
              )}
            </div>

            <div className="min-w-0 flex-1 pb-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p
                  className={cn(
                    "font-medium",
                    status === "active" && "text-foreground",
                    status !== "active" && "text-foreground/90",
                  )}
                >
                  {milestoneTitle(milestone, t)}
                </p>
                <span className="text-xs text-muted-foreground">
                  {status === "done" ? t("journey.timeline.completed") : formatDate(milestone.due_date, locale)}
                </span>
              </div>
              {(detailed || status === "active") && milestone.description && (
                <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
              )}
              {status === "active" && (
                <Link
                  to={phaseRoute(milestone.key)}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {t("journey.timeline.continue")}
                  <ArrowRight className="size-3.5" />
                </Link>
              )}
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}

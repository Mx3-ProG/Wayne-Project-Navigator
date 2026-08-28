import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/GlassCard";
import { WaitingBadge } from "@/components/journey/WaitingBadge";
import { useT } from "@/lib/i18n";
import type { NextAction } from "@/lib/journey";

export function ProgressCard({ action, projectName }: { action: NextAction; projectName: string }) {
  const t = useT();
  return (
    <GlassCard variant="strong" glow className="p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t("journey.progressCard.eyebrow")}
          </p>
          <h2 className="mt-2 text-xl font-semibold sm:text-2xl">{projectName}</h2>
        </div>
        <WaitingBadge owner={action.owner} />
      </div>

      <div className="mt-7 flex items-end justify-between">
        <p className="font-display text-4xl font-semibold sm:text-5xl">
          <span className="text-gradient">{action.progress}%</span>
        </p>
        <p className="text-right text-sm text-muted-foreground">
          {t("journey.progressCard.currentPhase")}
          <span className="block text-base font-medium text-foreground">{action.phaseLabel}</span>
        </p>
      </div>

      <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${action.progress}%` }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full rounded-full"
          style={{ background: "var(--gradient-primary)" }}
        >
          <span className="absolute inset-0 rounded-full sheen-sweep" />
        </motion.div>
      </div>
    </GlassCard>
  );
}

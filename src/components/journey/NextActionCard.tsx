import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import type { NextAction } from "@/lib/journey";

export function NextActionCard({ action }: { action: NextAction }) {
  const t = useT();
  const isWayne = action.owner === "wayne";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard variant={isWayne ? "default" : "active"} className="p-6 sm:p-8">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          <Sparkles className="size-3.5" />
          {isWayne
            ? t("journey.nextActionCard.whatWeAreDoing")
            : t("journey.nextActionCard.yourNextStep")}
        </p>

        <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">{action.title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {action.description}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Button asChild size="lg" variant={isWayne ? "secondary" : "default"}>
            <Link to={action.ctaTo}>
              {action.ctaLabel}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          {action.eta && (
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4" />
              {t("journey.nextActionCard.estimatedTime", { eta: action.eta })}
            </span>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}

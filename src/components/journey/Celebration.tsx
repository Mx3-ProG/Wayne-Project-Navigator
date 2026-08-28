import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

const PARTICLES = Array.from({ length: 14 }, (_, i) => i);

/** Milestone celebration: short, calm, premium. Only for real milestones. */
export function Celebration({
  show,
  title,
  subtitle,
}: {
  show: boolean;
  title: string;
  subtitle?: string;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center px-6"
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-md" />
          <motion.div
            initial={{ scale: 0.92, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass glass-active relative px-10 py-9 text-center"
          >
            <motion.span
              initial={{ scale: 0.3 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex size-14 items-center justify-center rounded-full border border-success/50 bg-success/15 text-success"
            >
              <Check className="size-7" />
            </motion.span>
            <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
            {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}

            {PARTICLES.map((p) => (
              <motion.span
                key={p}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.6 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: Math.cos((p / PARTICLES.length) * Math.PI * 2) * 130,
                  y: Math.sin((p / PARTICLES.length) * Math.PI * 2) * 90,
                  scale: 1,
                }}
                transition={{ duration: 1.1, delay: 0.12, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 size-1.5 rounded-full bg-primary"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

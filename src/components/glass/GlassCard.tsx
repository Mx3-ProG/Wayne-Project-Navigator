import { useRef, type HTMLAttributes, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "strong" | "active" | "dim";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  interactive?: boolean;
  glow?: boolean;
}

/**
 * Premium glass surface with a subtle reflection that follows the cursor.
 * All visuals come from design tokens in styles.css.
 */
export function GlassCard({
  variant = "default",
  interactive = true,
  glow = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "glass group/glass overflow-hidden",
        interactive && "glass-interactive",
        variant === "strong" && "glass-strong",
        variant === "active" && "glass-active",
        variant === "dim" && "glass-dim",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/glass:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), oklch(1 0 0 / 7%), transparent 70%)",
        }}
      />
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-70"
          style={{
            background:
              "radial-gradient(60% 100% at 50% -20%, oklch(0.78 0.13 214 / 22%), transparent 70%)",
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

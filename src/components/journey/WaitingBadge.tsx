import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function WaitingBadge({ owner, className }: { owner: "client" | "wayne"; className?: string }) {
  const t = useT();
  const isClient = owner === "client";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        isClient
          ? "border-warning/40 bg-warning/10 text-warning"
          : "border-primary/40 bg-primary/10 text-primary",
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          isClient ? "bg-warning" : "bg-primary",
          "animate-pulse",
        )}
      />
      {isClient ? t("common.waitingClient") : t("common.waitingWayne")}
    </span>
  );
}

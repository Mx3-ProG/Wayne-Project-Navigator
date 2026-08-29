import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePackages } from "@/hooks/usePortal";
import { useI18n, useT } from "@/lib/i18n";
import { formatMoney } from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_portal/services")({
  head: () => ({
    meta: [
      { title: "Services — Wayne Client Portal" },
      {
        name: "description",
        content: "Care plans and growth services to keep your product moving.",
      },
      { property: "og:title", content: "Services — Wayne Client Portal" },
      {
        property: "og:description",
        content: "Care plans and growth services to keep your product moving.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useT();
  const { locale } = useI18n();
  const { data, isLoading } = usePackages();

  return (
    <div className="space-y-6 pb-8">
      <header>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t("services.heading")}</h1>
        <p className="mt-2 text-muted-foreground">{t("services.subheading")}</p>
      </header>

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <Skeleton className="h-56 rounded-2xl" />
          <Skeleton className="h-56 rounded-2xl" />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {(data ?? []).map((pkg) => (
            <GlassCard key={pkg.id} className="flex h-full flex-col p-6">
              <Sparkles className="size-5 text-primary" />
              <p className="mt-3 font-display text-xl font-semibold">{pkg.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
              <p className="mt-4 font-display text-2xl font-semibold">
                {pkg.price_from
                  ? t("services.priceFrom", { price: formatMoney(pkg.price_from, locale) })
                  : t("services.priceOnRequest")}
              </p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {pkg.category ?? t("services.categoryDefault")}
              </p>
              <Button variant="outline" className="mt-6">
                {t("services.cta")}
              </Button>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}

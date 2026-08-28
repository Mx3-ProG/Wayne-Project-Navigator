import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertCircle, ArrowUpRight, FileCheck2, Send, UserCircle2 } from "lucide-react";
import { useMemo, useState } from "react";

import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useAdminProjects, type AdminProjectRow } from "@/hooks/useAdmin";
import { isProjectType } from "@/lib/brief-flow";
import { parseBusinessProfile, requiredProgress } from "@/lib/business-profile";
import { useI18n } from "@/lib/i18n";
import { formatDate, formatMoney, phaseLabel } from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_admin/admin")({
  head: () => ({
    meta: [
      { title: "Super admin — Wayne Client Portal" },
      { name: "description", content: "All client accounts, journeys and proposals in one view." },
      { property: "og:title", content: "Super admin — Wayne Client Portal" },
      {
        property: "og:description",
        content: "All client accounts, journeys and proposals in one view.",
      },
    ],
  }),
  component: AdminOverview,
});

type FilterKey =
  "all" | "wayne" | "client" | "brief" | "offer" | "software" | "hardware" | "hybrid";

function rowKind(row: AdminProjectRow): "software" | "hardware" | "hybrid" | null {
  if (
    row.brief_type === "software" ||
    row.brief_type === "hardware" ||
    row.brief_type === "hybrid"
  ) {
    return row.brief_type;
  }
  return null;
}

function AdminOverview() {
  const { data, isLoading } = useAdminProjects();
  const { t, locale } = useI18n();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [category, setCategory] = useState<string>("all");

  const kindFiltered = useMemo(() => {
    const all = data ?? [];
    switch (filter) {
      case "wayne":
        return all.filter((row) => row.waiting_on === "wayne");
      case "client":
        return all.filter((row) => row.waiting_on === "client");
      case "brief":
        return all.filter((row) => Boolean(row.brief_submitted_at));
      case "offer":
        return all.filter((row) => row.offer_status !== "published");
      case "software":
      case "hardware":
      case "hybrid":
        return all.filter((row) => rowKind(row) === filter);
      default:
        return all;
    }
  }, [data, filter]);

  const availableCategories = useMemo(() => {
    const set = new Set<string>();
    for (const row of kindFiltered) {
      for (const cat of row.brief_categories ?? []) set.add(cat);
    }
    return Array.from(set).sort();
  }, [kindFiltered]);

  const rows = useMemo(() => {
    if (category === "all") return kindFiltered;
    return kindFiltered.filter((row) => (row.brief_categories ?? []).includes(category));
  }, [kindFiltered, category]);

  const filters: { key: FilterKey; labelKey: string }[] = [
    { key: "all", labelKey: "admin.filter.all" },
    { key: "wayne", labelKey: "admin.filter.wayne" },
    { key: "client", labelKey: "admin.filter.client" },
    { key: "brief", labelKey: "admin.filter.brief" },
    { key: "offer", labelKey: "admin.filter.offer" },
    { key: "software", labelKey: "admin.filter.software" },
    { key: "hardware", labelKey: "admin.filter.hardware" },
    { key: "hybrid", labelKey: "admin.filter.hybrid" },
  ];

  function categoryLabel(cat: string): string {
    return isProjectType(cat) ? t(`brief.type.${cat}.label`) : t(`brief.category.${cat}.label`);
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t("admin.list.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("admin.list.subtitle")}</p>
      </header>

      <div className="flex flex-wrap items-center gap-2">
        {filters.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setFilter(item.key);
              setCategory("all");
            }}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
              filter === item.key
                ? "border-primary/40 bg-primary/15 text-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {t(item.labelKey)}
          </button>
        ))}
        {(filter === "software" || filter === "hardware" || filter === "hybrid") &&
          availableCategories.length > 0 && (
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-8 w-[220px] text-xs">
                <SelectValue placeholder={t("admin.filter.category")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("admin.filter.category")}</SelectItem>
                {availableCategories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {categoryLabel(cat)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
      </div>

      {isLoading ? (
        <div className="space-y-3">
          <Skeleton className="h-24 w-full rounded-2xl" />
          <Skeleton className="h-24 w-full rounded-2xl" />
        </div>
      ) : rows.length === 0 ? (
        <GlassCard interactive={false} className="p-6">
          <p className="text-sm text-muted-foreground">{t("admin.list.empty")}</p>
        </GlassCard>
      ) : (
        <div className="space-y-3">
          {rows.map((row) => (
            <AdminRow key={row.project_id} row={row} locale={locale} t={t} />
          ))}
        </div>
      )}
    </div>
  );
}

function AdminRow({
  row,
  locale,
  t,
}: {
  row: AdminProjectRow;
  locale: ReturnType<typeof useI18n>["locale"];
  t: ReturnType<typeof useI18n>["t"];
}) {
  const fiche = requiredProgress(parseBusinessProfile(row.business_profile));
  const kind = rowKind(row);
  const badges = [
    ...(kind
      ? [
          {
            key: "kind",
            label: t(`admin.type.${kind}`),
            tone: "neutral" as const,
          },
        ]
      : []),
    {
      key: "phase",
      label: `${t("admin.row.phase")}: ${phaseLabel(row.phase, t)}`,
      tone: "neutral" as const,
    },
    {
      key: "waiting",
      label:
        row.waiting_on === "client" ? t("admin.row.waitingClient") : t("admin.row.waitingWayne"),
      tone: row.waiting_on === "wayne" ? ("alert" as const) : ("neutral" as const),
    },
    {
      key: "fiche",
      label: `${t("admin.row.fiche")} ${fiche.done}/${fiche.total}`,
      tone: fiche.done === fiche.total ? ("good" as const) : ("neutral" as const),
    },
    {
      key: "brief",
      label: row.brief_submitted_at ? t("admin.row.briefDone") : t("admin.row.briefPending"),
      tone: row.brief_submitted_at ? ("good" as const) : ("neutral" as const),
    },
    {
      key: "offer",
      label:
        row.offer_status === "published"
          ? t("admin.row.offerPublished")
          : row.offer_status === "draft"
            ? t("admin.row.offerDraft")
            : t("admin.row.offerNone"),
      tone: row.offer_status === "published" ? ("good" as const) : ("alert" as const),
    },
  ];

  return (
    <GlassCard className="p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <UserCircle2 className="size-4 text-primary" />
            <p className="truncate font-medium">{row.company ?? row.client_name}</p>
          </div>
          <p className="mt-1 truncate text-sm text-muted-foreground">
            {row.full_name ?? "—"} · {row.email ?? "—"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {row.project_name} · {formatDate(row.created_at, locale)} ·{" "}
            {t("admin.row.paid", {
              paid: formatMoney(row.paid_amount, locale),
              total: formatMoney(row.total_amount, locale),
            })}
          </p>
        </div>
        <Button asChild size="sm" variant="secondary">
          <Link to="/admin/$projectId" params={{ projectId: row.project_id }}>
            {t("admin.row.open")}
            <ArrowUpRight className="ml-1.5 size-3.5" />
          </Link>
        </Button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge.key}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${
              badge.tone === "good"
                ? "border-success/40 bg-success/10 text-success"
                : badge.tone === "alert"
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-secondary/40 text-muted-foreground"
            }`}
          >
            {badge.key === "brief" ? (
              <FileCheck2 className="size-3" />
            ) : badge.key === "offer" ? (
              <Send className="size-3" />
            ) : badge.tone === "alert" ? (
              <AlertCircle className="size-3" />
            ) : null}
            {badge.label}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

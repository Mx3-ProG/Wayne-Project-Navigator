import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { GlassCard } from "@/components/glass/GlassCard";
import { useWorkspace } from "@/hooks/usePortal";
import { useI18n } from "@/lib/i18n";
import { documentLabel, documentTypeLabel, formatDate } from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_portal/documents")({
  head: () => ({
    meta: [
      { title: "Documents — Wayne Client Portal" },
      { name: "description", content: "All your project documents, contracts and deliverables." },
      { property: "og:title", content: "Documents — Wayne Client Portal" },
      {
        property: "og:description",
        content: "All your project documents, contracts and deliverables.",
      },
    ],
  }),
  component: DocumentsPage,
});

function DocumentsPage() {
  const { data } = useWorkspace();
  const { t, locale } = useI18n();
  if (!data) return null;

  return (
    <div className="space-y-6 pb-8">
      <header>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t("documents.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("documents.subtitle")}</p>
      </header>

      {data.documents.length === 0 ? (
        <GlassCard interactive={false} className="p-8 text-center">
          <p className="font-medium">{t("documents.emptyTitle")}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t("documents.emptyBody")}</p>
        </GlassCard>
      ) : (
        <div className="space-y-3">
          {data.documents.map((doc) => (
            <GlassCard key={doc.id} className="p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 text-primary">
                    <FileText className="size-5" />
                  </span>
                  <div>
                    <p className="font-medium">{documentLabel(doc, t)}</p>
                    <p className="text-sm text-muted-foreground">
                      {documentTypeLabel(doc, t)} · {formatDate(doc.created_at, locale)}
                    </p>
                  </div>
                </div>
                {doc.url ? (
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary/60"
                  >
                    <Download className="size-4" />
                    {t("documents.open")}
                  </a>
                ) : (
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t("documents.inPortal")}
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}

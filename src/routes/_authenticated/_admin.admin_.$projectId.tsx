import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  CircleDot,
  ExternalLink,
  Eye,
  EyeOff,
  FileText,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { AdminMessage, AdminNotes } from "@/components/admin/AdminNotes";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import type { Invoice } from "@/lib/journey";
import {
  useAdminAdvance,
  useAdminMarkPaid,
  useAdminUpdateInvoice,
  useAdminProject,
  useSaveOffer,
  useUnpublishOffer,
} from "@/hooks/useAdmin";
import { useAttachmentUrl } from "@/hooks/useAttachments";
import { BUSINESS_SECTIONS, parseBusinessProfile, requiredProgress } from "@/lib/business-profile";
import {
  KIND_KEY,
  UNSURE_KEY,
  isProjectKind,
  isProjectType,
  recapFieldsFor,
  splitBriefAnswers,
  type Attachment,
  type BriefField,
} from "@/lib/brief-flow";
import { useI18n } from "@/lib/i18n";
import {
  PHASE_ORDER,
  formatFullDate,
  formatMoney,
  invoiceLabel,
  phaseLabel,
  progressFor,
  type Phase,
} from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_admin/admin_/$projectId")({
  head: () => ({
    meta: [
      { title: "Client file — Wayne Super Admin" },
      {
        name: "description",
        content: "Full client file: journey, business fiche, brief, invoices and proposal.",
      },
      { property: "og:title", content: "Client file — Wayne Super Admin" },
      {
        property: "og:description",
        content: "Full client file: journey, business fiche, brief, invoices and proposal.",
      },
    ],
  }),
  component: AdminClientPage,
});

function AdminClientPage() {
  const { projectId } = Route.useParams();
  const { data, isLoading } = useAdminProject(projectId);
  const { t, locale } = useI18n();

  const saveOffer = useSaveOffer(projectId);
  const unpublish = useUnpublishOffer(projectId);
  const advance = useAdminAdvance(projectId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stripeUrl, setStripeUrl] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!data || loaded) return;
    setTitle(data.offer?.title ?? "");
    setDescription(data.offer?.description ?? "");
    setStripeUrl(data.offer?.stripe_url ?? "");
    setLoaded(true);
  }, [data, loaded]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-48 w-full rounded-2xl" />
      </div>
    );
  }

  if (!data) {
    return (
      <GlassCard interactive={false} className="p-6">
        <p className="text-sm text-muted-foreground">{t("admin.detail.notFound")}</p>
        <Button asChild variant="secondary" className="mt-4">
          <Link to="/admin">
            <ArrowLeft className="mr-2 size-4" />
            {t("admin.detail.back")}
          </Link>
        </Button>
      </GlassCard>
    );
  }

  const values = parseBusinessProfile(data.project.business_profile);
  const fiche = requiredProgress(values);
  const { answers, history } = splitBriefAnswers(data.brief?.answers);
  const kindRaw = answers[KIND_KEY];
  const unsure = answers[UNSURE_KEY] === true;
  const briefKind = isProjectKind(kindRaw) ? kindRaw : null;
  const legacyBriefType = isProjectType(answers["project_type"]) ? answers["project_type"] : null;
  const briefCategories = Array.isArray(answers["categories"])
    ? (answers["categories"] as string[])
    : [];
  const briefTopLabel = unsure
    ? t("brief.kind.unsure.label")
    : briefKind
      ? t(`brief.kind.${briefKind}.label`)
      : legacyBriefType
        ? t(`brief.type.${legacyBriefType}.label`)
        : null;
  const briefRecapFields = recapFieldsFor(answers);
  const published = data.offer?.status === "published";

  function categoryLabel(cat: string): string {
    return isProjectType(cat) ? t(`brief.type.${cat}.label`) : t(`brief.category.${cat}.label`);
  }

  function fieldValue(field: BriefField): string {
    const value = answers[field.key];
    if (field.kind === "file") return ""; // rendered separately as attachments
    if (field.kind === "select" && typeof value === "string" && value) {
      return t(`brief.field.${field.key}.option.${value}`);
    }
    return typeof value === "string" ? value : "";
  }

  async function handleSaveOffer(publish: boolean) {
    try {
      await saveOffer.mutateAsync({ title, description, stripeUrl, publish });
      toast.success(publish ? t("admin.offer.published") : t("admin.offer.saved"));
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("admin.offer.error"));
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t("admin.detail.eyebrow")}
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold">
            {data.owner?.company ?? data.clientName ?? data.project.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {data.owner?.full_name ?? "—"} · {data.owner?.email ?? "—"} · {data.owner?.phone ?? "—"}
          </p>
        </div>
        <Button asChild variant="ghost" size="sm">
          <Link to="/admin">
            <ArrowLeft className="mr-1.5 size-4" />
            {t("admin.detail.back")}
          </Link>
        </Button>
      </div>

      {/* Read-only client view */}
      <GlassCard variant="strong" interactive={false} className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {t("admin.view.eyebrow")}
            </p>
            <p className="mt-2 font-display text-xl font-semibold">
              {phaseLabel(data.project.phase, t)} · {data.project.progress}%
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {data.project.waiting_on === "client"
                ? t("admin.row.waitingClient")
                : t("admin.row.waitingWayne")}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
            <Eye className="size-3.5" />
            {t("admin.view.readOnly")}
          </span>
        </div>

        <ol className="mt-5 space-y-2">
          {data.milestones.map((milestone) => {
            const order = PHASE_ORDER.indexOf(milestone.key as Phase);
            const current = PHASE_ORDER.indexOf(data.project.phase);
            const done = order > -1 && order < current;
            const active = order === current;
            return (
              <li
                key={milestone.id}
                className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-sm ${
                  active
                    ? "border-primary/40 bg-primary/10"
                    : done
                      ? "border-success/30 bg-success/5 text-muted-foreground"
                      : "border-border/70 text-muted-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  {done ? (
                    <Check className="size-3.5 text-success" />
                  ) : (
                    <CircleDot className="size-3.5" />
                  )}
                  {milestone.title}
                </span>
                {active && (
                  <Button
                    size="sm"
                    variant="secondary"
                    disabled={advance.isPending}
                    onClick={() => {
                      const next = PHASE_ORDER[Math.min(current + 1, PHASE_ORDER.length - 1)];
                      if (!next) return;
                      advance.mutate({
                        phase: next,
                        waitingOn: next === "review" || next === "delivery" ? "client" : "wayne",
                        progress: progressFor(next),
                      });
                    }}
                  >
                    {t("admin.action.advance")}
                  </Button>
                )}
              </li>
            );
          })}
        </ol>
      </GlassCard>

      <AdminMessage
        projectId={projectId}
        email={data.owner?.email ?? null}
        name={data.owner?.full_name ?? null}
        projectName={data.project.name}
      />

      <AdminNotes projectId={projectId} />

      {/* Proposal editor */}
      <GlassCard interactive={false} className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl font-semibold">{t("admin.offer.title")}</h2>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
              published
                ? "border-success/40 bg-success/10 text-success"
                : "border-border bg-secondary/40 text-muted-foreground"
            }`}
          >
            <Send className="size-3.5" />
            {published ? t("admin.row.offerPublished") : t("admin.row.offerDraft")}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{t("admin.offer.hint")}</p>

        <div className="mt-5 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="offer-title">{t("admin.offer.field.title")}</Label>
            <Input
              id="offer-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder={t("admin.offer.field.titlePlaceholder")}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="offer-desc">{t("admin.offer.field.description")}</Label>
            <Textarea
              id="offer-desc"
              rows={5}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder={t("admin.offer.field.descriptionPlaceholder")}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="offer-url">{t("admin.offer.field.stripe")}</Label>
            <Input
              id="offer-url"
              value={stripeUrl}
              onChange={(event) => setStripeUrl(event.target.value)}
              placeholder="https://buy.stripe.com/..."
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="secondary"
              disabled={saveOffer.isPending}
              onClick={() => handleSaveOffer(false)}
            >
              {t("admin.offer.save")}
            </Button>
            <Button
              disabled={saveOffer.isPending || !stripeUrl.trim()}
              onClick={() => handleSaveOffer(true)}
            >
              <Send className="mr-2 size-4" />
              {t("admin.offer.publish")}
            </Button>
            {published && (
              <Button
                variant="ghost"
                disabled={unpublish.isPending}
                onClick={() => unpublish.mutate()}
              >
                <EyeOff className="mr-2 size-4" />
                {t("admin.offer.unpublish")}
              </Button>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Invoices */}
      <GlassCard interactive={false} className="p-6">
        <h2 className="font-display text-xl font-semibold">{t("admin.invoices.title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("admin.invoices.hint")}</p>
        <div className="mt-4 space-y-3">
          {data.invoices.map((invoice) => (
            <AdminInvoiceRow key={invoice.id} projectId={projectId} invoice={invoice} />
          ))}
        </div>
      </GlassCard>

      {/* Business fiche */}
      <GlassCard interactive={false} className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-xl font-semibold">{t("admin.fiche.title")}</h2>
          <span className="text-xs text-muted-foreground">
            {t("welcome.progress.remaining", {
              done: String(fiche.done),
              total: String(fiche.total),
            })}
          </span>
        </div>
        <div className="mt-4 space-y-5">
          {BUSINESS_SECTIONS.map((section) => (
            <div key={section.key}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {t(`welcome.business.section.${section.key}`)}
              </p>
              <dl className="mt-2 divide-y divide-border/60">
                {section.fields.map((field) => (
                  <div
                    key={field.key}
                    className="flex flex-wrap justify-between gap-2 py-2 text-sm"
                  >
                    <dt className="text-muted-foreground">
                      {t(`welcome.business.field.${field.key}.label`)}
                    </dt>
                    <dd className="max-w-md whitespace-pre-line text-right font-medium">
                      {values[field.key]?.trim() || t("welcome.recap.empty")}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Brief */}
      <GlassCard interactive={false} className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-xl font-semibold">{t("admin.brief.title")}</h2>
          <span className="text-xs text-muted-foreground">
            {data.brief?.submitted_at
              ? t("admin.brief.submitted", {
                  date: formatFullDate(data.brief.submitted_at, locale),
                })
              : t("admin.row.briefPending")}
          </span>
        </div>
        {briefTopLabel ? (
          <p className="mt-3 text-sm">
            <span className="text-muted-foreground">{t("brief.pdf.section.type")}: </span>
            {briefTopLabel}
          </p>
        ) : null}
        {briefCategories.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {briefCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs"
              >
                {categoryLabel(cat)}
              </span>
            ))}
          </div>
        )}
        <dl className="mt-4 divide-y divide-border/60">
          {briefRecapFields
            .filter((field) => field.kind !== "file")
            .map((field) => (
              <div key={field.key} className="flex flex-wrap justify-between gap-2 py-2 text-sm">
                <dt className="text-muted-foreground">{t(`brief.field.${field.key}.label`)}</dt>
                <dd className="max-w-md whitespace-pre-line text-right font-medium">
                  {fieldValue(field).trim() || t("welcome.recap.empty")}
                </dd>
              </div>
            ))}
        </dl>
        {briefRecapFields
          .filter((field) => field.kind === "file")
          .map((field) => {
            const value = Array.isArray(answers[field.key])
              ? (answers[field.key] as Attachment[])
              : [];
            return (
              <div key={field.key} className="mt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {t("admin.brief.attachments.title")}
                </p>
                {value.length === 0 ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("admin.brief.attachments.empty")}
                  </p>
                ) : (
                  <ul className="mt-2 space-y-2">
                    {value.map((attachment) => (
                      <AdminAttachmentRow key={attachment.path} attachment={attachment} />
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        {history.length > 0 && (
          <div className="mt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t("admin.brief.history")}
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {history
                .slice()
                .reverse()
                .map((entry, index) => (
                  <li key={`${entry.at}-${index}`}>
                    {formatFullDate(entry.at, locale)} ·{" "}
                    {entry.event === "submitted"
                      ? t("admin.brief.eventSubmitted")
                      : t("admin.brief.eventReopened")}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </GlassCard>

      {/* Documents */}
      <GlassCard interactive={false} className="p-6">
        <h2 className="font-display text-xl font-semibold">{t("admin.documents.title")}</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {data.documents.map((doc) => (
            <li
              key={doc.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-border/70 px-4 py-2.5"
            >
              <span className="flex items-center gap-2">
                <FileText className="size-4 text-primary" />
                {doc.name}
              </span>
              <span className="text-xs text-muted-foreground">{doc.status}</span>
            </li>
          ))}
        </ul>
        {data.agreement?.signed_at ? (
          <p className="mt-4 text-sm text-muted-foreground">
            {t("admin.documents.signed", {
              name: data.agreement.signed_name ?? "—",
              date: formatFullDate(data.agreement.signed_at, locale),
            })}
          </p>
        ) : null}
      </GlassCard>
    </div>
  );
}

function AdminInvoiceRow({ projectId, invoice }: { projectId: string; invoice: Invoice }) {
  const { t, locale } = useI18n();
  const update = useAdminUpdateInvoice(projectId);
  const markPaid = useAdminMarkPaid(projectId);
  const [amount, setAmount] = useState(String(invoice.amount ?? ""));
  const [url, setUrl] = useState(invoice.payment_url ?? "");
  const isPaid = invoice.status === "paid";

  async function save() {
    try {
      await update.mutateAsync({
        invoiceId: invoice.id,
        amount: Number(amount) || 0,
        paymentUrl: url,
      });
      toast.success(url.trim() ? t("admin.invoices.sent") : t("admin.invoices.saved"));
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("admin.invoices.error"));
    }
  }

  return (
    <div className="rounded-xl border border-border/70 px-4 py-3 text-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-medium">{invoiceLabel(invoice, t)}</p>
          <p className="text-xs text-muted-foreground">
            {formatMoney(invoice.amount, locale)} ·{" "}
            {isPaid ? t("billing.invoice.statusPaid") : t("billing.invoice.statusUnpaid")}
          </p>
        </div>
        {!isPaid && (
          <Button
            size="sm"
            variant="secondary"
            disabled={markPaid.isPending}
            onClick={() => markPaid.mutate(invoice.id)}
          >
            {t("admin.invoices.markPaid")}
          </Button>
        )}
      </div>
      {!isPaid && (
        <div className="mt-3 grid gap-3 sm:grid-cols-[140px_1fr_auto] sm:items-end">
          <div className="space-y-1.5">
            <Label htmlFor={`amount-${invoice.id}`}>{t("admin.invoices.amount")}</Label>
            <Input
              id={`amount-${invoice.id}`}
              type="number"
              min={0}
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={`url-${invoice.id}`}>{t("admin.invoices.link")}</Label>
            <Input
              id={`url-${invoice.id}`}
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://buy.stripe.com/..."
            />
          </div>
          <Button disabled={update.isPending} onClick={save}>
            <Send className="mr-2 size-4" />
            {t("admin.invoices.save")}
          </Button>
        </div>
      )}
    </div>
  );
}

function AdminAttachmentRow({ attachment }: { attachment: Attachment }) {
  const { t } = useI18n();
  const { data: url } = useAttachmentUrl(attachment.path);
  return (
    <li className="flex items-center justify-between gap-3 rounded-xl border border-border/70 px-4 py-2.5 text-sm">
      <span className="flex min-w-0 items-center gap-2">
        <FileText className="size-4 shrink-0 text-primary" />
        <span className="truncate">{attachment.name}</span>
      </span>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-xs text-primary hover:underline"
        >
          <ExternalLink className="size-3.5" />
          {t("admin.brief.attachments.open")}
        </a>
      ) : (
        <span className="text-xs text-muted-foreground">…</span>
      )}
    </li>
  );
}

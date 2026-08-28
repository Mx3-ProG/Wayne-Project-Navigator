import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Clock, Download, ExternalLink, Lock } from "lucide-react";
import { GlassCard } from "@/components/glass/GlassCard";
import { PrintSheet } from "@/components/print/PrintSheet";
import { Button } from "@/components/ui/button";
import { useWorkspace } from "@/hooks/usePortal";
import { useI18n } from "@/lib/i18n";
import { formatFullDate, formatMoney, invoiceLabel } from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_portal/invoice/$invoiceId")({
  head: () => ({
    meta: [
      { title: "Invoice — Wayne Client Portal" },
      {
        name: "description",
        content: "Review your invoice, its status and download it as a PDF.",
      },
      { property: "og:title", content: "Invoice — Wayne Client Portal" },
      {
        property: "og:description",
        content: "Review your invoice, its status and download it as a PDF.",
      },
    ],
  }),
  component: InvoicePage,
});

function InvoicePage() {
  const { invoiceId } = Route.useParams();
  const { data } = useWorkspace();
  const { t, locale } = useI18n();

  if (!data) return null;
  const invoice = data.invoices.find((item) => item.id === invoiceId);

  if (!invoice) {
    return (
      <div className="space-y-6 pb-8">
        <GlassCard interactive={false} className="p-6">
          <p className="text-sm text-muted-foreground">{t("billing.detail.notFound")}</p>
          <Button asChild variant="secondary" className="mt-4">
            <Link to="/billing">
              <ArrowLeft className="mr-2 size-4" />
              {t("billing.detail.back")}
            </Link>
          </Button>
        </GlassCard>
      </div>
    );
  }

  const isPaid = invoice.status === "paid";
  const offer = data.offer && data.offer.status === "published" ? data.offer : null;
  const payLink = invoice.payment_url ?? offer?.stripe_url ?? null;
  const label = invoiceLabel(invoice, t);
  const clientName = data.clientName ?? data.profile.full_name ?? "—";

  const rows = [
    { label: t("billing.detail.reference"), value: invoice.reference ?? "—" },
    { label: t("billing.detail.billedTo"), value: clientName },
    { label: t("billing.detail.issuer"), value: "Wayne-Web" },
    { label: t("billing.detail.project"), value: data.project.name },
    { label: t("billing.detail.package"), value: data.project.package_name ?? "—" },
    {
      label: isPaid ? t("billing.detail.paidDate") : t("billing.detail.dueDate"),
      value: formatFullDate(isPaid ? invoice.paid_at : invoice.due_date, locale),
    },
    {
      label: t("billing.detail.summary"),
      value: isPaid ? t("billing.invoice.statusPaid") : t("billing.invoice.statusUnpaid"),
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      <PrintSheet
        title={`${t("billing.detail.eyebrow")} — ${label}`}
        subtitle={data.project.name}
        meta={rows}
        sections={[
          {
            heading: t("billing.detail.total"),
            rows: [
              { label: t("billing.detail.amount"), value: formatMoney(invoice.amount, locale) },
            ],
          },
        ]}
        footer={t("billing.detail.printedOn", {
          date: formatFullDate(new Date().toISOString(), locale),
        })}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t("billing.detail.eyebrow")}
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{label}</h1>
          <p className="mt-2 text-muted-foreground">{t("billing.detail.subtitle")}</p>
        </div>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${
            isPaid
              ? "border-success/40 bg-success/10 text-success"
              : "border-primary/40 bg-primary/10 text-primary"
          }`}
        >
          {isPaid ? <Check className="size-3.5" /> : <Clock className="size-3.5" />}
          {isPaid ? t("billing.invoice.statusPaid") : t("billing.invoice.statusUnpaid")}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <GlassCard variant="strong" interactive={false} className="p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t("billing.detail.summary")}
          </p>
          <dl className="mt-5 divide-y divide-border/70">
            {rows.slice(0, 6).map((row) => (
              <div key={row.label} className="flex flex-wrap justify-between gap-2 py-3 text-sm">
                <dt className="text-muted-foreground">{row.label}</dt>
                <dd className="font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-4 rounded-xl border border-border bg-secondary/30 p-5">
            <p className="text-sm text-muted-foreground">{t("billing.detail.total")}</p>
            <p className="font-display text-3xl font-semibold">
              {formatMoney(invoice.amount, locale)}
            </p>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            {isPaid
              ? t("billing.detail.paidNote")
              : payLink
                ? t("billing.detail.unpaidNote")
                : t("billing.invoice.awaitingOffer")}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {!isPaid && payLink && (
              <Button asChild size="lg">
                <a href={payLink} target="_blank" rel="noopener noreferrer">
                  {t("billing.offer.cta")}
                  <ExternalLink className="ml-2 size-4" />
                </a>
              </Button>
            )}
            <Button variant="secondary" onClick={() => window.print()}>
              <Download className="mr-2 size-4" />
              {t("billing.detail.download")}
            </Button>
            <Button asChild variant="ghost">
              <Link to="/billing">
                <ArrowLeft className="mr-2 size-4" />
                {t("billing.detail.back")}
              </Link>
            </Button>
          </div>
        </GlassCard>
      </motion.div>

      <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Lock className="size-3.5" />
        {t("billing.securityNote")}
      </p>
    </div>
  );
}

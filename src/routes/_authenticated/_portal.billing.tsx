import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Clock, CreditCard, ExternalLink, Lock } from "lucide-react";

import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useWorkspace } from "@/hooks/usePortal";
import { useI18n } from "@/lib/i18n";
import { formatDate, formatMoney, invoiceLabel } from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_portal/billing")({
  head: () => ({
    meta: [
      { title: "Billing — Wayne Client Portal" },
      { name: "description", content: "Your invoices, payments and remaining balance in one view." },
      { property: "og:title", content: "Billing — Wayne Client Portal" },
      {
        property: "og:description",
        content: "Your invoices, payments and remaining balance in one view.",
      },
    ],
  }),
  component: BillingPage,
});

function BillingPage() {
  const { data } = useWorkspace();
  const { t, locale } = useI18n();

  if (!data) return null;
  const total = Number(data.project.total_amount);
  const paid = Number(data.project.paid_amount);
  const pct = total > 0 ? Math.round((paid / total) * 100) : 0;
  const offer = data.offer && data.offer.status === "published" ? data.offer : null;

  return (
    <div className="space-y-6 pb-8">
      <header>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t("billing.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("billing.subtitle")}</p>
      </header>

      {offer ? (
        <GlassCard variant="strong" interactive={false} className="p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            {t("billing.offer.eyebrow")}
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold">
            {offer.title || t("billing.offer.title")}
          </h2>
          {offer.description ? (
            <p className="mt-3 whitespace-pre-line text-sm text-muted-foreground">
              {offer.description}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {offer.stripe_url ? (
              <Button asChild size="lg">
                <a href={offer.stripe_url} target="_blank" rel="noopener noreferrer">
                  {t("billing.offer.cta")}
                  <ExternalLink className="ml-2 size-4" />
                </a>
              </Button>
            ) : (
              <span className="text-sm text-muted-foreground">{t("billing.offer.linkSoon")}</span>
            )}
            <p className="text-xs text-muted-foreground">{t("billing.offer.note")}</p>
          </div>
        </GlassCard>
      ) : (
        <GlassCard interactive={false} className="p-6 sm:p-8">
          <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground">
            <Lock className="size-5" />
          </span>
          <h2 className="mt-4 font-display text-xl font-semibold">
            {t("billing.offer.waiting.title")}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{t("billing.offer.waiting.body")}</p>
        </GlassCard>
      )}

      <GlassCard interactive={false} className="p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {t("billing.paidSoFar")}
            </p>
            <p className="mt-2 font-display text-4xl font-semibold">
              {formatMoney(paid, locale)}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            {t("billing.ofTotal", { total: formatMoney(total, locale) })}
          </p>
        </div>
        <Progress value={pct} className="mt-5 h-2" />
      </GlassCard>

      <div className="space-y-3">
        {data.invoices.map((invoice) => {
          const isPaid = invoice.status === "paid";
          const payLink = invoice.payment_url ?? offer?.stripe_url ?? null;
          return (
            <GlassCard key={invoice.id} className="p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex size-10 items-center justify-center rounded-xl border ${
                      isPaid
                        ? "border-success/50 bg-success/15 text-success"
                        : offer
                          ? "border-primary/40 bg-primary/15 text-primary"
                          : "border-border bg-secondary/50 text-muted-foreground"
                    }`}
                  >
                    {isPaid ? (
                      <Check className="size-5" />
                    ) : offer ? (
                      <CreditCard className="size-5" />
                    ) : (
                      <Lock className="size-5" />
                    )}
                  </span>
                  <div>
                    <p className="font-medium">{invoiceLabel(invoice, t)}</p>
                    <p className="text-sm text-muted-foreground">
                      {isPaid
                        ? t("billing.paidOn", { date: formatDate(invoice.paid_at, locale) })
                        : offer
                          ? t("billing.dueOn", { date: formatDate(invoice.due_date, locale) })
                          : t("billing.invoice.awaitingOffer")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
                      isPaid
                        ? "border-success/40 bg-success/10 text-success"
                        : "border-border bg-secondary/40 text-muted-foreground"
                    }`}
                  >
                    {isPaid ? <Check className="size-3.5" /> : <Clock className="size-3.5" />}
                    {isPaid ? t("billing.invoice.statusPaid") : t("billing.invoice.statusUnpaid")}
                  </span>
                  {!isPaid && payLink && (
                    <Button asChild size="sm">
                      <a href={payLink} target="_blank" rel="noopener noreferrer">
                        {t("billing.offer.cta")}
                        <ExternalLink className="ml-1.5 size-3.5" />
                      </a>
                    </Button>
                  )}
                  <Button asChild variant="secondary" size="sm">
                    <Link to="/invoice/$invoiceId" params={{ invoiceId: invoice.id }}>
                      {t("billing.invoice.view")}
                      <ArrowUpRight className="ml-1.5 size-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Lock className="size-3.5" />
        {t("billing.securityNote")}
      </p>
    </div>
  );
}

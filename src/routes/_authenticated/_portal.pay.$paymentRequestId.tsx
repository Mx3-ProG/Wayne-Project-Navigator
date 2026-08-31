import { createFileRoute, Link } from "@tanstack/react-router";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import { ArrowLeft, Check, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePaymentIntentSecret } from "@/hooks/usePortal";
import { useI18n } from "@/lib/i18n";
import { formatMoney } from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_portal/pay/$paymentRequestId")({
  head: () => ({
    meta: [{ title: "Payment — Wayne Client Portal" }],
  }),
  component: PayPage,
});

let stripePromise: Promise<Stripe | null> | undefined;
function getStripe() {
  if (!stripePromise) {
    const key = import.meta.env["VITE_STRIPE_PUBLISHABLE_KEY"] as string | undefined;
    stripePromise = key ? loadStripe(key) : Promise.resolve(null);
  }
  return stripePromise;
}

function PayPage() {
  const { paymentRequestId } = Route.useParams();
  const { t, locale } = useI18n();
  const { data, isLoading, error } = usePaymentIntentSecret(paymentRequestId);

  if (isLoading) {
    return <Skeleton className="h-64 w-full rounded-2xl" />;
  }

  if (error || !data) {
    return (
      <GlassCard interactive={false} className="p-6">
        <p className="text-sm text-muted-foreground">{t("payments.pay.error")}</p>
        <Button asChild variant="secondary" className="mt-4">
          <Link to="/billing">
            <ArrowLeft className="mr-2 size-4" />
            {t("billing.detail.back")}
          </Link>
        </Button>
      </GlassCard>
    );
  }

  if (data.status !== "pending" || !data.clientSecret) {
    return (
      <GlassCard interactive={false} className="p-6 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-success/40 bg-success/10 text-success">
          <Check className="size-6" />
        </span>
        <h1 className="mt-4 font-display text-xl font-semibold">
          {t("payments.pay.alreadySettled")}
        </h1>
        <Button asChild variant="secondary" className="mt-4">
          <Link to="/billing">
            <ArrowLeft className="mr-2 size-4" />
            {t("billing.detail.back")}
          </Link>
        </Button>
      </GlassCard>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-6 pb-8">
      <header>
        <h1 className="font-display text-3xl font-semibold">{t("payments.pay.title")}</h1>
        <p className="mt-2 text-muted-foreground">
          {t("payments.pay.subtitle", { amount: formatMoney(data.amount, locale) })}
        </p>
      </header>
      <GlassCard variant="strong" interactive={false} className="p-6 sm:p-8">
        <Elements
          stripe={getStripe()}
          options={{ clientSecret: data.clientSecret, appearance: { theme: "night" } }}
        >
          <PaymentForm amount={data.amount} />
        </Elements>
      </GlassCard>
      <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Lock className="size-3.5" />
        {t("billing.securityNote")}
      </p>
    </div>
  );
}

function PaymentForm({ amount }: { amount: number }) {
  const { t, locale } = useI18n();
  const stripe = useStripe();
  const elements = useElements();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!stripe || !elements || submitting) return;
    setSubmitting(true);
    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });
      if (error) {
        toast.error(error.message ?? t("payments.pay.error"));
        return;
      }
      if (
        paymentIntent &&
        (paymentIntent.status === "succeeded" || paymentIntent.status === "processing")
      ) {
        setDone(true);
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-success/40 bg-success/10 text-success">
          <Check className="size-6" />
        </span>
        <h2 className="mt-4 font-display text-xl font-semibold">{t("payments.pay.thanks")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("payments.pay.confirming")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button type="submit" size="lg" className="w-full" disabled={!stripe || submitting}>
        {submitting
          ? t("payments.pay.processing")
          : t("payments.pay.submit", { amount: formatMoney(amount, locale) })}
      </Button>
    </form>
  );
}

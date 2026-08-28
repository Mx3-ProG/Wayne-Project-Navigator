import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check, FileSignature } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { GlassCard } from "@/components/glass/GlassCard";
import { Celebration } from "@/components/journey/Celebration";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignAgreement, useWorkspace } from "@/hooks/usePortal";
import { useT } from "@/lib/i18n";
import { formatMoney } from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_portal/agreement")({
  head: () => ({
    meta: [
      { title: "Agreement — Wayne Client Portal" },
      { name: "description", content: "Review and sign your Wayne project agreement." },
      { property: "og:title", content: "Agreement — Wayne Client Portal" },
      { property: "og:description", content: "Review and sign your Wayne project agreement." },
    ],
  }),
  component: AgreementPage,
});

function AgreementPage() {
  const t = useT();
  const { data } = useWorkspace();
  const sign = useSignAgreement();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  if (!data) return null;
  const signed = Boolean(data.agreement?.signed_at);

  async function handleSign() {
    if (!data) return;
    try {
      await sign.mutateAsync({ projectId: data.project.id, name });
      setCelebrate(true);
      setTimeout(() => navigate({ to: "/dashboard" }), 2200);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("agreement.error.default"));
    }
  }

  return (
    <div className="space-y-6 pb-8">
      <Celebration
        show={celebrate}
        title={t("agreement.celebration.title")}
        subtitle={t("agreement.celebration.subtitle")}
      />

      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {t("agreement.step")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          {t("agreement.title")}
        </h1>
        <p className="mt-2 text-muted-foreground">{t("agreement.subtitle")}</p>
      </header>

      <GlassCard interactive={false} className="p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 text-primary">
            <FileSignature className="size-5" />
          </span>
          <div>
            <p className="font-medium">{data.project.name}</p>
            <p className="text-sm text-muted-foreground">
              {t("agreement.totalAmount", {
                amount: formatMoney(data.project.total_amount),
                client: data.clientName ?? t("agreement.defaultClient"),
              })}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>{t("agreement.terms.p1")}</p>
          <p>{t("agreement.terms.p2")}</p>
          <p>{t("agreement.terms.p3")}</p>
        </div>
      </GlassCard>

      {signed ? (
        <GlassCard interactive={false} className="flex items-center gap-3 p-6">
          <span className="flex size-9 items-center justify-center rounded-full border border-success/50 bg-success/15 text-success">
            <Check className="size-4" />
          </span>
          <div>
            <p className="font-medium">
              {t("agreement.signedBy", { name: data.agreement?.signed_name ?? "" })}
            </p>
            <p className="text-sm text-muted-foreground">{t("agreement.signedThanks")}</p>
          </div>
        </GlassCard>
      ) : (
        <GlassCard variant="strong" interactive={false} className="p-6 sm:p-8">
          <div className="space-y-2">
            <Label htmlFor="signature">{t("agreement.signature.label")}</Label>
            <Input
              id="signature"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("agreement.signature.placeholder")}
              className="font-display text-lg"
            />
          </div>
          <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
            <Checkbox
              checked={accepted}
              onCheckedChange={(value) => setAccepted(value === true)}
              className="mt-0.5"
            />
            {t("agreement.accept.label")}
          </label>
          <Button
            size="lg"
            className="mt-6 w-full"
            disabled={!accepted || name.trim().length < 3 || sign.isPending}
            onClick={handleSign}
          >
            {sign.isPending ? t("agreement.submitting") : t("agreement.submit")}
          </Button>
        </GlassCard>
      )}
    </div>
  );
}

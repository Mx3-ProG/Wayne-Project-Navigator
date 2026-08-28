import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, PartyPopper, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { GlassCard } from "@/components/glass/GlassCard";
import { Celebration } from "@/components/journey/Celebration";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitFeedback, useWorkspace } from "@/hooks/usePortal";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/_portal/delivery")({
  head: () => ({
    meta: [
      { title: "Delivery — Wayne Client Portal" },
      { name: "description", content: "Open your finished project and share your feedback." },
      { property: "og:title", content: "Delivery — Wayne Client Portal" },
      {
        property: "og:description",
        content: "Open your finished project and share your feedback.",
      },
    ],
  }),
  component: DeliveryPage,
});

function DeliveryPage() {
  const t = useT();
  const { data } = useWorkspace();
  const feedback = useSubmitFeedback();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [allow, setAllow] = useState(true);
  const [celebrate, setCelebrate] = useState(false);
  const [sent, setSent] = useState(false);

  if (!data) return null;
  const live = data.links.find((link) => link.type === "live") ?? data.links[0];

  async function send() {
    if (!data) return;
    try {
      await feedback.mutateAsync({
        projectId: data.project.id,
        userId: data.profile.id,
        rating,
        comment,
        allowTestimonial: allow,
      });
      setSent(true);
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 2400);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("delivery.feedback.error"));
    }
  }

  return (
    <div className="space-y-6 pb-8">
      <Celebration
        show={celebrate}
        title={t("delivery.celebration.title")}
        subtitle={t("delivery.celebration.subtitle")}
      />

      <header>
        <span className="flex size-11 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 text-primary">
          <PartyPopper className="size-5" />
        </span>
        <h1 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
          {t("delivery.heading")}
        </h1>
        <p className="mt-2 text-muted-foreground">{t("delivery.subheading")}</p>
      </header>

      {live && (
        <GlassCard interactive={false} className="p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t("delivery.product.label")}
          </p>
          <p className="mt-2 font-display text-xl font-semibold">{live.name}</p>
          <a
            href={live.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("delivery.product.open")} <ExternalLink className="size-4" />
          </a>
        </GlassCard>
      )}

      <GlassCard variant="strong" interactive={false} className="p-6 sm:p-8">
        <p className="font-medium">{t("delivery.feedback.question")}</p>
        <div className="mt-4 flex gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => setRating(value)}
              disabled={sent}
              aria-label={t("delivery.feedback.starLabel", { value })}
              className="transition-transform hover:scale-110"
            >
              <Star
                className={cn(
                  "size-7",
                  value <= rating ? "fill-primary text-primary" : "text-muted-foreground",
                )}
              />
            </button>
          ))}
        </div>
        <Textarea
          rows={4}
          className="mt-4"
          disabled={sent}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={t("delivery.feedback.placeholder")}
        />
        <label className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
          <Checkbox
            checked={allow}
            disabled={sent}
            onCheckedChange={(value) => setAllow(value === true)}
            className="mt-0.5"
          />
          {t("delivery.feedback.testimonial")}
        </label>
        <Button className="mt-5" onClick={send} disabled={sent || feedback.isPending}>
          {sent ? t("delivery.feedback.sent") : t("delivery.feedback.send")}
        </Button>
      </GlassCard>
    </div>
  );
}

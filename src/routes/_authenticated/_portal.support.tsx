import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { GlassCard } from "@/components/glass/GlassCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/_portal/support")({
  head: () => ({
    meta: [
      { title: "Support — Wayne Client Portal" },
      { name: "description", content: "Reach your Wayne project team and find quick answers." },
      { property: "og:title", content: "Support — Wayne Client Portal" },
      {
        property: "og:description",
        content: "Reach your Wayne project team and find quick answers.",
      },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  const t = useT();
  const faq = [
    { q: t("support.faq.q1"), a: t("support.faq.a1") },
    { q: t("support.faq.q2"), a: t("support.faq.a2") },
    { q: t("support.faq.q3"), a: t("support.faq.a3") },
    { q: t("support.faq.q4"), a: t("support.faq.a4") },
  ];

  return (
    <div className="space-y-6 pb-8">
      <header>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t("support.heading")}</h1>
        <p className="mt-2 text-muted-foreground">{t("support.subheading")}</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        <a href="mailto:hello@wayne-web.com">
          <GlassCard className="h-full p-5">
            <Mail className="size-5 text-primary" />
            <p className="mt-3 font-medium">{t("support.email.title")}</p>
            <p className="mt-1 text-sm text-muted-foreground">hello@wayne-web.com</p>
          </GlassCard>
        </a>
        <a href="https://wa.me/33600000000" target="_blank" rel="noreferrer">
          <GlassCard className="h-full p-5">
            <MessageCircle className="size-5 text-primary" />
            <p className="mt-3 font-medium">{t("support.message.title")}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("support.message.subtitle")}</p>
          </GlassCard>
        </a>
        <a href="https://cal.com" target="_blank" rel="noreferrer">
          <GlassCard className="h-full p-5">
            <Calendar className="size-5 text-primary" />
            <p className="mt-3 font-medium">{t("support.call.title")}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("support.call.subtitle")}</p>
          </GlassCard>
        </a>
      </div>

      <GlassCard interactive={false} className="p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {t("support.faq.label")}
        </p>
        <Accordion type="single" collapsible className="mt-3">
          {faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </GlassCard>
    </div>
  );
}

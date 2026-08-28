import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, FileSignature, LineChart, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { GlassCard } from "@/components/glass/GlassCard";
import { supabase } from "@/integrations/supabase/client";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wayne Client Portal — Your project, beautifully clear" },
      {
        name: "description",
        content:
          "The premium client space for Wayne-Web projects: sign, pay, brief, follow progress and receive your delivery in one calm place.",
      },
      { property: "og:title", content: "Wayne Client Portal — Your project, beautifully clear" },
      {
        property: "og:description",
        content:
          "Sign, pay, brief and follow your Wayne-Web project in one calm, premium client space.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const navigate = useNavigate();
  const t = useT();

  const FEATURES = [
    {
      icon: FileSignature,
      title: t("landing.features.sign.title"),
      body: t("landing.features.sign.body"),
    },
    {
      icon: CreditCard,
      title: t("landing.features.pay.title"),
      body: t("landing.features.pay.body"),
    },
    {
      icon: LineChart,
      title: t("landing.features.follow.title"),
      body: t("landing.features.follow.body"),
    },
    {
      icon: Sparkles,
      title: t("landing.features.grow.title"),
      body: t("landing.features.grow.body"),
    },
  ];

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/dashboard", replace: true });
    });
  }, [navigate]);

  return (
    <div className="min-h-screen px-5 py-10 sm:px-8">
      <header className="mx-auto flex max-w-5xl items-center justify-between">
        <span className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg border border-primary/40 bg-primary/15 font-display text-sm font-bold text-primary">
            W
          </span>
          <span className="font-display text-sm font-semibold">Wayne</span>
        </span>
        <Link
          to="/auth"
          className="rounded-xl border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary/60"
        >
          {t("landing.nav.signIn")}
        </Link>
      </header>

      <main className="mx-auto mt-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {t("landing.hero.eyebrow")}
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
            {t("landing.hero.title.line1")}
            <span className="block text-gradient">{t("landing.hero.title.line2")}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{t("landing.hero.subtitle")}</p>
          <Link
            to="/auth"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("landing.hero.cta")} <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
            >
              <GlassCard className="h-full p-5">
                <feature.icon className="size-5 text-primary" />
                <p className="mt-3 font-medium">{feature.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{feature.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

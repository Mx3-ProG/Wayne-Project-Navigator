import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Handshake, Rocket, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateProfile, useWorkspace } from "@/hooks/usePortal";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/onboarding")({
  head: () => ({
    meta: [
      { title: "Welcome — Wayne Client Portal" },
      { name: "description", content: "Set up your Wayne space in under two minutes." },
      { property: "og:title", content: "Welcome — Wayne Client Portal" },
      { property: "og:description", content: "Set up your Wayne space in under two minutes." },
    ],
  }),
  component: Onboarding,
});

function Onboarding() {
  const t = useT();
  const { data } = useWorkspace();
  const updateProfile = useUpdateProfile();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");

  const steps = [
    { icon: Handshake, title: t("onboarding.step1.title"), body: t("onboarding.step1.body") },
    { icon: ShieldCheck, title: t("onboarding.step2.title"), body: t("onboarding.step2.body") },
    { icon: Rocket, title: t("onboarding.step3.title"), body: t("onboarding.step3.body") },
  ] as const;

  const current = steps[step]!;

  async function finish() {
    if (!data) return;
    await updateProfile.mutateAsync({
      id: data.profile.id,
      values: { phone: phone || null, goal: goal || null, onboarded: true },
    });
    navigate({ to: "/dashboard", replace: true });
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-5 py-14">
      <div className="w-full max-w-xl">
        <div className="mb-7 flex items-center gap-2">
          {steps.map((_, index) => (
            <span
              key={index}
              className={`h-1 flex-1 rounded-full transition-colors ${
                index <= step ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard variant="strong" interactive={false} className="p-7 sm:p-9">
              <span className="flex size-11 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 text-primary">
                <current.icon className="size-5" />
              </span>
              <h1 className="mt-6 font-display text-3xl font-semibold">{current.title}</h1>
              <p className="mt-3 text-muted-foreground">{current.body}</p>

              {step === 2 && (
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("onboarding.phone")}</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t("onboarding.phonePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goal">{t("onboarding.goal")}</Label>
                    <Input
                      id="goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      placeholder={t("onboarding.goalPlaceholder")}
                    />
                  </div>
                </div>
              )}

              <div className="mt-8 flex items-center justify-between gap-3">
                {step > 0 ? (
                  <Button variant="ghost" onClick={() => setStep(step - 1)}>
                    {t("onboarding.back")}
                  </Button>
                ) : (
                  <span />
                )}
                <Button
                  size="lg"
                  onClick={() => (step === steps.length - 1 ? finish() : setStep(step + 1))}
                  disabled={updateProfile.isPending}
                >
                  {step === steps.length - 1 ? t("onboarding.enter") : t("onboarding.continue")}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

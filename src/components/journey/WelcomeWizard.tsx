import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Download, Loader2 } from "lucide-react";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSaveBusinessProfile, useSaveWelcomeChecklist } from "@/hooks/usePortal";
import {
  BUSINESS_SECTIONS,
  type BusinessProfileValues,
  type BusinessSection,
  WELCOME_CHECKS,
  WELCOME_STEPS,
  businessProfileComplete,
  firstIncompleteStep,
  missingBusinessFields,
  missingInSection,
  parseBusinessProfile,
  requiredProgress,
  sectionComplete,
} from "@/lib/business-profile";
import { useT } from "@/lib/i18n";

type Props = {
  projectId: string;
  raw: unknown;
  submittedAt: string | null;
  storedChecklist: unknown;
  guide: ReactNode;
  onChange?: (values: BusinessProfileValues) => void;
  onDownload: () => void;
  onComplete: () => void | Promise<void>;
  completing: boolean;
  /** The welcome phase is already behind us: the fiche stays editable, no gating. */
  passed: boolean;
};

function parseChecks(raw: unknown): Record<string, boolean> {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const source = raw as Record<string, unknown>;
  const checks: Record<string, boolean> = {};
  for (const key of WELCOME_CHECKS) checks[key] = source[key] === true;
  return checks;
}

export function WelcomeWizard({
  projectId,
  raw,
  submittedAt,
  storedChecklist,
  guide,
  onChange,
  onDownload,
  onComplete,
  completing,
  passed,
}: Props) {
  const t = useT();
  const saveProfile = useSaveBusinessProfile();
  const saveChecklist = useSaveWelcomeChecklist();
  const [values, setValues] = useState<BusinessProfileValues>(() => parseBusinessProfile(raw));
  const [checks, setChecks] = useState<Record<string, boolean>>(() => parseChecks(storedChecklist));
  const [step, setStep] = useState(() =>
    firstIncompleteStep(parseBusinessProfile(raw), parseChecks(storedChecklist)),
  );
  const [showErrors, setShowErrors] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const hydrated = useRef(false);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    const initial = parseBusinessProfile(raw);
    const initialChecks = parseChecks(storedChecklist);
    setValues(initial);
    setChecks(initialChecks);
    setStep(firstIncompleteStep(initial, initialChecks));
  }, [raw, storedChecklist]);

  useEffect(() => {
    onChange?.(values);
  }, [values, onChange]);

  const total = WELCOME_STEPS.length;
  const current = WELCOME_STEPS[Math.min(step, total - 1)]!;
  const progress = useMemo(() => requiredProgress(values), [values]);
  const complete = businessProfileComplete(values);
  const guideDone = WELCOME_CHECKS.every((key) => checks[key]);
  const percent = Math.round(((step + (passed ? 1 : 0)) / (total - 1)) * 100);

  const stepMissing =
    current.kind === "section" ? missingInSection(current.section, values) : ([] as string[]);
  const canGoNext = current.kind === "guide" ? guideDone : stepMissing.length === 0;

  async function persistProfile(next: BusinessProfileValues, submit = false) {
    try {
      await saveProfile.mutateAsync({ projectId, profile: next, submit });
      setSavedAt(Date.now());
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("welcome.business.error"));
      throw error;
    }
  }

  async function toggleCheck(key: string) {
    const next = { ...checks, [key]: !checks[key] };
    setChecks(next);
    try {
      await saveChecklist.mutateAsync({ projectId, checklist: next });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("welcome.error.default"));
    }
  }

  function set(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function goNext() {
    if (!canGoNext) {
      setShowErrors(true);
      toast.error(
        current.kind === "guide" ? t("welcome.step.guide.error") : t("welcome.step.error"),
      );
      return;
    }
    setShowErrors(false);
    if (current.kind === "section") {
      try {
        await persistProfile(values);
      } catch {
        return;
      }
    }
    setStep((value) => Math.min(value + 1, total - 1));
  }

  function goBack() {
    setShowErrors(false);
    setStep((value) => Math.max(value - 1, 0));
  }

  async function finish() {
    if (!complete || !guideDone) {
      setShowErrors(true);
      toast.error(t("welcome.business.incomplete"));
      return;
    }
    try {
      await persistProfile(values, true);
    } catch {
      return;
    }
    if (passed) {
      toast.success(t("welcome.business.saved"));
      return;
    }
    await onComplete();
  }

  return (
    <GlassCard variant="strong" interactive={false} className="p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t("welcome.progress.label", { current: String(step + 1), total: String(total) })}
          </p>
          <p className="mt-2 font-display text-lg font-semibold">
            {t(`welcome.step.${current.key}.title`)}
          </p>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            {t(`welcome.step.${current.key}.hint`)}
          </p>
        </div>
        {submittedAt ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Check className="size-3.5" />
            {t("welcome.business.validated")}
          </span>
        ) : (
          <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
            {t("welcome.progress.remaining", {
              done: String(progress.done),
              total: String(progress.total),
            })}
          </span>
        )}
      </div>

      <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary/60">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={false}
          animate={{ width: `${Math.max(percent, 4)}%` }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <nav className="mt-4 flex flex-wrap gap-2" aria-label={t("welcome.progress.nav")}>
        {WELCOME_STEPS.map((item, index) => {
          const done =
            item.kind === "guide"
              ? guideDone
              : item.kind === "section"
                ? sectionComplete(item.section, values)
                : complete;
          const active = index === step;
          const reachable = index <= step || done;
          return (
            <button
              key={item.key}
              type="button"
              disabled={!reachable}
              onClick={() => {
                setShowErrors(false);
                setStep(index);
              }}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                active
                  ? "border-primary/60 bg-primary/15 text-foreground"
                  : done
                    ? "border-primary/30 bg-primary/5 text-muted-foreground hover:text-foreground"
                    : "border-border bg-secondary/30 text-muted-foreground disabled:opacity-50"
              }`}
            >
              {index + 1}. {t(`welcome.step.${item.key}.short`)}
            </button>
          );
        })}
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6"
        >
          {current.kind === "guide" ? (
            <div className="space-y-6">
              {guide}
              <div className="space-y-2">
                <p className="font-medium">{t("welcome.checklist.title")}</p>
                <p className="text-sm text-muted-foreground">{t("welcome.checklist.subtitle")}</p>
                {WELCOME_CHECKS.map((key) => {
                  const active = Boolean(checks[key]);
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => toggleCheck(key)}
                      className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left text-sm transition-colors ${
                        active
                          ? "border-primary/50 bg-primary/10 text-foreground"
                          : "border-border bg-secondary/30 text-muted-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <span
                        className={`flex size-5 items-center justify-center rounded-md border ${
                          active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border"
                        }`}
                      >
                        {active && <Check className="size-3.5" />}
                      </span>
                      {t(`welcome.checklist.${key}`)}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : current.kind === "section" ? (
            <SectionFields
              section={current.section}
              values={values}
              missing={showErrors ? stepMissing : []}
              onSet={set}
              onBlur={() => void persistProfile(values).catch(() => undefined)}
            />
          ) : (
            <Recap
              values={values}
              onEdit={(index) => {
                setShowErrors(false);
                setStep(index);
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        {step > 0 && (
          <Button variant="ghost" onClick={goBack}>
            <ArrowLeft className="mr-2 size-4" />
            {t("welcome.nav.back")}
          </Button>
        )}
        {current.kind === "recap" ? (
          <Button size="lg" onClick={finish} disabled={completing || saveProfile.isPending}>
            {completing || saveProfile.isPending ? (
              <Loader2 className="mr-2 size-4 animate-spin" />
            ) : null}
            {passed ? t("welcome.business.update") : t("welcome.cta.continue")}
            <ArrowRight className="ml-2 size-4" />
          </Button>
        ) : (
          <Button size="lg" onClick={goNext} disabled={saveProfile.isPending}>
            {t("welcome.nav.next")}
            <ArrowRight className="ml-2 size-4" />
          </Button>
        )}
        <Button variant="ghost" onClick={onDownload}>
          <Download className="mr-2 size-4" />
          {t("welcome.nav.download")}
        </Button>
        <p className="text-xs text-muted-foreground">
          {saveProfile.isPending
            ? t("welcome.business.saving")
            : savedAt
              ? t("welcome.business.autosaved")
              : t("welcome.business.autosaveHint")}
        </p>
      </div>

      {current.kind === "recap" && !complete && (
        <p className="mt-3 text-sm text-muted-foreground">{t("welcome.business.gate")}</p>
      )}
    </GlassCard>
  );
}

function SectionFields({
  section,
  values,
  missing,
  onSet,
  onBlur,
}: {
  section: BusinessSection;
  values: BusinessProfileValues;
  missing: string[];
  onSet: (key: string, value: string) => void;
  onBlur: () => void;
}) {
  const t = useT();
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {section.fields.map((field) => {
        const invalid = missing.includes(field.key);
        return (
          <div key={field.key} className={`space-y-1.5 ${field.wide ? "sm:col-span-2" : ""}`}>
            <Label htmlFor={`bp-${field.key}`} className="text-sm">
              {t(`welcome.business.field.${field.key}.label`)}
              {field.required ? <span className="ml-1 text-primary">*</span> : null}
            </Label>
            {field.kind === "textarea" ? (
              <Textarea
                id={`bp-${field.key}`}
                rows={3}
                value={values[field.key] ?? ""}
                placeholder={t(`welcome.business.field.${field.key}.placeholder`)}
                onChange={(event) => onSet(field.key, event.target.value)}
                onBlur={onBlur}
                aria-invalid={invalid}
                className={invalid ? "border-destructive" : undefined}
              />
            ) : (
              <Input
                id={`bp-${field.key}`}
                type={field.kind === "date" ? "date" : "text"}
                value={values[field.key] ?? ""}
                placeholder={
                  field.kind === "date"
                    ? undefined
                    : t(`welcome.business.field.${field.key}.placeholder`)
                }
                onChange={(event) => onSet(field.key, event.target.value)}
                onBlur={onBlur}
                aria-invalid={invalid}
                className={invalid ? "border-destructive" : undefined}
              />
            )}
            {invalid && (
              <p className="text-xs text-destructive">{t("welcome.step.field.required")}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Recap({
  values,
  onEdit,
}: {
  values: BusinessProfileValues;
  onEdit: (stepIndex: number) => void;
}) {
  const t = useT();
  return (
    <div className="space-y-5">
      {BUSINESS_SECTIONS.map((section, index) => (
        <div key={section.key} className="rounded-2xl border border-border bg-secondary/20 p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {t(`welcome.business.section.${section.key}`)}
            </p>
            <Button variant="ghost" size="sm" onClick={() => onEdit(index + 1)}>
              {t("welcome.recap.edit")}
            </Button>
          </div>
          <dl className="mt-3 grid gap-3 sm:grid-cols-2">
            {section.fields.map((field) => {
              const value = (values[field.key] ?? "").trim();
              return (
                <div key={field.key} className={field.wide ? "sm:col-span-2" : ""}>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    {t(`welcome.business.field.${field.key}.label`)}
                  </dt>
                  <dd
                    className={`mt-0.5 whitespace-pre-line text-sm ${
                      value ? "" : "text-muted-foreground"
                    }`}
                  >
                    {value || t("welcome.recap.empty")}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      ))}
      <p className="text-sm text-muted-foreground">
        {missingBusinessFields(values).length === 0
          ? t("welcome.recap.ready")
          : t("welcome.recap.pending")}
      </p>
    </div>
  );
}

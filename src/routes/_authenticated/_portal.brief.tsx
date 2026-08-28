import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Download, History, Pencil, RotateCcw } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { AttachmentSummary, AttachmentUploader } from "@/components/brief/AttachmentUploader";
import { GlassCard } from "@/components/glass/GlassCard";
import { Celebration } from "@/components/journey/Celebration";
import { PrintSheet } from "@/components/print/PrintSheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useReopenBrief, useSaveBrief, useSubmitBrief, useWorkspace } from "@/hooks/usePortal";
import {
  CATEGORIES_KEY,
  HARDWARE_CATEGORIES,
  HARDWARE_GROUPS,
  HISTORY_KEY,
  KIND_KEY,
  PROJECT_KINDS,
  PROJECT_TYPES,
  SOFTWARE_CATEGORIES,
  TYPE_KEY,
  UNSURE_KEY,
  briefFields,
  briefSteps,
  briefStepsV2,
  isProjectKind,
  isProjectType,
  splitBriefAnswers,
  type Answers,
  type Attachment,
  type BriefField,
  type BriefHistoryEntry,
  type ProjectKind,
  type ProjectType,
} from "@/lib/brief-flow";
import { useI18n } from "@/lib/i18n";
import { formatFullDate } from "@/lib/journey";

export const Route = createFileRoute("/_authenticated/_portal/brief")({
  head: () => ({
    meta: [
      { title: "Project brief — Wayne Client Portal" },
      {
        name: "description",
        content: "Answer a few guided questions so Wayne can build exactly what you need.",
      },
      { property: "og:title", content: "Project brief — Wayne Client Portal" },
      {
        property: "og:description",
        content: "Answer a few guided questions so Wayne can build exactly what you need.",
      },
    ],
  }),
  component: BriefPage,
});

function BriefPage() {
  const { t, locale } = useI18n();

  const { data } = useWorkspace();
  const save = useSaveBrief();
  const submit = useSubmitBrief();
  const reopen = useReopenBrief();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [history, setHistory] = useState<BriefHistoryEntry[]>([]);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    if (data?.brief?.answers && typeof data.brief.answers === "object") {
      const split = splitBriefAnswers(data.brief.answers);
      setAnswers(split.answers);
      setHistory(split.history);
      setStep(data.brief.current_step ?? 0);
    }
  }, [data?.brief]);

  if (!data) return null;

  // -- Classification: new kind+categories model, with a legacy fallback so
  // a brief already mid-flow before this change keeps its original steps.
  const legacyTypeRaw = answers[TYPE_KEY];
  const legacyType: ProjectType | null = isProjectType(legacyTypeRaw) ? legacyTypeRaw : null;
  const unsure = answers[UNSURE_KEY] === true;
  const kindRaw = answers[KIND_KEY];
  const effectiveKind: ProjectKind | null = isProjectKind(kindRaw) ? kindRaw : null;
  const legacyMode = !effectiveKind && !unsure && legacyType !== null;
  const categories: string[] = Array.isArray(answers[CATEGORIES_KEY])
    ? (answers[CATEGORIES_KEY] as string[])
    : [];

  const steps = legacyMode
    ? briefSteps(legacyType)
    : briefStepsV2(unsure ? "unsure" : effectiveKind, categories);
  const current = Math.min(step, steps.length - 1);
  const section = steps[current]!;
  const isRecap = section.kind === "recap";
  const submitted = Boolean(data.brief?.submitted_at);
  const depositPaid = data.invoices.some(
    (invoice) => invoice.i18n_key === "deposit" && invoice.status === "paid",
  );

  const topLabel = legacyMode
    ? legacyType
      ? t(`brief.type.${legacyType}.label`)
      : t("brief.empty")
    : unsure
      ? t("brief.kind.unsure.label")
      : effectiveKind
        ? t(`brief.kind.${effectiveKind}.label`)
        : t("brief.empty");

  function categoryLabel(cat: string): string {
    return isProjectType(cat) ? t(`brief.type.${cat}.label`) : t(`brief.category.${cat}.label`);
  }

  function categoriesFor(sectionKey: string): string[] {
    const relevant: readonly string[] =
      sectionKey === "software_categories" ? SOFTWARE_CATEGORIES : HARDWARE_CATEGORIES;
    return categories.filter((c) => relevant.includes(c));
  }

  function payload(nextAnswers: Answers, nextHistory: BriefHistoryEntry[]) {
    return { ...nextAnswers, [HISTORY_KEY]: nextHistory } as Record<string, unknown>;
  }

  function setValue(key: string, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function setAttachments(key: string, value: Attachment[]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function toggleCategory(cat: string) {
    setAnswers((prev) => {
      const currentCats = Array.isArray(prev[CATEGORIES_KEY])
        ? (prev[CATEGORIES_KEY] as string[])
        : [];
      const nextList = currentCats.includes(cat)
        ? currentCats.filter((c) => c !== cat)
        : [...currentCats, cat];
      return { ...prev, [CATEGORIES_KEY]: nextList };
    });
  }

  async function chooseType(type: ProjectType) {
    const next: Answers = { ...answers, [TYPE_KEY]: type };
    setAnswers(next);
    try {
      await save.mutateAsync({
        projectId: data!.project.id,
        answers: payload(next, history) as never,
        step: 1,
        projectType: "software",
        categories: [type],
        unsure: false,
      });
      setStep(1);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("brief.error.default"));
    }
  }

  async function chooseKind(kind: ProjectKind) {
    const next: Answers = { ...answers, [KIND_KEY]: kind, [UNSURE_KEY]: false };
    setAnswers(next);
    try {
      await save.mutateAsync({
        projectId: data!.project.id,
        answers: payload(next, history) as never,
        step: 1,
        projectType: kind,
        categories: Array.isArray(next[CATEGORIES_KEY]) ? (next[CATEGORIES_KEY] as string[]) : [],
        unsure: false,
      });
      setStep(1);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("brief.error.default"));
    }
  }

  async function chooseUnsure() {
    const next: Answers = { ...answers, [UNSURE_KEY]: true };
    setAnswers(next);
    try {
      await save.mutateAsync({
        projectId: data!.project.id,
        answers: payload(next, history) as never,
        step: 1,
        projectType: null,
        categories: [],
        unsure: true,
      });
      setStep(1);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("brief.error.default"));
    }
  }

  async function next() {
    if (legacyMode) {
      if (!legacyType) {
        toast.error(t("brief.kind.required"));
        return;
      }
    } else if (!unsure && !effectiveKind) {
      toast.error(t("brief.kind.required"));
      return;
    } else if (section.kind === "categories") {
      if (categoriesFor(section.key).length === 0) {
        toast.error(t("brief.category.required"));
        return;
      }
    }

    const topType = legacyMode ? "software" : unsure ? null : effectiveKind;
    const topCategories = legacyMode ? (legacyType ? [legacyType] : []) : unsure ? [] : categories;

    try {
      if (isRecap) {
        const nextHistory: BriefHistoryEntry[] = [
          ...history,
          {
            at: new Date().toISOString(),
            event: "submitted",
            type: legacyMode ? legacyType : unsure ? "unsure" : effectiveKind,
            categories: topCategories,
            answers: { ...answers },
          },
        ];
        await submit.mutateAsync({
          projectId: data!.project.id,
          answers: payload(answers, nextHistory) as never,
          projectType: topType,
          categories: topCategories,
          unsure,
        });
        setHistory(nextHistory);
        setCelebrate(true);
        setTimeout(() => navigate({ to: "/dashboard" }), 2200);
      } else {
        await save.mutateAsync({
          projectId: data!.project.id,
          answers: payload(answers, history) as never,
          step: current + 1,
          projectType: topType,
          categories: topCategories,
          unsure,
        });
        setStep(current + 1);
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("brief.error.default"));
    }
  }

  async function handleReopen() {
    try {
      await reopen.mutateAsync(data!.project.id);
      const nextHistory: BriefHistoryEntry[] = [
        ...history,
        {
          at: new Date().toISOString(),
          event: "reopened",
          type: legacyMode ? legacyType : unsure ? "unsure" : effectiveKind,
          categories,
          answers: { ...answers },
        },
      ];
      await save.mutateAsync({
        projectId: data!.project.id,
        answers: payload(answers, nextHistory) as never,
        step: 0,
      });
      setHistory(nextHistory);
      setStep(0);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("brief.error.reopen"));
    }
  }

  const recapSections = steps.filter((s) => s.kind === "fields" || s.kind === "categories");

  function displayValue(field: BriefField): ReactNode {
    const value = answers[field.key];
    if (field.kind === "file") {
      return <AttachmentSummary value={Array.isArray(value) ? (value as Attachment[]) : []} />;
    }
    if (field.kind === "select" && typeof value === "string" && value) {
      return <p className="mt-1 text-sm">{t(`brief.field.${field.key}.option.${value}`)}</p>;
    }
    return (
      <p className="mt-1 whitespace-pre-line text-sm">
        {typeof value === "string" && value ? value : t("brief.empty")}
      </p>
    );
  }

  function answerText(field: BriefField): string {
    const value = answers[field.key];
    if (field.kind === "file") {
      return Array.isArray(value) && value.length
        ? (value as Attachment[]).map((a) => a.name).join(", ")
        : t("brief.empty");
    }
    if (field.kind === "select" && typeof value === "string" && value) {
      return t(`brief.field.${field.key}.option.${value}`);
    }
    return typeof value === "string" && value ? value : t("brief.empty");
  }

  const printSections = [
    {
      heading: t("brief.pdf.section.type"),
      rows: [{ label: t("brief.recap.projectType"), value: topLabel }],
    },
    ...recapSections.map((s) => ({
      heading: t(`brief.section.${s.key}.title`),
      rows:
        s.kind === "categories"
          ? [
              {
                label: t(`brief.section.${s.key}.title`),
                value: categoriesFor(s.key).map(categoryLabel).join(", ") || t("brief.empty"),
              },
            ]
          : s.fields.map((field) => ({
              label: t(`brief.field.${field.key}.label`),
              value: answerText(field),
            })),
    })),
  ];

  const briefSheet = (
    <PrintSheet
      title={t("brief.pdf.title")}
      subtitle={data.project.name}
      meta={[
        { label: t("brief.pdf.client"), value: data.clientName ?? data.profile.full_name ?? "—" },
        { label: t("brief.pdf.project"), value: data.project.name },
        {
          label: t("brief.pdf.status"),
          value: submitted ? t("brief.pdf.status.submitted") : t("brief.pdf.status.draft"),
        },
      ]}
      sections={printSections}
      footer={t("brief.pdf.printedOn", { date: formatFullDate(new Date().toISOString(), locale) })}
    />
  );

  if (submitted && !celebrate) {
    return (
      <div className="space-y-6 pb-8">
        {briefSheet}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t("brief.title")}</h1>
          <Button variant="secondary" onClick={() => window.print()}>
            <Download className="mr-2 size-4" />
            {t("brief.pdf.download")}
          </Button>
        </div>
        <GlassCard interactive={false} className="p-6 sm:p-8">
          <p className="font-medium">{t("brief.received.title")}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t("brief.received.body")}</p>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {t("brief.recap.projectType")}
              </p>
              <p className="mt-1 text-sm">{topLabel}</p>
            </div>
            {recapSections.map((s) =>
              s.kind === "categories" ? (
                <div key={s.key}>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t(`brief.section.${s.key}.title`)}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {categoriesFor(s.key).length === 0 ? (
                      <p className="text-sm text-muted-foreground">{t("brief.empty")}</p>
                    ) : (
                      categoriesFor(s.key).map((cat) => (
                        <span
                          key={cat}
                          className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs"
                        >
                          {categoryLabel(cat)}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                s.fields.map((field) => (
                  <div key={field.key}>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t(`brief.field.${field.key}.label`)}
                    </p>
                    {displayValue(field)}
                  </div>
                ))
              ),
            )}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-secondary/30 p-5">
            {depositPaid ? (
              <>
                <p className="font-medium">{t("brief.locked.title")}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t("brief.locked.body")}</p>
              </>
            ) : (
              <>
                <p className="text-sm text-muted-foreground">{t("brief.received.editable")}</p>
                <Button className="mt-4" onClick={handleReopen} disabled={reopen.isPending}>
                  <Pencil className="mr-2 size-4" />
                  {t("brief.received.edit")}
                </Button>
              </>
            )}
          </div>
        </GlassCard>

        <BriefHistory history={history} />
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-8">
      {isRecap && briefSheet}

      <Celebration
        show={celebrate}
        title={t("brief.celebration.title")}
        subtitle={t("brief.celebration.subtitle")}
      />

      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {t("brief.sectionProgress", { current: current + 1, total: steps.length })}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          {t(`brief.section.${section.key}.title`)}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {section.kind === "type" || section.kind === "kind"
            ? t("brief.kind.subtitle")
            : section.kind === "categories"
              ? t("brief.category.subtitle")
              : isRecap
                ? t("brief.recap.subtitle")
                : t("brief.subtitle")}
        </p>
      </header>

      <div className="flex items-center gap-2">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`h-1 flex-1 rounded-full transition-colors ${
              index <= current ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={section.key}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {section.kind === "type" ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {PROJECT_TYPES.map((type) => {
                const active = legacyType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => chooseType(type)}
                    className="text-left"
                  >
                    <GlassCard
                      variant={active ? "strong" : "default"}
                      className={`h-full p-5 ${active ? "ring-1 ring-primary/60" : ""}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-medium">{t(`brief.type.${type}.label`)}</p>
                        {active && <Check className="size-4 shrink-0 text-primary" />}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {t(`brief.type.${type}.desc`)}
                      </p>
                    </GlassCard>
                  </button>
                );
              })}
            </div>
          ) : section.kind === "kind" ? (
            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-3">
                {PROJECT_KINDS.map((kind) => {
                  const active = effectiveKind === kind;
                  return (
                    <button
                      key={kind}
                      type="button"
                      onClick={() => chooseKind(kind)}
                      className="text-left"
                    >
                      <GlassCard
                        variant={active ? "strong" : "default"}
                        className={`h-full p-5 ${active ? "ring-1 ring-primary/60" : ""}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-medium">{t(`brief.kind.${kind}.label`)}</p>
                          {active && <Check className="size-4 shrink-0 text-primary" />}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {t(`brief.kind.${kind}.desc`)}
                        </p>
                      </GlassCard>
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => chooseUnsure()}
                className="block w-full text-left"
              >
                <GlassCard
                  variant={unsure ? "strong" : "dim"}
                  className={`p-4 ${unsure ? "ring-1 ring-primary/60" : ""}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium">{t("brief.kind.unsure.label")}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {t("brief.kind.unsure.desc")}
                      </p>
                    </div>
                    {unsure && <Check className="size-4 shrink-0 text-primary" />}
                  </div>
                </GlassCard>
              </button>
            </div>
          ) : section.kind === "categories" ? (
            <div className="space-y-5">
              {section.key === "software_categories" ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {SOFTWARE_CATEGORIES.map((cat) => {
                    const active = categories.includes(cat);
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => toggleCategory(cat)}
                        className="text-left"
                      >
                        <GlassCard
                          variant={active ? "strong" : "default"}
                          className={`h-full p-4 ${active ? "ring-1 ring-primary/60" : ""}`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-medium">{categoryLabel(cat)}</p>
                            {active && <Check className="size-4 shrink-0 text-primary" />}
                          </div>
                        </GlassCard>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-5">
                  {HARDWARE_GROUPS.map((group) => (
                    <div key={group.key}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {t(`brief.hwgroup.${group.key}.label`)}
                      </p>
                      <div className="mt-2 grid gap-3 sm:grid-cols-2">
                        {group.items.map((item) => {
                          const active = categories.includes(item);
                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => toggleCategory(item)}
                              className="text-left"
                            >
                              <GlassCard
                                variant={active ? "strong" : "default"}
                                className={`h-full p-4 ${active ? "ring-1 ring-primary/60" : ""}`}
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <p className="text-sm font-medium">{categoryLabel(item)}</p>
                                  {active && <Check className="size-4 shrink-0 text-primary" />}
                                </div>
                              </GlassCard>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : isRecap ? (
            <div className="space-y-3">
              <GlassCard interactive={false} className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t("brief.recap.projectType")}
                    </p>
                    <p className="mt-1 text-sm">{topLabel}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setStep(0)}>
                    <Pencil className="mr-2 size-3.5" />
                    {t("brief.recap.edit")}
                  </Button>
                </div>
              </GlassCard>

              {recapSections.map((s) => (
                <GlassCard key={s.key} interactive={false} className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium">{t(`brief.section.${s.key}.title`)}</p>
                    <Button variant="ghost" size="sm" onClick={() => setStep(steps.indexOf(s))}>
                      <Pencil className="mr-2 size-3.5" />
                      {t("brief.recap.edit")}
                    </Button>
                  </div>
                  <div className="mt-3 space-y-3">
                    {s.kind === "categories" ? (
                      <div className="flex flex-wrap gap-2">
                        {categoriesFor(s.key).length === 0 ? (
                          <p className="text-sm text-muted-foreground">{t("brief.empty")}</p>
                        ) : (
                          categoriesFor(s.key).map((cat) => (
                            <span
                              key={cat}
                              className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs"
                            >
                              {categoryLabel(cat)}
                            </span>
                          ))
                        )}
                      </div>
                    ) : (
                      s.fields.map((field) => (
                        <div key={field.key}>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground">
                            {t(`brief.field.${field.key}.label`)}
                          </p>
                          {displayValue(field)}
                        </div>
                      ))
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          ) : (
            <GlassCard variant="strong" interactive={false} className="space-y-5 p-6 sm:p-8">
              {section.fields.map((field) => {
                const kind = field.kind ?? (field.long ? "textarea" : "text");
                return (
                  <div key={field.key} className="space-y-2">
                    <Label htmlFor={field.key}>{t(`brief.field.${field.key}.label`)}</Label>
                    {kind === "select" ? (
                      <Select
                        value={
                          typeof answers[field.key] === "string"
                            ? (answers[field.key] as string)
                            : ""
                        }
                        onValueChange={(value) => setValue(field.key, value)}
                      >
                        <SelectTrigger id={field.key}>
                          <SelectValue placeholder={t(`brief.field.${field.key}.hint`)} />
                        </SelectTrigger>
                        <SelectContent>
                          {(field.options ?? []).map((option) => (
                            <SelectItem key={option} value={option}>
                              {t(`brief.field.${field.key}.option.${option}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : kind === "file" ? (
                      <AttachmentUploader
                        projectId={data!.project.id}
                        value={
                          Array.isArray(answers[field.key])
                            ? (answers[field.key] as Attachment[])
                            : []
                        }
                        onChange={(value) => setAttachments(field.key, value)}
                      />
                    ) : kind === "textarea" ? (
                      <Textarea
                        id={field.key}
                        rows={4}
                        value={
                          typeof answers[field.key] === "string"
                            ? (answers[field.key] as string)
                            : ""
                        }
                        onChange={(e) => setValue(field.key, e.target.value)}
                        placeholder={t(`brief.field.${field.key}.hint`)}
                      />
                    ) : (
                      <Input
                        id={field.key}
                        value={
                          typeof answers[field.key] === "string"
                            ? (answers[field.key] as string)
                            : ""
                        }
                        onChange={(e) => setValue(field.key, e.target.value)}
                        placeholder={t(`brief.field.${field.key}.hint`)}
                      />
                    )}
                  </div>
                );
              })}
            </GlassCard>
          )}
        </motion.div>
      </AnimatePresence>

      {section.kind !== "type" && section.kind !== "kind" && (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button variant="ghost" disabled={current === 0} onClick={() => setStep(current - 1)}>
            {t("brief.back")}
          </Button>
          <div className="flex flex-wrap items-center gap-3">
            {isRecap && (
              <Button variant="secondary" onClick={() => window.print()}>
                <Download className="mr-2 size-4" />
                {t("brief.pdf.download")}
              </Button>
            )}
            <Button size="lg" onClick={next} disabled={save.isPending || submit.isPending}>
              {isRecap ? t("brief.submit") : t("brief.continue")}
            </Button>
          </div>
        </div>
      )}

      {history.length > 0 && <BriefHistory history={history} />}
    </div>
  );
}

function BriefHistory({ history }: { history: BriefHistoryEntry[] }) {
  const { t, locale } = useI18n();
  const [open, setOpen] = useState<string | null>(null);
  const entries = [...history].reverse();

  function entryTopLabel(entry: BriefHistoryEntry): string {
    if (entry.type === "unsure") return t("brief.kind.unsure.label");
    if (isProjectKind(entry.type)) return t(`brief.kind.${entry.type}.label`);
    if (isProjectType(entry.type)) return t(`brief.type.${entry.type}.label`);
    return t("brief.empty");
  }

  function entryFieldValue(entry: BriefHistoryEntry, field: BriefField): string {
    const value = entry.answers[field.key];
    if (field.kind === "file") {
      return Array.isArray(value) && value.length
        ? (value as Attachment[]).map((a) => a.name).join(", ")
        : t("brief.empty");
    }
    if (field.kind === "select" && typeof value === "string" && value) {
      return t(`brief.field.${field.key}.option.${value}`);
    }
    return typeof value === "string" && value ? value : t("brief.empty");
  }

  return (
    <GlassCard interactive={false} className="p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <History className="size-4 text-primary" />
        <p className="font-medium">{t("brief.history.title")}</p>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{t("brief.history.subtitle")}</p>

      {entries.length === 0 ? (
        <p className="mt-5 text-sm text-muted-foreground">{t("brief.history.empty")}</p>
      ) : (
        <ol className="mt-5 space-y-3">
          {entries.map((entry, index) => {
            const id = `${entry.at}-${index}`;
            const isOpen = open === id;
            const version = entries.length - index;
            const kindForFields =
              entry.type === "unsure" ? "unsure" : isProjectKind(entry.type) ? entry.type : null;
            const fields = isProjectType(entry.type)
              ? briefFields(entry.type)
              : briefStepsV2(kindForFields, entry.categories ?? []).flatMap((s) => s.fields);
            return (
              <li key={id} className="rounded-xl border border-border/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium">
                      {entry.event === "reopened"
                        ? t("brief.history.event.reopened")
                        : t("brief.history.event.submitted")}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {t("brief.history.version", { n: version })} ·{" "}
                      {formatFullDate(entry.at, locale)}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setOpen(isOpen ? null : id)}>
                    {entry.event === "reopened" ? (
                      <RotateCcw className="mr-2 size-3.5" />
                    ) : (
                      <Check className="mr-2 size-3.5" />
                    )}
                    {isOpen ? t("brief.history.hide") : t("brief.history.show")}
                  </Button>
                </div>

                {isOpen && (
                  <div className="mt-4 space-y-3 border-t border-border/60 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {t("brief.recap.projectType")}
                      </p>
                      <p className="mt-1 text-sm">{entryTopLabel(entry)}</p>
                    </div>
                    {fields.map((field) => (
                      <div key={field.key}>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {t(`brief.field.${field.key}.label`)}
                        </p>
                        <p className="mt-1 whitespace-pre-line text-sm">
                          {entryFieldValue(entry, field)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      )}
    </GlassCard>
  );
}

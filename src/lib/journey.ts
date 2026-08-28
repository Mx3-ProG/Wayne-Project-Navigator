import type { Database } from "@/integrations/supabase/types";
import { parseBusinessProfile, requiredProgress } from "@/lib/business-profile";
import type { Locale, TranslateFn } from "@/lib/i18n";

export type Project = Database["public"]["Tables"]["projects"]["Row"];
export type Milestone = Database["public"]["Tables"]["milestones"]["Row"];
export type Invoice = Database["public"]["Tables"]["invoices"]["Row"];
export type Brief = Database["public"]["Tables"]["briefs"]["Row"];
export type Agreement = Database["public"]["Tables"]["agreements"]["Row"];
export type Document = Database["public"]["Tables"]["documents"]["Row"];
export type ProjectLink = Database["public"]["Tables"]["project_links"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Phase = Database["public"]["Enums"]["project_phase"];

export const PHASE_ORDER: Phase[] = [
  "agreement",
  "welcome",
  "brief",
  "deposit",
  "launch",
  "production",
  "review",
  "delivery",
  "live",
];


export const PHASE_LABEL_KEY: Record<Phase, string> = {
  agreement: "journey.phase.agreement",
  welcome: "journey.phase.welcome",
  deposit: "journey.phase.deposit",
  brief: "journey.phase.brief",
  launch: "journey.phase.launch",
  production: "journey.phase.production",
  review: "journey.phase.review",
  delivery: "journey.phase.delivery",
  live: "journey.phase.live",
};

/** @deprecated Use `phaseLabel(phase, t)` instead. Kept only for reference of old English strings. */
export const PHASE_LABEL: Record<Phase, string> = {
  agreement: "Agreement",
  welcome: "Welcome",
  deposit: "Deposit",
  brief: "Project Brief",
  launch: "Project Launch",
  production: "Production",
  review: "Review",
  delivery: "Delivery",
  live: "Live",
};

export function phaseLabel(phase: Phase, t: TranslateFn): string {
  return t(PHASE_LABEL_KEY[phase]);
}

export function phaseIndex(phase: Phase) {
  return Math.max(0, PHASE_ORDER.indexOf(phase));
}

export function progressFor(phase: Phase) {
  const pct = Math.round((phaseIndex(phase) / (PHASE_ORDER.length - 1)) * 100);
  return phase === "agreement" ? 5 : pct;
}

export type NextAction = {
  phase: Phase;
  phaseLabel: string;
  progress: number;
  owner: "client" | "wayne";
  title: string;
  description: string;
  eta?: string;
  ctaLabel: string;
  ctaTo: string;
  greeting: string;
};

/**
 * Single source of truth: what should happen next on this project.
 * Used by the dashboard, the shell and the internal Wayne view.
 */
export function computeNextAction(project: Project, t: TranslateFn): NextAction {
  const base = {
    phase: project.phase,
    phaseLabel: phaseLabel(project.phase, t),
    progress: project.progress ?? progressFor(project.phase),
  };

  switch (project.phase) {
    case "agreement":
      return {
        ...base,
        owner: "client",
        greeting: t("journey.action.agreement.greeting"),
        title: t("journey.action.agreement.title"),
        description: t("journey.action.agreement.description"),
        eta: t("journey.action.agreement.eta"),
        ctaLabel: t("journey.action.agreement.cta"),
        ctaTo: "/agreement",
      };
    case "welcome": {
      const fiche = requiredProgress(parseBusinessProfile(project.business_profile));
      return {
        ...base,
        owner: "client",
        greeting: t("journey.action.welcome.greeting"),
        title: t("journey.action.welcome.title"),
        description: `${t("journey.action.welcome.description")} · ${t("welcome.progress.hint", {
          done: String(fiche.done),
          total: String(fiche.total),
        })}`,
        eta: t("journey.action.welcome.eta"),
        ctaLabel: t("journey.action.welcome.cta"),
        ctaTo: "/welcome",
      };
    }
    case "deposit":
      return {
        ...base,
        owner: "client",
        greeting: t("journey.action.deposit.greeting"),
        title: t("journey.action.deposit.title"),
        description: t("journey.action.deposit.description"),
        eta: t("journey.action.deposit.eta"),
        ctaLabel: t("journey.action.deposit.cta"),
        ctaTo: "/billing",
      };
    case "brief":
      return {
        ...base,
        owner: "client",
        greeting: t("journey.action.brief.greeting"),
        title: t("journey.action.brief.title"),
        description: t("journey.action.brief.description"),
        eta: t("journey.action.brief.eta"),
        ctaLabel: t("journey.action.brief.cta"),
        ctaTo: "/brief",
      };
    case "launch":
      return {
        ...base,
        owner: "wayne",
        greeting: t("journey.action.launch.greeting"),
        title: t("journey.action.launch.title"),
        description: t("journey.action.launch.description"),
        ctaLabel: t("journey.action.launch.cta"),
        ctaTo: "/project",
      };
    case "production":
      return {
        ...base,
        owner: "wayne",
        greeting: t("journey.action.production.greeting"),
        title: t("journey.action.production.title"),
        description: t("journey.action.production.description"),
        ctaLabel: t("journey.action.production.cta"),
        ctaTo: "/project",
      };
    case "review":
      return {
        ...base,
        owner: "client",
        greeting: t("journey.action.review.greeting"),
        title: t("journey.action.review.title"),
        description: t("journey.action.review.description"),
        eta: t("journey.action.review.eta"),
        ctaLabel: t("journey.action.review.cta"),
        ctaTo: "/project",
      };
    case "delivery":
      return {
        ...base,
        owner: "client",
        greeting: t("journey.action.delivery.greeting"),
        title: t("journey.action.delivery.title"),
        description: t("journey.action.delivery.description"),
        ctaLabel: t("journey.action.delivery.cta"),
        ctaTo: "/delivery",
      };
    case "live":
    default:
      return {
        ...base,
        progress: 100,
        owner: "wayne",
        greeting: t("journey.action.live.greeting"),
        title: t("journey.action.live.title"),
        description: t("journey.action.live.description"),
        ctaLabel: t("journey.action.live.cta"),
        ctaTo: "/delivery",
      };
  }
}

export function milestoneStatus(milestone: Milestone, project: Project) {
  const order = PHASE_ORDER.indexOf(milestone.key as Phase);
  const current = phaseIndex(project.phase);
  if (order === -1) return milestone.status;
  if (order < current) return "done" as const;
  if (order === current) return "active" as const;
  return "upcoming" as const;
}

/** Journey order is always driven by PHASE_ORDER, never by stale DB positions. */
export function orderedMilestones(milestones: Milestone[]): Milestone[] {
  const rank = (m: Milestone) => {
    const index = PHASE_ORDER.indexOf(m.key as Phase);
    return index === -1 ? PHASE_ORDER.length + m.position : index;
  };
  return [...milestones].sort((a, b) => rank(a) - rank(b));
}

/** Where a client should go to act on (or follow) a given phase. */
export const PHASE_ROUTE: Record<Phase, string> = {
  agreement: "/agreement",
  welcome: "/welcome",
  brief: "/brief",
  deposit: "/billing",
  launch: "/project",
  production: "/project",
  review: "/project",
  delivery: "/delivery",
  live: "/delivery",
};

export function phaseRoute(phase: string): string {
  return PHASE_ROUTE[phase as Phase] ?? "/dashboard";
}




const DOC_KEYS = ["agreement", "welcome", "brief", "invoice_deposit", "deliverable"] as const;
const DOC_TYPES = ["agreement", "welcome", "brief", "invoice", "deliverable"] as const;
const INVOICE_KEYS = ["deposit", "balance"] as const;

/** Documents, invoices and milestones store a stable i18n key; a custom name always wins. */
export function documentLabel(doc: Document, t: TranslateFn): string {
  if (doc.name_override) return doc.name_override;
  const key = doc.i18n_key ?? "";
  if ((DOC_KEYS as readonly string[]).includes(key)) return t(`documents.name.${key}`);
  return doc.name;
}

export function documentTypeLabel(doc: Document, t: TranslateFn): string {
  return (DOC_TYPES as readonly string[]).includes(doc.type)
    ? t(`documents.type.${doc.type}`)
    : doc.type;
}

export function invoiceLabel(invoice: Invoice, t: TranslateFn): string {
  if (invoice.label_override) return invoice.label_override;
  const key = invoice.i18n_key ?? "";
  if ((INVOICE_KEYS as readonly string[]).includes(key)) return t(`billing.invoice.${key}`);
  return invoice.label;
}

export function milestoneTitle(milestone: Milestone, t: TranslateFn): string {
  if (milestone.title_override) return milestone.title_override;
  const key = milestone.key as Phase;
  return PHASE_LABEL_KEY[key] ? t(PHASE_LABEL_KEY[key]) : milestone.title;
}


const LOCALE_TAG: Record<Locale, string> = {
  en: "en-GB",
  fr: "fr-FR",
  de: "de-DE",
  es: "es-ES",
  ru: "ru-RU",
};

export function formatMoney(amount: number | string | null, locale: Locale = "en") {
  const value = typeof amount === "string" ? Number(amount) : (amount ?? 0);
  return new Intl.NumberFormat(LOCALE_TAG[locale] ?? "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(date: string | null, locale: Locale = "en") {
  if (!date) return "—";
  return new Intl.DateTimeFormat(LOCALE_TAG[locale] ?? "en-GB", { day: "numeric", month: "long" }).format(
    new Date(date),
  );
}

export function formatFullDate(date: string | null, locale: Locale = "en") {
  if (!date) return "—";
  return new Intl.DateTimeFormat(LOCALE_TAG[locale] ?? "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

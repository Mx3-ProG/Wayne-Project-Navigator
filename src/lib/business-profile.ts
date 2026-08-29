/** Declarative definition of the welcome "business fiche" the client fills in. */
export type BusinessField = {
  key: string;
  kind: "text" | "textarea" | "date";
  required?: boolean;
  wide?: boolean;
};

export type BusinessSection = {
  key: string;
  fields: BusinessField[];
};

export const BUSINESS_SECTIONS: BusinessSection[] = [
  {
    key: "activity",
    fields: [
      { key: "products", kind: "textarea", required: true, wide: true },
      { key: "sector", kind: "text", required: true },
      { key: "siret", kind: "text" },
      { key: "since", kind: "date" },
      { key: "needs", kind: "textarea", required: true, wide: true },
    ],
  },
  {
    key: "contact",
    fields: [
      { key: "phone", kind: "text", required: true },
      { key: "whatsapp", kind: "text" },
      { key: "email", kind: "text", required: true },
      { key: "address", kind: "text", wide: true },
    ],
  },
  {
    key: "presence",
    fields: [
      { key: "facebook", kind: "text" },
      { key: "instagram", kind: "text" },
      { key: "otherSocial", kind: "text", wide: true },
    ],
  },
  {
    key: "context",
    fields: [
      { key: "providers", kind: "textarea", required: true, wide: true },
      { key: "budget", kind: "text", required: true },
    ],
  },
];

export const BUSINESS_FIELDS = BUSINESS_SECTIONS.flatMap((section) => section.fields);

export type BusinessProfileValues = Record<string, string>;

/** Ordered steps of the welcome funnel: guide, one step per fiche section, recap. */
export type WelcomeStep =
  | { key: "guide"; kind: "guide" }
  | { key: string; kind: "section"; section: BusinessSection }
  | { key: "recap"; kind: "recap" };

export const WELCOME_STEPS: WelcomeStep[] = [
  { key: "guide", kind: "guide" },
  ...BUSINESS_SECTIONS.map((section): WelcomeStep => ({
    key: section.key,
    kind: "section",
    section,
  })),
  { key: "recap", kind: "recap" },
];

export const WELCOME_CHECKS = ["read", "content", "access"] as const;

export function parseBusinessProfile(raw: unknown): BusinessProfileValues {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const source = raw as Record<string, unknown>;
  const values: BusinessProfileValues = {};
  for (const field of BUSINESS_FIELDS) {
    const value = source[field.key];
    if (typeof value === "string") values[field.key] = value;
  }
  return values;
}

function filled(values: BusinessProfileValues, key: string) {
  return (values[key] ?? "").trim().length > 0;
}

export function missingBusinessFields(values: BusinessProfileValues): string[] {
  return BUSINESS_FIELDS.filter((field) => field.required && !filled(values, field.key)).map(
    (field) => field.key,
  );
}

export function missingInSection(
  section: BusinessSection,
  values: BusinessProfileValues,
): string[] {
  return section.fields
    .filter((field) => field.required && !filled(values, field.key))
    .map((field) => field.key);
}

export function sectionComplete(section: BusinessSection, values: BusinessProfileValues): boolean {
  return missingInSection(section, values).length === 0;
}

export function businessProfileComplete(values: BusinessProfileValues): boolean {
  return missingBusinessFields(values).length === 0;
}

export const REQUIRED_COUNT = BUSINESS_FIELDS.filter((field) => field.required).length;

/** How many required answers are in — used for the "4/7" progress hints. */
export function requiredProgress(values: BusinessProfileValues) {
  const done = REQUIRED_COUNT - missingBusinessFields(values).length;
  return { done, total: REQUIRED_COUNT };
}

/** Nothing meaningful entered yet: the printable sheet falls back to a blank template. */
export function isBlankProfile(values: BusinessProfileValues): boolean {
  return BUSINESS_FIELDS.filter((field) => filled(values, field.key)).length === 0;
}

/** First step the client still has to deal with, so they resume where they stopped. */
export function firstIncompleteStep(
  values: BusinessProfileValues,
  checks: Record<string, boolean>,
): number {
  if (!WELCOME_CHECKS.every((key) => checks[key])) return 0;
  for (let index = 0; index < WELCOME_STEPS.length; index += 1) {
    const step = WELCOME_STEPS[index];
    if (step && step.kind === "section" && !sectionComplete(step.section, values)) return index;
  }
  return WELCOME_STEPS.length - 1;
}

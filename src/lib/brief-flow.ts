/**
 * Declarative definition of the brief funnel.
 * Every label lives in the i18n dictionaries (`brief.*`), never here.
 */

// ---------------------------------------------------------------------------
// Legacy (software-only) model — kept verbatim so already-submitted briefs
// keep rendering exactly as before, in the portal recap/history and in admin.
// ---------------------------------------------------------------------------

export const PROJECT_TYPES = ["ecommerce", "showcase", "app", "maintenance", "other"] as const;
export type ProjectType = (typeof PROJECT_TYPES)[number];

export type BriefFieldKind = "text" | "textarea" | "select" | "multiselect" | "file";

export type BriefField = {
  key: string;
  long?: boolean;
  kind?: BriefFieldKind;
  options?: string[];
};

export type BriefStep = {
  key: string;
  kind: "type" | "kind" | "categories" | "fields" | "recap";
  fields: BriefField[];
  multi?: boolean;
};

const TYPE_STEP: BriefStep = { key: "type", kind: "type", fields: [] };
const RECAP_STEP: BriefStep = { key: "recap", kind: "recap", fields: [] };

const BRANCHES: Record<ProjectType, BriefStep> = {
  ecommerce: {
    key: "ecommerce",
    kind: "fields",
    fields: [
      { key: "ecom_products" },
      { key: "ecom_payments" },
      { key: "ecom_shipping" },
      { key: "ecom_stock" },
      { key: "ecom_migration", long: true },
    ],
  },
  showcase: {
    key: "showcase",
    kind: "fields",
    fields: [
      { key: "show_pages", long: true },
      { key: "show_contact" },
      { key: "show_seo" },
      { key: "show_existing" },
    ],
  },
  app: {
    key: "app",
    kind: "fields",
    fields: [
      { key: "app_users" },
      { key: "app_features", long: true },
      { key: "app_data" },
      { key: "app_integrations" },
    ],
  },
  maintenance: {
    key: "maintenance",
    kind: "fields",
    fields: [
      { key: "maint_platform" },
      { key: "maint_access" },
      { key: "maint_issues", long: true },
      { key: "maint_level" },
    ],
  },
  other: {
    key: "other",
    kind: "fields",
    fields: [{ key: "other_describe", long: true }],
  },
};

const COMMON_STEPS: BriefStep[] = [
  {
    key: "business",
    kind: "fields",
    fields: [{ key: "business", long: true }, { key: "audience" }],
  },
  { key: "goals", kind: "fields", fields: [{ key: "goal", long: true }, { key: "success" }] },
  { key: "style", kind: "fields", fields: [{ key: "style" }, { key: "references", long: true }] },
  { key: "content", kind: "fields", fields: [{ key: "content", long: true }, { key: "deadline" }] },
];

export function isProjectType(value: unknown): value is ProjectType {
  return typeof value === "string" && (PROJECT_TYPES as readonly string[]).includes(value);
}

/** Legacy funnel — adapts to the selected project type; unknown type stops after step 1. */
export function briefSteps(type: ProjectType | null): BriefStep[] {
  if (!type) return [TYPE_STEP];
  return [TYPE_STEP, BRANCHES[type], ...COMMON_STEPS, RECAP_STEP];
}

export function briefFields(type: ProjectType | null): BriefField[] {
  return briefSteps(type).flatMap((step) => step.fields);
}

// ---------------------------------------------------------------------------
// New model — top-level Software / Hardware / Hybrid classification, with
// multi-select categories and, for hardware, a dedicated field set.
// ---------------------------------------------------------------------------

export const PROJECT_KINDS = ["software", "hardware", "hybrid"] as const;
export type ProjectKind = (typeof PROJECT_KINDS)[number];

export function isProjectKind(value: unknown): value is ProjectKind {
  return typeof value === "string" && (PROJECT_KINDS as readonly string[]).includes(value);
}

/** Superset of software categories — the 5 legacy slugs remain valid entries. */
export const SOFTWARE_CATEGORIES = [
  "ecommerce",
  "showcase",
  "app_web",
  "app_mobile",
  "saas",
  "logiciel_metier",
  "ia",
  "automatisation",
  "api_integration",
  "dashboard",
  "base_donnees",
  "infra_cloud",
  "cybersecurite",
  "iot_logiciel_embarque",
  "maintenance",
  "other",
] as const;
export type SoftwareCategory = (typeof SOFTWARE_CATEGORIES)[number];

export type HardwareGroup = { key: string; items: readonly string[] };

export const HARDWARE_GROUPS: readonly HardwareGroup[] = [
  {
    key: "robotique",
    items: [
      "bras_robotique",
      "robot_industriel",
      "robot_mobile",
      "robot_autonome",
      "robot_manutention",
      "cobot",
      "robot_sur_mesure",
      "prototype_robotique",
    ],
  },
  {
    key: "domotique_iot",
    items: [
      "maison_connectee",
      "batiment_connecte",
      "capteurs_domotique",
      "controle_acces",
      "automatisation_domotique",
      "monitoring",
      "systemes_iot",
      "gestion_energetique",
    ],
  },
  {
    key: "electronique",
    items: [
      "carte_electronique",
      "pcb",
      "microcontroleur",
      "esp32_arduino_stm32",
      "systeme_embarque",
      "capteurs_electronique",
      "prototype_electronique",
      "objet_connecte",
    ],
  },
  {
    key: "machines_industrie",
    items: [
      "machine_industrielle",
      "machine_automatisee",
      "ligne_production",
      "convoyeur",
      "systeme_manutention",
      "machine_cnc",
      "equipement_industriel",
      "automatisation_industrielle",
    ],
  },
  {
    key: "construction_chantier",
    items: [
      "gros_outils_chantier",
      "machines_chantier",
      "equipements_professionnels",
      "outillage_specialise",
      "systemes_automatises_chantier",
      "solutions_levage",
      "solutions_manutention_chantier",
      "equipements_sur_mesure",
    ],
  },
  {
    key: "prototypage_fabrication",
    items: [
      "prototype_fonctionnel",
      "impression_3d",
      "usinage",
      "pieces_mecaniques",
      "assemblage",
      "boitier_chassis",
      "petite_serie",
      "industrialisation",
    ],
  },
  {
    key: "autre_hardware",
    items: ["projet_hardware_sur_mesure", "ne_sait_pas_categorie"],
  },
] as const;

export const HARDWARE_CATEGORIES: readonly string[] = HARDWARE_GROUPS.flatMap((g) => g.items);
export type HardwareCategory = (typeof HARDWARE_GROUPS)[number]["items"][number];

// Canonical answer keys — exported so every consumer (portal + admin) agrees.
export const TYPE_KEY = "project_type"; // legacy per-answer key, still written for old-style briefs
export const KIND_KEY = "project_kind"; // new top-level classification (software|hardware|hybrid|unsure)
export const CATEGORIES_KEY = "categories"; // string[] of selected category slugs
export const UNSURE_KEY = "unsure"; // boolean escape-hatch flag

export const ENVIRONMENT_OPTIONS = [
  "interieur",
  "exterieur",
  "industriel",
  "chantier",
  "bureau",
  "commerce",
  "entrepot",
  "maison",
  "autre",
] as const;

export const PROJECT_STAGE_OPTIONS = [
  "idee",
  "cahier_des_charges",
  "prototype_existant",
  "produit_a_ameliorer",
  "produit_a_industrialiser",
  "besoin_fabrication",
] as const;

export const QUANTITY_OPTIONS = [
  "1_prototype",
  "2_10",
  "10_100",
  "100_1000",
  "1000_plus",
  "inconnu",
] as const;

export const BUDGET_OPTIONS = [
  "moins_5k",
  "5k_15k",
  "15k_50k",
  "50k_150k",
  "plus_150k",
  "a_definir",
] as const;

function hardwareCommonFields(): BriefField[] {
  return [
    { key: "hw_description", long: true },
    { key: "hw_objectif", long: true },
    { key: "hw_environnement", kind: "select", options: [...ENVIRONMENT_OPTIONS] },
    { key: "hw_etat_projet", kind: "select", options: [...PROJECT_STAGE_OPTIONS] },
    { key: "hw_quantite", kind: "select", options: [...QUANTITY_OPTIONS] },
    { key: "hw_budget", kind: "select", options: [...BUDGET_OPTIONS] },
    { key: "hw_delai" },
    { key: "hw_attachments", kind: "file" },
  ];
}

/** Legacy per-category question sets, reused as extra steps when that
 * category is among the ones selected in the new multi-select model. */
function softwareBranchSteps(categories: string[]): BriefStep[] {
  return categories.filter(isProjectType).map((type) => BRANCHES[type]);
}

function kindStep(): BriefStep {
  return { key: "kind", kind: "kind", fields: [] };
}

function softwareCategoryStep(): BriefStep {
  return { key: "software_categories", kind: "categories", fields: [], multi: true };
}

function hardwareCategoryStep(): BriefStep {
  return { key: "hardware_categories", kind: "categories", fields: [], multi: true };
}

function hardwareFieldsStep(): BriefStep {
  return { key: "hardware_fields", kind: "fields", fields: hardwareCommonFields() };
}

function unsureStep(): BriefStep {
  return {
    key: "unsure",
    kind: "fields",
    fields: [{ key: "unsure_description", long: true }],
  };
}

/**
 * New orchestrator: builds the step list from the top-level kind and the
 * categories already picked. Pure-hardware skips the software-oriented
 * COMMON_STEPS entirely (business/style/references don't apply); hybrid
 * keeps them once, after both category pickers.
 */
export function briefStepsV2(
  kind: ProjectKind | "unsure" | null,
  categories: string[] = [],
): BriefStep[] {
  if (!kind) return [kindStep()];
  if (kind === "unsure") return [kindStep(), unsureStep(), RECAP_STEP];

  if (kind === "software") {
    return [
      kindStep(),
      softwareCategoryStep(),
      ...softwareBranchSteps(categories),
      ...COMMON_STEPS,
      RECAP_STEP,
    ];
  }
  if (kind === "hardware") {
    return [kindStep(), hardwareCategoryStep(), hardwareFieldsStep(), RECAP_STEP];
  }
  // hybrid
  return [
    kindStep(),
    softwareCategoryStep(),
    hardwareCategoryStep(),
    ...softwareBranchSteps(categories),
    hardwareFieldsStep(),
    ...COMMON_STEPS,
    RECAP_STEP,
  ];
}

export function briefFieldsV2(
  kind: ProjectKind | "unsure" | null,
  categories: string[] = [],
): BriefField[] {
  return briefStepsV2(kind, categories).flatMap((step) => step.fields);
}

// ---------------------------------------------------------------------------
// Answers (de)serialization — widened to carry arrays/booleans, not just
// strings, so multi-select categories and the "unsure" flag survive a
// save/reload roundtrip instead of being silently dropped.
// ---------------------------------------------------------------------------

export type Attachment = { path: string; name: string; size: number; mime: string };

function isAttachment(value: unknown): value is Attachment {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v["path"] === "string" &&
    typeof v["name"] === "string" &&
    typeof v["size"] === "number" &&
    typeof v["mime"] === "string"
  );
}

export type AnswerValue = string | string[] | boolean | Attachment[];
export type Answers = Record<string, AnswerValue>;

/** History of validations / reopenings, stored inside `briefs.answers` under this key. */
export const HISTORY_KEY = "__history";

export type BriefHistoryEntry = {
  at: string;
  event: "submitted" | "reopened";
  type: ProjectType | ProjectKind | "unsure" | null;
  categories?: string[];
  answers: Answers;
};

export function splitBriefAnswers(stored: unknown): {
  answers: Answers;
  history: BriefHistoryEntry[];
} {
  if (!stored || typeof stored !== "object") return { answers: {}, history: [] };
  const raw = stored as Record<string, unknown>;
  const history = Array.isArray(raw[HISTORY_KEY]) ? (raw[HISTORY_KEY] as BriefHistoryEntry[]) : [];
  const answers: Answers = {};
  for (const [key, value] of Object.entries(raw)) {
    if (key === HISTORY_KEY) continue;
    if (typeof value === "string" || typeof value === "boolean") {
      answers[key] = value;
    } else if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      answers[key] = value as string[];
    } else if (Array.isArray(value) && value.every(isAttachment)) {
      answers[key] = value as Attachment[];
    }
  }
  return { answers, history };
}

/** True once an answers blob carries the new top-level classification. */
export function isNewStyleAnswers(answers: Answers): boolean {
  return typeof answers[KIND_KEY] === "string" || answers[UNSURE_KEY] === true;
}

/**
 * Resolves the field list to display for one answers blob (recap, admin
 * detail, or a single history entry), dispatching between the legacy
 * single-type model and the new kind+categories model so both render
 * correctly without duplicating the branch logic in every caller.
 */
export function recapFieldsFor(answers: Answers): BriefField[] {
  if (answers[UNSURE_KEY] === true) return [{ key: "unsure_description", long: true }];

  const kind = answers[KIND_KEY];
  if (isProjectKind(kind)) {
    const categories = Array.isArray(answers[CATEGORIES_KEY])
      ? (answers[CATEGORIES_KEY] as string[])
      : [];
    return briefFieldsV2(kind, categories);
  }

  const legacyType = answers[TYPE_KEY];
  if (isProjectType(legacyType)) return briefFields(legacyType);

  return [];
}

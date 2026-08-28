#!/usr/bin/env node
/**
 * i18n build check.
 * 1) every locale of every namespace must expose the exact same key set (EN is the reference)
 * 2) every key used in the app (t("ns.key") or a literal "ns.key" string) must exist
 * 3) keys defined but never referenced are reported as unused
 *
 * Exit code 1 on missing keys or locale drift, 0 when only unused keys remain.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");
const LOCALES = join(SRC, "locales");
const LANGS = ["fr", "en", "de", "es", "ru"];
const REFERENCE = "en";

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(ts|tsx)$/.test(full)) out.push(full);
  }
  return out;
}

/** Extract `"key": "value"` blocks per locale from a namespace source file. */
function parseNamespace(file) {
  const source = readFileSync(file, "utf8");
  const result = {};
  for (const lang of LANGS) {
    const start = source.search(new RegExp(`^\\s{2}${lang}:\\s*\\{`, "m"));
    if (start === -1) continue;
    // slice until the next top-level locale key or the end of the object
    const rest = source.slice(start + 1);
    const endRel = rest.search(new RegExp(`^\\s{2}(?:${LANGS.join("|")}):\\s*\\{`, "m"));
    const block = endRel === -1 ? rest : rest.slice(0, endRel);
    const keys = new Set();
    for (const m of block.matchAll(/^\s{4}"?([A-Za-z0-9_.$-]+)"?:/gm)) keys.add(m[1]);
    result[lang] = keys;
  }
  return result;
}

const namespaceFiles = readdirSync(LOCALES)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts")
  .map((f) => [f.replace(/\.ts$/, ""), join(LOCALES, f)]);

const registry = readFileSync(join(LOCALES, "index.ts"), "utf8");

const defined = new Map(); // "ns.key" -> Set(langs)
const errors = [];
const warnings = [];

for (const [ns, file] of namespaceFiles) {
  if (!new RegExp(`^\\s+${ns},$`, "m").test(registry)) {
    errors.push(`namespace "${ns}" is not registered in src/locales/index.ts`);
  }
  const byLang = parseNamespace(file);
  const reference = byLang[REFERENCE];
  if (!reference || reference.size === 0) {
    errors.push(`namespace "${ns}" has no "${REFERENCE}" dictionary`);
    continue;
  }
  for (const lang of LANGS) {
    const keys = byLang[lang];
    if (!keys) {
      errors.push(`namespace "${ns}" is missing locale "${lang}"`);
      continue;
    }
    for (const key of reference) {
      if (!keys.has(key)) errors.push(`${ns}.${key} — missing translation for "${lang}"`);
    }
    for (const key of keys) {
      if (!reference.has(key)) errors.push(`${ns}.${key} — present in "${lang}" but not in "${REFERENCE}"`);
    }
  }
  for (const key of reference) defined.set(`${ns}.${key}`, true);
}

const knownNamespaces = new Set(namespaceFiles.map(([ns]) => ns));
const used = new Map(); // literal key -> first location
const patterns = []; // dynamic keys built with template literals

for (const file of walk(SRC)) {
  if (file.startsWith(LOCALES)) continue;
  const source = readFileSync(file, "utf8");
  const lines = source.split("\n");
  lines.forEach((line, i) => {
    // dynamic: t(`ns.field.${x}.label`) → treated as a matcher over defined keys
    for (const m of line.matchAll(/`([a-z][A-Za-z0-9]*\.[^`]*\$\{[^`]*)`/g)) {
      const raw = m[1];
      const ns = raw.split(".")[0];
      if (!knownNamespaces.has(ns)) continue;
      const source_ = raw.replace(/[.*+?^$()[\]{}|\\]/g, "\\$&").replace(/\\\$\\\{[^}]*\\\}/g, "[A-Za-z0-9_-]+");
      patterns.push({ regex: new RegExp(`^${source_}$`), where: `${relative(ROOT, file)}:${i + 1}` });
    }
    for (const m of line.matchAll(/["'`]([a-z][A-Za-z0-9]*(?:\.[A-Za-z0-9_-]+)+)["'`]/g)) {
      const key = m[1];
      const ns = key.split(".")[0];
      if (!knownNamespaces.has(ns)) continue;
      if (!used.has(key)) used.set(key, `${relative(ROOT, file)}:${i + 1}`);
    }
  });
}

for (const [key, where] of used) {
  if (!defined.has(key)) errors.push(`${key} — used at ${where} but not defined in any locale`);
}
for (const key of defined.keys()) {
  if (used.has(key)) continue;
  if (patterns.some((p) => p.regex.test(key))) continue;
  warnings.push(`${key} — defined but never used`);
}


const label = "[i18n]";
if (warnings.length) {
  console.warn(`${label} ${warnings.length} unused key(s):`);
  for (const w of warnings) console.warn(`  - ${w}`);
}
if (errors.length) {
  console.error(`${label} ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`${label} OK — ${defined.size} keys × ${LANGS.length} locales, no missing key.`);

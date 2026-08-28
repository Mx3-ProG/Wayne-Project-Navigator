import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { dictionaries } from "@/locales";

export const LOCALES = ["fr", "en", "de", "es", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<Locale, { label: string; short: string }> = {
  fr: { label: "Français", short: "FR" },
  en: { label: "English", short: "EN" },
  de: { label: "Deutsch", short: "DE" },
  es: { label: "Español", short: "ES" },
  ru: { label: "Русский", short: "RU" },
};

export type LocaleDict = Record<string, string>;
export type Namespace = Record<Locale, LocaleDict>;

const STORAGE_KEY = "wayne.locale";
const DEFAULT_LOCALE: Locale = "en";

function flatten(locale: Locale): LocaleDict {
  const out: LocaleDict = {};
  for (const [ns, values] of Object.entries(dictionaries)) {
    for (const [key, value] of Object.entries(values[locale] ?? {})) {
      out[`${ns}.${key}`] = value;
    }
  }
  return out;
}

const FLAT: Record<Locale, LocaleDict> = LOCALES.reduce(
  (acc, locale) => {
    acc[locale] = flatten(locale);
    return acc;
  },
  {} as Record<Locale, LocaleDict>,
);

export type TranslateFn = (key: string, vars?: Record<string, string | number>) => string;

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: TranslateFn };

const I18nContext = createContext<Ctx | null>(null);

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
      return;
    }
    const nav = window.navigator.language?.slice(0, 2).toLowerCase();
    if (isLocale(nav)) setLocaleState(nav);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback<TranslateFn>(
    (key, vars) => {
      const raw = FLAT[locale]?.[key] ?? FLAT[DEFAULT_LOCALE]?.[key] ?? key;
      if (!vars) return raw;
      return raw.replace(/\{(\w+)\}/g, (_m, name: string) =>
        vars[name] === undefined ? `{${name}}` : String(vars[name]),
      );
    },
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export function useT(): TranslateFn {
  return useI18n().t;
}

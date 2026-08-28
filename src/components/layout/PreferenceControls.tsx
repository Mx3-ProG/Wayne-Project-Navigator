import { Check, Globe, Moon, Sun } from "lucide-react";
import { LOCALES, LOCALE_META, useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function PreferenceControls({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label={t("common.language")}
          className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <Globe className="size-3.5" />
          {LOCALE_META[locale].short}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-40">
          {LOCALES.map((l) => (
            <DropdownMenuItem key={l} onClick={() => setLocale(l)} className="justify-between">
              {LOCALE_META[l].label}
              {l === locale ? <Check className="size-3.5 text-primary" /> : null}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? t("common.theme.toLight") : t("common.theme.toDark")}
        title={theme === "dark" ? t("common.theme.toLight") : t("common.theme.toDark")}
        className="inline-flex size-8 items-center justify-center rounded-full border border-border/70 bg-secondary/50 text-muted-foreground transition-colors hover:text-foreground"
      >
        {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>
    </div>
  );
}

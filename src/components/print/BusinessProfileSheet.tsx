import { PrintSheet, type PrintSection } from "@/components/print/PrintSheet";
import {
  BUSINESS_SECTIONS,
  type BusinessProfileValues,
  isBlankProfile,
} from "@/lib/business-profile";
import { useT } from "@/lib/i18n";

/**
 * Printable business fiche. Filled with the client's answers, or a blank
 * template with the same labels when nothing has been entered yet.
 */
export function BusinessProfileSheet({
  values,
  projectName,
  clientName,
  submittedAt,
}: {
  values: BusinessProfileValues;
  projectName: string;
  clientName: string;
  submittedAt: string | null;
}) {
  const t = useT();
  const blank = isBlankProfile(values);

  const sections: PrintSection[] = BUSINESS_SECTIONS.map((section) => ({
    heading: t(`welcome.business.section.${section.key}`),
    rows: section.fields.map((field) => ({
      label: t(`welcome.business.field.${field.key}.label`),
      value: blank
        ? "____________________________________________"
        : (values[field.key] ?? "").trim() || t("welcome.doc.notProvided"),
    })),
  }));

  return (
    <PrintSheet
      title={t("welcome.doc.title")}
      subtitle={blank ? t("welcome.doc.blankNotice") : t("welcome.doc.subtitle")}
      meta={[
        { label: t("welcome.doc.meta.client"), value: clientName },
        { label: t("welcome.doc.meta.project"), value: projectName },
        { label: t("welcome.doc.meta.date"), value: new Date().toLocaleDateString() },
        {
          label: t("welcome.doc.meta.status"),
          value: submittedAt ? t("welcome.doc.status.validated") : t("welcome.doc.status.draft"),
        },
      ]}
      sections={sections}
      footer={t("welcome.doc.footer")}
    />
  );
}

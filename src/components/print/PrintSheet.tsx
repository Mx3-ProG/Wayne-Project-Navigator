import type { ReactNode } from "react";

export type PrintRow = { label: string; value: string };
export type PrintSection = { heading: string; rows: PrintRow[] };

/**
 * Screen-hidden, print-visible document sheet.
 * The `print-sheet` class is what the global @media print rules key on:
 * everything else on the page is hidden while this sheet fills the page.
 */
export function PrintSheet({
  title,
  subtitle,
  meta,
  sections,
  footer,
  children,
}: {
  title: string;
  subtitle?: string;
  meta?: PrintRow[];
  sections?: PrintSection[];
  footer?: string;
  children?: ReactNode;
}) {
  return (
    <div className="print-sheet hidden print:block" aria-hidden>
      <header style={{ borderBottom: "2px solid #111", paddingBottom: 12, marginBottom: 20 }}>
        <p style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", margin: 0 }}>
          Wayne-Web
        </p>
        <h1 style={{ fontSize: 24, margin: "8px 0 0", fontWeight: 700 }}>{title}</h1>
        {subtitle && <p style={{ fontSize: 12, margin: "6px 0 0" }}>{subtitle}</p>}
      </header>

      {meta && meta.length > 0 && (
        <table style={{ width: "100%", fontSize: 12, marginBottom: 20, borderCollapse: "collapse" }}>
          <tbody>
            {meta.map((row) => (
              <tr key={row.label}>
                <td style={{ padding: "3px 12px 3px 0", width: "35%", fontWeight: 600 }}>
                  {row.label}
                </td>
                <td style={{ padding: "3px 0" }}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {sections?.map((section) => (
        <section key={section.heading} style={{ marginBottom: 18 }}>
          <h2
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 1,
              borderBottom: "1px solid #999",
              paddingBottom: 4,
              margin: "0 0 8px",
            }}
          >
            {section.heading}
          </h2>
          {section.rows.map((row) => (
            <div key={row.label} style={{ marginBottom: 8 }}>
              <p style={{ fontSize: 10, textTransform: "uppercase", margin: 0, letterSpacing: 1 }}>
                {row.label}
              </p>
              <p style={{ fontSize: 12, margin: "2px 0 0", whiteSpace: "pre-line" }}>{row.value}</p>
            </div>
          ))}
        </section>
      ))}

      {children}

      {footer && (
        <footer style={{ marginTop: 24, borderTop: "1px solid #999", paddingTop: 8, fontSize: 10 }}>
          {footer}
        </footer>
      )}
    </div>
  );
}

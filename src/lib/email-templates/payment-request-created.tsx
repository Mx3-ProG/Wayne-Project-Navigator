import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

import type { TemplateEntry } from "./registry";

export interface PaymentRequestCreatedProps {
  name?: string;
  amount?: number;
  currency?: string;
  projectName?: string;
  payUrl?: string;
}

function formatAmount(amount: number | undefined, currency: string | undefined) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: (currency ?? "eur").toUpperCase(),
    maximumFractionDigits: 0,
  }).format(amount ?? 0);
}

export function PaymentRequestCreatedEmail({
  name,
  amount,
  currency,
  projectName = "your project",
  payUrl = "#",
}: PaymentRequestCreatedProps) {
  const formatted = formatAmount(amount, currency);
  return (
    <Html>
      <Head />
      <Preview>Payment requested — {formatted}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.brand}>WAYNE-WEB</Text>
          <Heading style={styles.heading}>A payment is requested on {projectName}</Heading>
          {name ? <Text style={styles.text}>Hello {name},</Text> : null}
          <Text style={styles.text}>
            A payment of <strong>{formatted}</strong> is now due on {projectName}. Pay it securely
            in your client portal — it only takes a minute.
          </Text>
          <Section style={{ textAlign: "center", margin: "24px 0" }}>
            <Button href={payUrl} style={styles.button}>
              Pay {formatted}
            </Button>
          </Section>
          <Hr style={styles.hr} />
          <Text style={styles.footer}>Wayne-Web — your project, step by step.</Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#0b0c10",
    margin: 0,
    padding: "32px 0",
    fontFamily: "Helvetica, Arial, sans-serif",
  },
  container: {
    backgroundColor: "#14161c",
    border: "1px solid #24262f",
    borderRadius: "18px",
    padding: "32px",
    maxWidth: "560px",
  },
  brand: { color: "#8b8f9c", fontSize: "11px", letterSpacing: "3px", margin: "0 0 12px" },
  heading: { color: "#ffffff", fontSize: "22px", lineHeight: "30px", margin: "0 0 18px" },
  text: { color: "#d5d7de", fontSize: "15px", lineHeight: "24px", margin: "0 0 14px" },
  button: {
    backgroundColor: "#8ab4ff",
    color: "#0b0c10",
    fontWeight: 600,
    padding: "14px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    display: "inline-block",
  },
  hr: { borderColor: "#24262f", margin: "24px 0 12px" },
  footer: { color: "#71747f", fontSize: "12px", margin: 0 },
};

export const template = {
  component: PaymentRequestCreatedEmail,
  displayName: "Payment request created",
  subject: (data: Record<string, unknown>) =>
    `Payment requested — ${formatAmount(data["amount"] as number, data["currency"] as string)}`,
  previewData: {
    name: "Camille",
    amount: 2000,
    currency: "eur",
    projectName: "Aurora",
    payUrl: "https://example.com/pay/00000000-0000-0000-0000-000000000000",
  },
} satisfies TemplateEntry;

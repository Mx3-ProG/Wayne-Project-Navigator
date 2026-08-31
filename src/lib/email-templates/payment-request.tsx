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

export interface PaymentRequestEmailProps {
  clientName?: string;
  invoiceLabel?: string;
  amount?: number;
  method?: "rib" | "link";
  ribLabel?: string;
  ribHolderName?: string;
  ribIban?: string;
  ribBic?: string;
  paymentUrl?: string;
}

function formatAmount(amount = 0) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(amount);
}

export function PaymentRequestEmail({
  clientName = "",
  invoiceLabel = "",
  amount = 0,
  method = "link",
  ribLabel = "",
  ribHolderName = "",
  ribIban = "",
  ribBic = "",
  paymentUrl = "",
}: PaymentRequestEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Demande de paiement — {invoiceLabel}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.brand}>WAYNE-WEB</Text>
          <Heading style={styles.heading}>Demande de paiement</Heading>
          <Text style={styles.text}>
            Bonjour{clientName ? ` ${clientName}` : ""},{"\n"}
            Voici votre demande de paiement pour <strong>{invoiceLabel}</strong>, d&apos;un montant
            de <strong>{formatAmount(amount)}</strong>.
          </Text>

          {method === "rib" ? (
            <Section style={styles.ribBox}>
              <Text style={styles.ribLine}>
                <strong>Titulaire</strong> {ribHolderName}
              </Text>
              {ribLabel ? (
                <Text style={styles.ribLine}>
                  <strong>Banque</strong> {ribLabel}
                </Text>
              ) : null}
              <Text style={styles.ribLine}>
                <strong>IBAN</strong> {ribIban}
              </Text>
              {ribBic ? (
                <Text style={styles.ribLine}>
                  <strong>BIC</strong> {ribBic}
                </Text>
              ) : null}
            </Section>
          ) : (
            <Section style={{ textAlign: "center" as const, margin: "8px 0 20px" }}>
              <Button style={styles.button} href={paymentUrl}>
                Payer maintenant
              </Button>
            </Section>
          )}

          <Text style={styles.text}>Pour toute question, répondez simplement à cet email.</Text>

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
  text: {
    color: "#d5d7de",
    fontSize: "15px",
    lineHeight: "24px",
    margin: "0 0 14px",
    whiteSpace: "pre-line" as const,
  },
  ribBox: {
    backgroundColor: "#1b1e26",
    border: "1px solid #2accea33",
    borderRadius: "12px",
    padding: "18px 20px",
    margin: "8px 0 20px",
  },
  ribLine: {
    color: "#d5d7de",
    fontSize: "14px",
    lineHeight: "22px",
    margin: "0 0 4px",
  },
  button: {
    backgroundColor: "#2accea",
    borderRadius: "10px",
    color: "#0b0c10",
    fontSize: "15px",
    fontWeight: 700,
    padding: "12px 28px",
    textDecoration: "none",
  },
  hr: { borderColor: "#24262f", margin: "24px 0 12px" },
  footer: { color: "#71747f", fontSize: "12px", margin: 0 },
};

export const template = {
  component: PaymentRequestEmail,
  displayName: "Payment request",
  subject: (data: Record<string, unknown>) =>
    `Demande de paiement — ${typeof data["invoiceLabel"] === "string" ? data["invoiceLabel"] : ""}`,
  previewData: {
    clientName: "Marc",
    invoiceLabel: "Acompte de lancement",
    amount: 1200,
    method: "rib",
    ribLabel: "Qonto",
    ribHolderName: "Wayne Web SAS",
    ribIban: "FR76 1234 5678 9012 3456 7890 123",
    ribBic: "QNTOFRP1XXX",
  },
} satisfies TemplateEntry;

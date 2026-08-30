import {
  Body,
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

export interface LoginCodeEmailProps {
  code?: string;
}

export function LoginCodeEmail({ code = "" }: LoginCodeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Votre code de connexion</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.brand}>WAYNE-WEB</Text>
          <Heading style={styles.heading}>Votre code de connexion</Heading>
          <Text style={styles.text}>Voici votre code de connexion :</Text>

          <Section style={styles.codeBox}>
            <Text style={styles.code}>{code}</Text>
          </Section>

          <Text style={styles.text}>
            Ce code expire dans 10 minutes et ne peut être utilisé qu&apos;une seule fois.
          </Text>
          <Text style={styles.text}>
            Si vous n&apos;êtes pas à l&apos;origine de cette demande, ignorez cet email.
          </Text>

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
  codeBox: {
    backgroundColor: "#1b1e26",
    border: "1px solid #2accea33",
    borderRadius: "12px",
    padding: "20px",
    margin: "8px 0 20px",
    textAlign: "center" as const,
  },
  code: {
    color: "#7ae6e5",
    fontFamily: "'SF Mono', 'Courier New', monospace",
    fontSize: "22px",
    fontWeight: 700,
    letterSpacing: "2px",
    margin: 0,
    wordBreak: "break-all" as const,
  },
  hr: { borderColor: "#24262f", margin: "24px 0 12px" },
  footer: { color: "#71747f", fontSize: "12px", margin: 0 },
};

export const template = {
  component: LoginCodeEmail,
  displayName: "Login code",
  subject: "Votre code de connexion",
  previewData: {
    code: "A7@kP2!x9Q#m4Z8$Rt5N",
  },
} satisfies TemplateEntry;

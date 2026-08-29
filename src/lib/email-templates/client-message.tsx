import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

import type { TemplateEntry } from "./registry";

export interface ClientMessageProps {
  subject?: string;
  body?: string;
  name?: string;
  portalUrl?: string;
  links?: { label: string; url: string }[];
}

export function ClientMessageEmail({
  subject = "A message from the Wayne-Web team",
  body = "",
  name,
  portalUrl,
  links = [],
}: ClientMessageProps) {
  const paragraphs = body.split(/\n{2,}/).filter(Boolean);

  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.brand}>WAYNE-WEB</Text>
          <Heading style={styles.heading}>{subject}</Heading>
          {name ? <Text style={styles.text}>{name}</Text> : null}
          <Section>
            {paragraphs.length > 0 ? (
              paragraphs.map((paragraph, index) => (
                <Text key={index} style={styles.text}>
                  {paragraph}
                </Text>
              ))
            ) : (
              <Text style={styles.text}>{body}</Text>
            )}
          </Section>

          {links.length > 0 ? (
            <Section style={styles.linkBox}>
              <Text style={styles.linkTitle}>Documents</Text>
              {links.map((link) => (
                <Text key={link.url} style={styles.text}>
                  <Link href={link.url} style={styles.link}>
                    {link.label}
                  </Link>
                </Text>
              ))}
            </Section>
          ) : null}

          {portalUrl ? (
            <Text style={styles.text}>
              <Link href={portalUrl} style={styles.link}>
                Open your client portal
              </Link>
            </Text>
          ) : null}

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
  linkBox: {
    backgroundColor: "#1b1e26",
    borderRadius: "12px",
    padding: "16px",
    margin: "8px 0 16px",
  },
  linkTitle: { color: "#8b8f9c", fontSize: "11px", letterSpacing: "2px", margin: "0 0 10px" },
  link: { color: "#8ab4ff", textDecoration: "underline" },
  hr: { borderColor: "#24262f", margin: "24px 0 12px" },
  footer: { color: "#71747f", fontSize: "12px", margin: 0 },
};

export const template = {
  component: ClientMessageEmail,
  displayName: "Client message",
  subject: (data: Record<string, unknown>) =>
    (data["subject"] as string) || "A message from the Wayne-Web team",
  previewData: {
    subject: "Your project Aurora — we have received your request",
    name: "Hello Camille,",
    body: "Thank you for your trust: our team is already on your project.\n\nYou can follow every step live in your Wayne portal.",
    links: [{ label: "Project brief (PDF)", url: "https://example.com/brief.pdf" }],
  },
} satisfies TemplateEntry;

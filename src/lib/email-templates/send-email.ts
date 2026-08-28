import * as React from "react";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { TEMPLATES } from "./registry";

// Server-only: reads RESEND_API_KEY. Never import from client components.

// Configuration baked in at scaffold time
const SITE_NAME = "Wayne Project Navigator";
// FROM_DOMAIN is the domain shown in the From: header. Must be a domain
// verified in the Resend dashboard (DNS records added there).
const FROM_DOMAIN = "flux-wayne.com";

export type SendTemplateEmailResult =
  { sent: true } | { sent: false; reason: "recipient_suppressed" };

export interface SendTemplateEmailOptions {
  templateData?: Record<string, unknown>;
  /** Dedupes retries of the same logical send; defaults to a random UUID (no dedupe). */
  idempotencyKey?: string;
  replyTo?: string;
}

let _resend: Resend | undefined;
function resendClient(): Resend {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  if (!_resend) _resend = new Resend(apiKey);
  return _resend;
}

/**
 * Renders a registered template and sends it through Resend.
 * A suppressed recipient (bounced/complained, per Resend's account-level
 * suppression list) is an expected outcome ({ sent: false }); any other
 * failure throws.
 */
export async function sendTemplateEmail(
  templateName: string,
  to: string,
  options: SendTemplateEmailOptions = {},
): Promise<SendTemplateEmailResult> {
  const template = TEMPLATES[templateName];
  if (!template) {
    throw new Error(
      `Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(", ")}`,
    );
  }

  // Template-level `to` takes precedence — notification templates always
  // send to their fixed address.
  const recipient = template.to || to;
  if (!recipient) {
    throw new Error("Recipient is required (the template defines no fixed recipient)");
  }

  const templateData = options.templateData ?? {};
  const element = React.createElement(template.component, templateData);
  const html = await render(element);
  const text = await render(element, { plainText: true });
  const subject =
    typeof template.subject === "function" ? template.subject(templateData) : template.subject;

  const { error } = await resendClient().emails.send(
    {
      to: recipient,
      from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
      subject,
      html,
      text,
      ...(options.replyTo ? { replyTo: options.replyTo } : {}),
    },
    { idempotencyKey: options.idempotencyKey || crypto.randomUUID() },
  );

  if (error) {
    if (error.message.toLowerCase().includes("suppress")) {
      return { sent: false, reason: "recipient_suppressed" };
    }
    throw new Error(`[Resend] ${error.name}: ${error.message}`);
  }

  return { sent: true };
}

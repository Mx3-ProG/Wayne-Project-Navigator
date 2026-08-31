import type { ComponentType } from "react";
import { template as clientMessageTemplate } from "./client-message";
import { template as loginCodeTemplate } from "./login-code";
import { template as resetPasswordCodeTemplate } from "./reset-password-code";

export interface TemplateEntry {
  // Registry is intentionally heterogeneous — each template has its own prop shape.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subject: string | ((data: Record<string, any>) => string);
  displayName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  previewData?: Record<string, any>;
  /** Fixed recipient — overrides caller-provided recipientEmail when set. */
  to?: string;
}

/**
 * Template registry — maps template names to their React Email components.
 * Import and register new templates here after creating them in this directory.
 *
 * Example:
 *   import { template as welcomeTemplate } from './welcome'
 *   // then add to TEMPLATES: 'welcome': welcomeTemplate
 */
export const TEMPLATES: Record<string, TemplateEntry> = {
  "client-message": clientMessageTemplate,
  "login-code": loginCodeTemplate,
  "reset-password-code": resetPasswordCodeTemplate,
};

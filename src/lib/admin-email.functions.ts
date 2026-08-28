import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const schema = z.object({
  projectId: z.string().uuid(),
  to: z.string().email(),
  subject: z.string().min(1).max(200),
  body: z.string().min(1).max(8000),
  greeting: z.string().max(200).optional(),
  links: z
    .array(z.object({ label: z.string().min(1).max(160), url: z.string().url() }))
    .max(10)
    .optional(),
});

/** Sends a client message from the admin file. Admin-only; logs the send in project notes. */
export const sendClientMessage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data, context }) => {
    const { data: isAdmin, error: roleError } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (roleError) throw new Error(roleError.message);
    if (!isAdmin) throw new Error("Forbidden");

    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");

    const result = await sendTemplateEmail("client-message", data.to, {
      templateData: {
        subject: data.subject,
        body: data.body,
        name: data.greeting,
        links: data.links ?? [],
      },
      idempotencyKey: `client-message-${data.projectId}-${Date.now()}`,
    });

    if (result.sent) {
      const { error } = await context.supabase.from("project_notes").insert({
        project_id: data.projectId,
        author_id: context.userId,
        kind: "email",
        body: `${data.subject}\n\n${data.body}`,
      });
      if (error) console.error("[admin-email] note log failed", error.message);
    }

    return result;
  });

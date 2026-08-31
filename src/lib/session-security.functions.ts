import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({ accessToken: z.string().min(20) });

/**
 * Revokes every session for the current user except the one presenting
 * accessToken. Called right after a password reset so a session a hacker
 * may have obtained is killed the moment the real owner regains access.
 */
export const revokeOtherSessions = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    if (data.accessToken.split(".").length !== 3) {
      throw new Error("Invalid token");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.auth.admin.signOut(data.accessToken, "others");
    if (error) throw new Error("Unable to revoke sessions");

    return { ok: true };
  });

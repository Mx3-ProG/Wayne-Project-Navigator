import { useMutation, useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Attachment } from "@/lib/brief-flow";

export type { Attachment };

const BUCKET = "brief-attachments";

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9.\-_]/g, "_").slice(-120);
}

export function useUploadAttachment(projectId: string) {
  return useMutation({
    mutationFn: async (file: File): Promise<Attachment> => {
      const path = `${projectId}/${crypto.randomUUID()}-${sanitizeFilename(file.name)}`;
      const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
        contentType: file.type || "application/octet-stream",
        upsert: false,
      });
      if (error) throw error;
      return {
        path,
        name: file.name,
        size: file.size,
        mime: file.type || "application/octet-stream",
      };
    },
  });
}

export function useRemoveAttachment() {
  return useMutation({
    mutationFn: async (path: string) => {
      const { error } = await supabase.storage.from(BUCKET).remove([path]);
      if (error) throw error;
    },
  });
}

export function useAttachmentUrl(path: string | null) {
  return useQuery({
    queryKey: ["attachment-url", path],
    queryFn: async () => {
      if (!path) return null;
      const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(path, 3600);
      if (error) throw error;
      return data.signedUrl;
    },
    enabled: Boolean(path),
    staleTime: 55 * 60 * 1000,
  });
}

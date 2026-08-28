import { FileText, Loader2, Paperclip, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { type Attachment, useRemoveAttachment, useUploadAttachment } from "@/hooks/useAttachments";
import { useI18n } from "@/lib/i18n";

const MAX_SIZE = 50 * 1024 * 1024; // 50MB, mirrors the storage bucket limit
const ACCEPT =
  ".pdf,.png,.jpg,.jpeg,.webp,.gif,.mp4,.mov,.step,.stp,.stl,.iges,.igs,.dwg,.dxf,application/pdf,image/*,video/mp4,video/quicktime";

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function AttachmentUploader({
  projectId,
  value,
  onChange,
}: {
  projectId: string;
  value: Attachment[];
  onChange: (next: Attachment[]) => void;
}) {
  const { t } = useI18n();
  const upload = useUploadAttachment(projectId);
  const remove = useRemoveAttachment();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    const next = [...value];
    for (const file of Array.from(files)) {
      if (file.size > MAX_SIZE) {
        toast.error(t("brief.attachments.tooLarge", { name: file.name }));
        continue;
      }
      try {
        const attachment = await upload.mutateAsync(file);
        next.push(attachment);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : t("brief.attachments.invalidType"));
      }
    }
    onChange(next);
    setUploading(false);
  }

  async function handleRemove(attachment: Attachment) {
    onChange(value.filter((item) => item.path !== attachment.path));
    try {
      await remove.mutateAsync(attachment.path);
    } catch {
      // best-effort cleanup — the answer no longer references it either way
    }
  }

  return (
    <div className="space-y-3">
      <GlassCard
        interactive={false}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          void handleFiles(e.dataTransfer.files);
        }}
        className={`cursor-pointer border-2 border-dashed p-6 text-center transition-colors ${
          dragOver ? "border-primary/60" : "border-border/70"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPT}
          className="hidden"
          onChange={(e) => void handleFiles(e.target.files)}
        />
        {uploading ? (
          <Loader2 className="mx-auto size-6 animate-spin text-primary" />
        ) : (
          <Upload className="mx-auto size-6 text-muted-foreground" />
        )}
        <p className="mt-2 text-sm font-medium">
          {uploading ? t("brief.attachments.uploading") : t("brief.attachments.upload")}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{t("brief.field.hw_attachments.hint")}</p>
      </GlassCard>

      {value.length === 0 ? (
        <p className="text-xs text-muted-foreground">{t("brief.attachments.empty")}</p>
      ) : (
        <ul className="space-y-2">
          {value.map((attachment) => (
            <li
              key={attachment.path}
              className="flex items-center justify-between gap-3 rounded-xl border border-border/70 px-3 py-2 text-sm"
            >
              <span className="flex min-w-0 items-center gap-2">
                <FileText className="size-4 shrink-0 text-primary" />
                <span className="truncate">{attachment.name}</span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {formatSize(attachment.size)}
                </span>
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => handleRemove(attachment)}
                aria-label={t("brief.attachments.remove")}
              >
                <X className="size-3.5" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function AttachmentSummary({ value }: { value: Attachment[] }) {
  const { t } = useI18n();
  if (value.length === 0) {
    return <p className="mt-1 text-sm text-muted-foreground">{t("brief.empty")}</p>;
  }
  return (
    <ul className="mt-1 space-y-1">
      {value.map((attachment) => (
        <li key={attachment.path} className="flex items-center gap-2 text-sm">
          <Paperclip className="size-3.5 shrink-0 text-muted-foreground" />
          <span className="truncate">{attachment.name}</span>
        </li>
      ))}
    </ul>
  );
}

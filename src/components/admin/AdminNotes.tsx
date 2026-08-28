import { Mail, MessageSquare, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import {
  useAddProjectNote,
  useDeleteProjectNote,
  useProjectNotes,
  projectNotesKey,
} from "@/hooks/useAdmin";
import { sendClientMessage } from "@/lib/admin-email.functions";
import { useI18n } from "@/lib/i18n";
import { formatFullDate } from "@/lib/journey";

/** Internal notes the Wayne team keeps on a client file (never visible to the client). */
export function AdminNotes({ projectId }: { projectId: string }) {
  const { t, locale } = useI18n();
  const { data: notes } = useProjectNotes(projectId);
  const add = useAddProjectNote(projectId);
  const remove = useDeleteProjectNote(projectId);
  const [body, setBody] = useState("");

  async function submit() {
    if (!body.trim()) return;
    try {
      await add.mutateAsync({ body: body.trim() });
      setBody("");
      toast.success(t("admin.notes.saved"));
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("admin.notes.error"));
    }
  }

  return (
    <GlassCard interactive={false} className="p-6">
      <h2 className="font-display text-xl font-semibold">{t("admin.notes.title")}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{t("admin.notes.hint")}</p>

      <div className="mt-4 space-y-3">
        <Textarea
          rows={3}
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder={t("admin.notes.placeholder")}
        />
        <Button disabled={add.isPending || !body.trim()} onClick={submit}>
          <MessageSquare className="mr-2 size-4" />
          {t("admin.notes.add")}
        </Button>
      </div>

      <ul className="mt-5 space-y-2">
        {(notes ?? []).length === 0 && (
          <li className="text-sm text-muted-foreground">{t("admin.notes.empty")}</li>
        )}
        {(notes ?? []).map((note) => (
          <li
            key={note.id}
            className="flex items-start justify-between gap-3 rounded-xl border border-border/70 px-4 py-3 text-sm"
          >
            <div>
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {note.kind === "email" ? (
                  <Mail className="size-3.5 text-primary" />
                ) : (
                  <MessageSquare className="size-3.5 text-primary" />
                )}
                {formatFullDate(note.created_at, locale)}
              </p>
              <p className="mt-1.5 whitespace-pre-line">{note.body}</p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              aria-label={t("admin.notes.delete")}
              disabled={remove.isPending}
              onClick={() => remove.mutate(note.id)}
            >
              <Trash2 className="size-4" />
            </Button>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

/** Compose a client email from the file; the message is logged in the notes timeline. */
export function AdminMessage({
  projectId,
  email,
  name,
  projectName,
}: {
  projectId: string;
  email: string | null;
  name: string | null;
  projectName: string;
}) {
  const { t } = useI18n();
  const queryClient = useQueryClient();
  const send = useServerFn(sendClientMessage);
  const [sending, setSending] = useState(false);
  const [subject, setSubject] = useState(t("admin.message.defaultSubject", { project: projectName }));
  const [body, setBody] = useState(t("admin.message.defaultBody", { name: name ?? "", project: projectName }));

  async function submit() {
    if (!email) return;
    setSending(true);
    try {
      const result = await send({ data: { projectId, to: email, subject, body } });
      if (result.sent) {
        toast.success(t("admin.message.sent"));
      } else {
        toast.error(t("admin.message.suppressed"));
      }
      queryClient.invalidateQueries({ queryKey: projectNotesKey(projectId) });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("admin.message.error"));
    } finally {
      setSending(false);
    }
  }


  return (
    <GlassCard interactive={false} className="p-6">
      <h2 className="font-display text-xl font-semibold">{t("admin.message.title")}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{t("admin.message.hint")}</p>

      {email ? (
        <div className="mt-4 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="msg-subject">{t("admin.message.subject")}</Label>
            <Input
              id="msg-subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="msg-body">{t("admin.message.body")}</Label>
            <Textarea
              id="msg-body"
              rows={8}
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />
          </div>
          <Button onClick={submit} disabled={sending || !subject.trim() || !body.trim()}>
            <Mail className="mr-2 size-4" />
            {t("admin.message.send", { email })}
          </Button>
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">{t("admin.message.noEmail")}</p>
      )}
    </GlassCard>
  );
}

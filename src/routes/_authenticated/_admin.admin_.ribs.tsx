import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import {
  useCreateRib,
  useDeleteRib,
  usePaymentRibs,
  useSetRibActive,
  useUpdateRib,
  type PaymentRib,
} from "@/hooks/useAdmin";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/_admin/admin_/ribs")({
  ssr: false,
  beforeLoad: async () => {
    const { data: auth } = await supabase.auth.getUser();
    const user = auth.user;
    if (!user) throw redirect({ to: "/auth" });
    const { data: isSuperadmin } = await supabase.rpc("has_role", {
      _user_id: user.id,
      _role: "superadmin",
    });
    if (!isSuperadmin) throw redirect({ to: "/admin" });
  },
  component: RibsPage,
});

function RibsPage() {
  const t = useT();
  const { data: ribs, isLoading } = usePaymentRibs();
  const createRib = useCreateRib();
  const updateRib = useUpdateRib();
  const setActive = useSetRibActive();
  const deleteRib = useDeleteRib();

  const [label, setLabel] = useState("");
  const [holderName, setHolderName] = useState("");
  const [iban, setIban] = useState("");
  const [bic, setBic] = useState("");

  async function create() {
    try {
      await createRib.mutateAsync({ label, holderName, iban, bic });
      toast.success(t("payments.ribs.created"));
      setLabel("");
      setHolderName("");
      setIban("");
      setBic("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("payments.ribs.error"));
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" size="sm">
          <Link to="/admin">
            <ArrowLeft className="mr-1.5 size-4" />
            {t("admin.backToPortal")}
          </Link>
        </Button>
      </div>

      <div>
        <h1 className="font-display text-2xl font-semibold">{t("payments.ribs.title")}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t("payments.ribs.subtitle")}</p>
      </div>

      <GlassCard variant="strong" interactive={false} className="p-6">
        <h2 className="text-sm font-semibold">{t("payments.ribs.addTitle")}</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label>{t("payments.ribs.label")}</Label>
            <Input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Qonto" />
          </div>
          <div className="space-y-1.5">
            <Label>{t("payments.ribs.holderName")}</Label>
            <Input
              value={holderName}
              onChange={(e) => setHolderName(e.target.value)}
              placeholder="Wayne Web SAS"
            />
          </div>
          <div className="space-y-1.5">
            <Label>{t("payments.ribs.iban")}</Label>
            <Input
              value={iban}
              onChange={(e) => setIban(e.target.value)}
              placeholder="FR76 1234 5678 9012 3456 7890 123"
              className="font-mono"
            />
          </div>
          <div className="space-y-1.5">
            <Label>{t("payments.ribs.bic")}</Label>
            <Input
              value={bic}
              onChange={(e) => setBic(e.target.value)}
              placeholder="QNTOFRP1XXX"
              className="font-mono"
            />
          </div>
        </div>
        <Button
          className="mt-4"
          disabled={createRib.isPending || !label || !holderName || !iban}
          onClick={create}
        >
          {t("payments.ribs.add")}
        </Button>
      </GlassCard>

      <div className="space-y-3">
        {isLoading ? (
          <p className="text-sm text-muted-foreground">{t("payments.ribs.loading")}</p>
        ) : !ribs || ribs.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t("payments.ribs.empty")}</p>
        ) : (
          ribs.map((rib) => (
            <RibRow
              key={rib.id}
              rib={rib}
              onToggleActive={(active) => setActive.mutate({ ribId: rib.id, active })}
              onUpdate={(input) => updateRib.mutateAsync({ ribId: rib.id, ...input })}
              onDelete={() => deleteRib.mutate(rib.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

function RibRow({
  rib,
  onToggleActive,
  onUpdate,
  onDelete,
}: {
  rib: PaymentRib;
  onToggleActive: (active: boolean) => void;
  onUpdate: (input: {
    label: string;
    holderName: string;
    iban: string;
    bic: string;
  }) => Promise<void>;
  onDelete: () => void;
}) {
  const t = useT();
  const [editing, setEditing] = useState(false);
  const [label, setLabel] = useState(rib.label);
  const [holderName, setHolderName] = useState(rib.holder_name);
  const [iban, setIban] = useState("");
  const [bic, setBic] = useState("");
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    try {
      await onUpdate({ label, holderName, iban, bic });
      toast.success(t("payments.ribs.updated"));
      setEditing(false);
      setIban("");
      setBic("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("payments.ribs.error"));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-xl border border-border/70 px-4 py-3 text-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-medium">
            {rib.label}
            {!rib.active && (
              <span className="ml-2 text-xs text-muted-foreground">
                {t("payments.ribs.inactive")}
              </span>
            )}
          </p>
          <p className="text-xs text-muted-foreground">{rib.holder_name}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="secondary" onClick={() => setEditing((v) => !v)}>
            {editing ? t("payments.ribs.cancel") : t("payments.ribs.edit")}
          </Button>
          <Button size="sm" variant="secondary" onClick={() => onToggleActive(!rib.active)}>
            {rib.active ? t("payments.ribs.deactivate") : t("payments.ribs.activate")}
          </Button>
          <Button size="sm" variant="destructive" onClick={onDelete}>
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>

      {editing && (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label>{t("payments.ribs.label")}</Label>
            <Input value={label} onChange={(e) => setLabel(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label>{t("payments.ribs.holderName")}</Label>
            <Input value={holderName} onChange={(e) => setHolderName(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label>{t("payments.ribs.iban")}</Label>
            <Input
              value={iban}
              onChange={(e) => setIban(e.target.value)}
              placeholder={t("payments.ribs.ibanReplace")}
              className="font-mono"
            />
          </div>
          <div className="space-y-1.5">
            <Label>{t("payments.ribs.bic")}</Label>
            <Input
              value={bic}
              onChange={(e) => setBic(e.target.value)}
              placeholder={t("payments.ribs.bicReplace")}
              className="font-mono"
            />
          </div>
          <Button className="sm:col-span-2" disabled={saving || !iban} onClick={save}>
            {t("payments.ribs.save")}
          </Button>
        </div>
      )}
    </div>
  );
}

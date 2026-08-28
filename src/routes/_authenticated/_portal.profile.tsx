import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { GlassCard } from "@/components/glass/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateProfile, useWorkspace } from "@/hooks/usePortal";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/_portal/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Wayne Client Portal" },
      { name: "description", content: "Manage your contact details and company information." },
      { property: "og:title", content: "Profile — Wayne Client Portal" },
      {
        property: "og:description",
        content: "Manage your contact details and company information.",
      },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const t = useT();
  const { data } = useWorkspace();
  const update = useUpdateProfile();
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!data) return;
    setFullName(data.profile.full_name ?? "");
    setCompany(data.profile.company ?? "");
    setPhone(data.profile.phone ?? "");
  }, [data]);

  if (!data) return null;

  async function save() {
    if (!data) return;
    try {
      await update.mutateAsync({
        id: data.profile.id,
        values: { full_name: fullName, company, phone },
      });
      toast.success(t("profile.success"));
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("profile.error"));
    }
  }

  return (
    <div className="space-y-6 pb-8">
      <header>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t("profile.heading")}</h1>
        <p className="mt-2 text-muted-foreground">{t("profile.subheading")}</p>
      </header>

      <GlassCard variant="strong" interactive={false} className="space-y-4 p-6 sm:p-8">
        <div className="space-y-2">
          <Label htmlFor="full_name">{t("profile.fullName")}</Label>
          <Input id="full_name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{t("profile.company")}</Label>
          <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t("profile.phone")}</Label>
          <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>{t("profile.email")}</Label>
          <Input value={data.profile.email ?? ""} disabled />
        </div>
        <Button onClick={save} disabled={update.isPending}>
          {update.isPending ? t("profile.saving") : t("profile.save")}
        </Button>
      </GlassCard>
    </div>
  );
}

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
import type { Agreement, Brief, Document, Invoice, Milestone, Phase, Project } from "@/lib/journey";
import {
  cancelPaymentRequest as cancelPaymentRequestFn,
  createPaymentRequest as createPaymentRequestFn,
  setDefaultDepositPercentage as setDefaultDepositPercentageFn,
  setInvoiceDeposit as setInvoiceDepositFn,
} from "@/lib/stripe/server-functions";

export type Offer = Database["public"]["Tables"]["offers"]["Row"];
export type AdminProjectRow =
  Database["public"]["Functions"]["admin_list_projects"]["Returns"][number];

export const adminProjectsKey = ["admin", "projects"] as const;
export const adminRoleKey = ["admin", "role"] as const;

/** Is the signed-in user an admin or a superadmin? Drives the admin nav + sign-out affordance. */
export function useIsAdmin() {
  return useQuery({
    queryKey: adminRoleKey,
    queryFn: async () => {
      const { data: auth } = await supabase.auth.getUser();
      const user = auth.user;
      if (!user) return false;
      const { data } = await supabase.rpc("is_admin_or_above", { _user_id: user.id });
      return Boolean(data);
    },
    staleTime: 60_000,
  });
}

export const superadminRoleKey = ["admin", "role", "superadmin"] as const;

/** Is the signed-in user one of the (at most 2) superadmins? Gates destructive/role-management actions. */
export function useIsSuperadmin() {
  return useQuery({
    queryKey: superadminRoleKey,
    queryFn: async () => {
      const { data: auth } = await supabase.auth.getUser();
      const user = auth.user;
      if (!user) return false;
      const { data } = await supabase.rpc("has_role", { _user_id: user.id, _role: "superadmin" });
      return Boolean(data);
    },
    staleTime: 60_000,
  });
}

export function useAdminProjects() {
  return useQuery({
    queryKey: adminProjectsKey,
    queryFn: async (): Promise<AdminProjectRow[]> => {
      const { data, error } = await supabase.rpc("admin_list_projects");
      if (error) throw error;
      return (data ?? []) as AdminProjectRow[];
    },
    refetchInterval: 30_000,
  });
}

export type AdminProjectDetail = {
  project: Project;
  clientName: string | null;
  milestones: Milestone[];
  invoices: Invoice[];
  documents: Document[];
  brief: Brief | null;
  agreement: Agreement | null;
  offer: Offer | null;
  owner: {
    full_name: string | null;
    email: string | null;
    company: string | null;
    phone: string | null;
  } | null;
};

export function adminProjectKey(projectId: string) {
  return ["admin", "project", projectId] as const;
}

export function useAdminProject(projectId: string) {
  return useQuery({
    queryKey: adminProjectKey(projectId),
    queryFn: async (): Promise<AdminProjectDetail | null> => {
      const { data: project } = await supabase
        .from("projects")
        .select("*, clients(name)")
        .eq("id", projectId)
        .maybeSingle();
      if (!project) return null;

      const [milestones, invoices, documents, brief, agreement, offer, members] = await Promise.all(
        [
          supabase.from("milestones").select("*").eq("project_id", projectId).order("position"),
          supabase.from("invoices").select("*").eq("project_id", projectId).order("due_date"),
          supabase.from("documents").select("*").eq("project_id", projectId).order("created_at"),
          supabase.from("briefs").select("*").eq("project_id", projectId).maybeSingle(),
          supabase.from("agreements").select("*").eq("project_id", projectId).maybeSingle(),
          supabase.from("offers").select("*").eq("project_id", projectId).maybeSingle(),
          supabase.from("project_members").select("user_id").eq("project_id", projectId).limit(1),
        ],
      );

      let owner: AdminProjectDetail["owner"] = null;
      const ownerId = members.data?.[0]?.user_id;
      if (ownerId) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name, email, company, phone")
          .eq("id", ownerId)
          .maybeSingle();
        owner = profile ?? null;
      }

      const typed = project as Project & { clients?: { name: string } | null };
      return {
        project: typed as Project,
        clientName: typed.clients?.name ?? null,
        milestones: (milestones.data ?? []) as Milestone[],
        invoices: (invoices.data ?? []) as Invoice[],
        documents: (documents.data ?? []) as Document[],
        brief: (brief.data ?? null) as Brief | null,
        agreement: (agreement.data ?? null) as Agreement | null,
        offer: (offer.data ?? null) as Offer | null,
        owner,
      };
    },
    refetchInterval: 30_000,
  });
}

function useInvalidateAdmin(projectId?: string) {
  const queryClient = useQueryClient();
  return () => {
    queryClient.invalidateQueries({ queryKey: adminProjectsKey });
    if (projectId) queryClient.invalidateQueries({ queryKey: adminProjectKey(projectId) });
    queryClient.invalidateQueries({ queryKey: ["workspace"] });
  };
}

export function useSaveOffer(projectId: string) {
  const invalidate = useInvalidateAdmin(projectId);
  return useMutation({
    mutationFn: async (input: {
      title: string;
      description: string;
      stripeUrl: string;
      publish?: boolean;
    }) => {
      const { error } = await supabase.rpc("save_offer", {
        _project_id: projectId,
        _title: input.title,
        _description: input.description,
        _stripe_url: input.stripeUrl,
        _publish: input.publish ?? false,
      });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export function useUnpublishOffer(projectId: string) {
  const invalidate = useInvalidateAdmin(projectId);
  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.rpc("unpublish_offer", { _project_id: projectId });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export function useAdminMarkPaid(projectId: string) {
  const invalidate = useInvalidateAdmin(projectId);
  return useMutation({
    mutationFn: async (invoiceId: string) => {
      const { error } = await supabase.rpc("mark_invoice_paid", { _invoice_id: invoiceId });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export function useAdminAdvance(projectId: string) {
  const invalidate = useInvalidateAdmin(projectId);
  return useMutation({
    mutationFn: async (input: {
      phase: Phase;
      waitingOn: "client" | "wayne";
      progress: number;
    }) => {
      const { error } = await supabase.rpc("advance_project", {
        _project_id: projectId,
        _phase: input.phase,
        _waiting_on: input.waitingOn,
        _progress: input.progress,
      });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

/** Set the amount and the Stripe payment link the client will use for one invoice. */
export function useAdminUpdateInvoice(projectId: string) {
  const invalidate = useInvalidateAdmin(projectId);
  return useMutation({
    mutationFn: async (input: { invoiceId: string; amount: number; paymentUrl: string }) => {
      const { error } = await supabase
        .from("invoices")
        .update({
          amount: input.amount,
          payment_url: input.paymentUrl.trim() ? input.paymentUrl.trim() : null,
          status: "waiting",
        })
        .eq("id", input.invoiceId);
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export type ProjectNote = {
  id: string;
  project_id: string;
  author_id: string;
  body: string;
  kind: string;
  created_at: string;
};

export function projectNotesKey(projectId: string) {
  return ["admin", "notes", projectId] as const;
}

/** Internal admin notes + message log attached to one client file. */
export function useProjectNotes(projectId: string) {
  return useQuery({
    queryKey: projectNotesKey(projectId),
    queryFn: async (): Promise<ProjectNote[]> => {
      const { data, error } = await supabase
        .from("project_notes")
        .select("*")
        .eq("project_id", projectId)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as ProjectNote[];
    },
  });
}

export function useAddProjectNote(projectId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: { body: string; kind?: string }) => {
      const { data: auth } = await supabase.auth.getUser();
      const authorId = auth.user?.id;
      if (!authorId) throw new Error("not signed in");
      const { error } = await supabase.from("project_notes").insert({
        project_id: projectId,
        author_id: authorId,
        body: input.body,
        kind: input.kind ?? "note",
      });
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: projectNotesKey(projectId) }),
  });
}

export function useDeleteProjectNote(projectId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (noteId: string) => {
      const { error } = await supabase.from("project_notes").delete().eq("id", noteId);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: projectNotesKey(projectId) }),
  });
}

export type PaymentRib = Database["public"]["Tables"]["payment_ribs"]["Row"];

export const paymentRibsKey = ["admin", "payment-ribs"] as const;

/** All RIBs (active or not) an admin-or-above can see — the IBAN/BIC are never included. */
export function usePaymentRibs() {
  return useQuery({
    queryKey: paymentRibsKey,
    queryFn: async (): Promise<PaymentRib[]> => {
      const { data, error } = await supabase
        .from("payment_ribs")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
    staleTime: 60_000,
  });
}

/** Superadmin-only: create a RIB. The IBAN/BIC are encrypted server-side (Vault) and never returned. */
export function useCreateRib() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: { label: string; holderName: string; iban: string; bic: string }) => {
      const { error } = await supabase.rpc("superadmin_create_rib", {
        _label: input.label,
        _holder_name: input.holderName,
        _iban: input.iban,
        _bic: input.bic,
      });
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: paymentRibsKey }),
  });
}

export function useUpdateRib() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: {
      ribId: string;
      label: string;
      holderName: string;
      iban: string;
      bic: string;
    }) => {
      const { error } = await supabase.rpc("superadmin_update_rib", {
        _rib_id: input.ribId,
        _label: input.label,
        _holder_name: input.holderName,
        _iban: input.iban,
        _bic: input.bic,
      });
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: paymentRibsKey }),
  });
}

export function useSetRibActive() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: { ribId: string; active: boolean }) => {
      const { error } = await supabase.rpc("superadmin_set_rib_active", {
        _rib_id: input.ribId,
        _active: input.active,
      });
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: paymentRibsKey }),
  });
}

export function useDeleteRib() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (ribId: string) => {
      const { error } = await supabase.rpc("superadmin_delete_rib", { _rib_id: ribId });
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: paymentRibsKey }),
  });
}

// --- Stripe deposits & payment requests -------------------------------
// Every payment request — whether settled by Stripe or by bank transfer —
// is one row in `payment_requests` (see useCreatePaymentRequest's `method`
// param below, and payment_ribs above for the encrypted RIB the admin picks
// from when method is "rib").

export type PaymentRequest = Database["public"]["Tables"]["payment_requests"]["Row"];

export function paymentRequestsKey(invoiceId: string) {
  return ["admin", "payment-requests", invoiceId] as const;
}

/** Full payment history for one invoice — never a single overwritten total. */
export function usePaymentRequests(invoiceId: string) {
  return useQuery({
    queryKey: paymentRequestsKey(invoiceId),
    queryFn: async (): Promise<PaymentRequest[]> => {
      const { data, error } = await supabase
        .from("payment_requests")
        .select("*")
        .eq("invoice_id", invoiceId)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });
}

/** Superadmin-only: fix or change the deposit (percentage or fixed amount) required on an invoice. */
export function useSetInvoiceDeposit(projectId: string) {
  const invalidate = useInvalidateAdmin(projectId);
  return useMutation({
    mutationFn: async (input: {
      invoiceId: string;
      depositType: "percentage" | "fixed";
      depositValue: number;
    }) => setInvoiceDepositFn({ data: input }),
    onSuccess: invalidate,
  });
}

export const billingSettingsKey = ["admin", "billing-settings"] as const;

/** Superadmin-only global default deposit percentage. */
export function useBillingSettings() {
  return useQuery({
    queryKey: billingSettingsKey,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("billing_settings")
        .select("*")
        .eq("id", 1)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    staleTime: 60_000,
  });
}

export function useSetDefaultDepositPercentage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (percentage: number) =>
      setDefaultDepositPercentageFn({ data: { percentage } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: billingSettingsKey }),
  });
}

/**
 * Admin action: send a payment request (deposit / extra call / final
 * balance) for a chosen amount. The server recomputes the real remaining
 * balance and rejects anything above it — this hook's `amount` is only a
 * proposal, never authoritative.
 */
export function useCreatePaymentRequest(projectId: string, invoiceId: string) {
  const invalidate = useInvalidateAdmin(projectId);
  const queryClient = useQueryClient();
  return useMutation({
    // `idempotencyKey` must be generated once by the caller (e.g. on compose
    // form mount) and reused across retries/double-clicks of the *same*
    // logical send — generating it here per mutate() call would defeat the
    // DB-level ON CONFLICT dedupe, since every double-click would mint a
    // fresh key. The UI additionally disables the button while pending.
    mutationFn: async (input: {
      amount: number;
      type: "deposit" | "partial" | "balance";
      idempotencyKey: string;
      method?: "stripe" | "rib";
      ribId?: string;
    }) =>
      createPaymentRequestFn({
        data: {
          invoiceId,
          amount: input.amount,
          type: input.type,
          idempotencyKey: input.idempotencyKey,
          method: input.method ?? "stripe",
          ...(input.ribId ? { ribId: input.ribId } : {}),
        },
      }),
    onSuccess: () => {
      invalidate();
      queryClient.invalidateQueries({ queryKey: paymentRequestsKey(invoiceId) });
    },
  });
}

export function useCancelPaymentRequest(projectId: string, invoiceId: string) {
  const invalidate = useInvalidateAdmin(projectId);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (paymentRequestId: string) =>
      cancelPaymentRequestFn({ data: { paymentRequestId } }),
    onSuccess: () => {
      invalidate();
      queryClient.invalidateQueries({ queryKey: paymentRequestsKey(invoiceId) });
    },
  });
}

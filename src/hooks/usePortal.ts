import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database, Json } from "@/integrations/supabase/types";
import type {
  Agreement,
  Brief,
  Document,
  Invoice,
  Milestone,
  Phase,
  Profile,
  Project,
  ProjectLink,
} from "@/lib/journey";
import { getPaymentIntentClientSecret } from "@/lib/stripe/server-functions";

export type Offer = Database["public"]["Tables"]["offers"]["Row"];
export type PaymentRequest = Database["public"]["Tables"]["payment_requests"]["Row"];

export type Workspace = {
  profile: Profile;
  project: Project;
  clientName: string | null;
  milestones: Milestone[];
  invoices: Invoice[];
  documents: Document[];
  links: ProjectLink[];
  brief: Brief | null;
  agreement: Agreement | null;
  offer: Offer | null;
  paymentRequests: PaymentRequest[];
};

async function fetchWorkspace(): Promise<Workspace | null> {
  const { data: auth } = await supabase.auth.getUser();
  const user = auth.user;
  if (!user) return null;

  const [{ data: profile }, { data: projects }] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", user.id).maybeSingle(),
    supabase
      .from("projects")
      .select("*, clients(name)")
      .order("created_at", { ascending: true })
      .limit(1),
  ]);

  const project = projects?.[0] as (Project & { clients?: { name: string } | null }) | undefined;
  if (!profile || !project) return null;

  const [milestones, invoices, documents, links, brief, agreement, offer, paymentRequests] =
    await Promise.all([
      supabase.from("milestones").select("*").eq("project_id", project.id).order("position"),
      supabase.from("invoices").select("*").eq("project_id", project.id).order("due_date"),
      supabase
        .from("documents")
        .select("*")
        .eq("project_id", project.id)
        .order("created_at", { ascending: true }),
      supabase.from("project_links").select("*").eq("project_id", project.id),
      supabase.from("briefs").select("*").eq("project_id", project.id).maybeSingle(),
      supabase.from("agreements").select("*").eq("project_id", project.id).maybeSingle(),
      supabase.from("offers").select("*").eq("project_id", project.id).maybeSingle(),
      supabase
        .from("payment_requests")
        .select("*")
        .eq("project_id", project.id)
        .order("created_at", { ascending: false }),
    ]);

  return {
    profile: profile as Profile,
    project: project as Project,
    clientName: project.clients?.name ?? null,
    milestones: (milestones.data ?? []) as Milestone[],
    invoices: (invoices.data ?? []) as Invoice[],
    documents: (documents.data ?? []) as Document[],
    links: (links.data ?? []) as ProjectLink[],
    brief: (brief.data ?? null) as Brief | null,
    agreement: (agreement.data ?? null) as Agreement | null,
    offer: (offer.data ?? null) as Offer | null,
    paymentRequests: paymentRequests.data ?? [],
  };
}

export const workspaceKey = ["workspace"] as const;

export function useWorkspace() {
  return useQuery({
    queryKey: workspaceKey,
    queryFn: fetchWorkspace,
    staleTime: 5_000,
    // Keeps the journey/progress views in sync while Wayne moves the project forward.
    refetchInterval: 15_000,
    refetchOnWindowFocus: true,
  });
}

function useInvalidate() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: workspaceKey });
}

/** Single progression entry point so the journey stays consistent everywhere. */
export function useAdvance() {
  const invalidate = useInvalidate();
  return useMutation({
    mutationFn: async (input: {
      projectId: string;
      phase: Phase;
      waitingOn: "client" | "wayne";
      progress: number;
    }) => {
      const { error } = await supabase.rpc("advance_project", {
        _project_id: input.projectId,
        _phase: input.phase,
        _waiting_on: input.waitingOn,
        _progress: input.progress,
      });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export function useSignAgreement() {
  const invalidate = useInvalidate();
  return useMutation({
    mutationFn: async (input: { projectId: string; name: string }) => {
      const { error } = await supabase.rpc("sign_agreement", {
        _project_id: input.projectId,
        _name: input.name,
      });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export function useSaveBrief() {
  const invalidate = useInvalidate();
  return useMutation({
    mutationFn: async (input: {
      projectId: string;
      answers: Record<string, Json>;
      step: number;
      projectType?: string | null;
      categories?: string[];
      unsure?: boolean;
    }) => {
      const { error } = await supabase
        .from("briefs")
        .update({
          answers: input.answers,
          current_step: input.step,
          ...(input.projectType !== undefined ? { project_type: input.projectType } : {}),
          ...(input.categories !== undefined ? { categories: input.categories } : {}),
          ...(input.unsure !== undefined ? { unsure: input.unsure } : {}),
        })
        .eq("project_id", input.projectId);
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export function useSubmitBrief() {
  const invalidate = useInvalidate();
  return useMutation({
    mutationFn: async (input: {
      projectId: string;
      answers: Record<string, Json>;
      projectType?: string | null;
      categories?: string[];
      unsure?: boolean;
    }) => {
      const { error } = await supabase.rpc("submit_brief", {
        _project_id: input.projectId,
        _answers: input.answers,
        _project_type: input.projectType ?? null,
        _categories: input.categories ?? null,
        _unsure: input.unsure ?? false,
      });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export function useSaveWelcomeChecklist() {
  const invalidate = useInvalidate();
  return useMutation({
    mutationFn: async (input: { projectId: string; checklist: Record<string, boolean> }) => {
      const { error } = await supabase.rpc("save_welcome_checklist", {
        _project_id: input.projectId,
        _checklist: input.checklist as unknown as Json,
      });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export function useSaveBusinessProfile() {
  const invalidate = useInvalidate();
  return useMutation({
    mutationFn: async (input: {
      projectId: string;
      profile: Record<string, string>;
      submit?: boolean;
    }) => {
      const { error } = await supabase.rpc("save_business_profile", {
        _project_id: input.projectId,
        _profile: input.profile as unknown as Json,
        _submit: input.submit ?? false,
      });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export function useCompleteWelcome() {
  const invalidate = useInvalidate();
  return useMutation({
    mutationFn: async (projectId: string) => {
      const { error } = await supabase.rpc("complete_welcome", { _project_id: projectId });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

/** Only succeeds while the deposit is unpaid — the RPC enforces it. */
export function useReopenBrief() {
  const invalidate = useInvalidate();
  return useMutation({
    mutationFn: async (projectId: string) => {
      const { error } = await supabase.rpc("reopen_brief", { _project_id: projectId });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export function useUpdateProfile() {
  const invalidate = useInvalidate();
  return useMutation({
    mutationFn: async (input: { id: string; values: Partial<Profile> }) => {
      const { error } = await supabase.from("profiles").update(input.values).eq("id", input.id);
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

export function useSubmitFeedback() {
  const invalidate = useInvalidate();
  return useMutation({
    mutationFn: async (input: {
      projectId: string;
      userId: string;
      rating: number;
      comment: string;
      allowTestimonial: boolean;
    }) => {
      const { error } = await supabase.from("feedback").insert({
        project_id: input.projectId,
        user_id: input.userId,
        rating: input.rating,
        comment: input.comment,
        allow_testimonial: input.allowTestimonial,
      });
      if (error) throw error;
    },
    onSuccess: invalidate,
  });
}

/**
 * Opens the payment form for one request. The client_secret is transient —
 * never persisted client-side beyond this in-memory query — and the server
 * refuses to hand one out for a request that isn't still `pending`.
 */
export function usePaymentIntentSecret(paymentRequestId: string | undefined) {
  return useQuery({
    queryKey: ["payment-intent-secret", paymentRequestId],
    queryFn: async () => {
      if (!paymentRequestId) return null;
      return getPaymentIntentClientSecret({ data: { paymentRequestId } });
    },
    enabled: Boolean(paymentRequestId),
    staleTime: 0,
    gcTime: 0,
    retry: false,
  });
}

export function usePackages() {
  return useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const { data } = await supabase
        .from("packages")
        .select("*")
        .eq("active", true)
        .order("position");
      return data ?? [];
    },
  });
}

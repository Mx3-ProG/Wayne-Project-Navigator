import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { stripeClient, toStripeMinorUnits } from "@/lib/stripe/client";

/** Superadmin-only: fix or change the deposit required on one invoice. */
export const setInvoiceDeposit = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z
      .object({
        invoiceId: z.string().uuid(),
        depositType: z.enum(["percentage", "fixed"]),
        depositValue: z.number().positive(),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.rpc("set_invoice_deposit", {
      _invoice_id: data.invoiceId,
      _deposit_type: data.depositType,
      _deposit_value: data.depositValue,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/** Superadmin-only: change the global default deposit percentage. */
export const setDefaultDepositPercentage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => z.object({ percentage: z.number().positive() }).parse(data))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.rpc("set_default_deposit_percentage", {
      _pct: data.percentage,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/**
 * Admin action: send a payment request (deposit, extra call, or final
 * balance) for a given amount. The amount is re-validated server-side by
 * `create_payment_request` against the real remaining balance — this
 * function never trusts the caller's number beyond that RPC check.
 *
 * Two methods: "stripe" (default — creates a PaymentIntent, emails a pay
 * link) or "rib" (emails the chosen bank transfer details instead; no
 * PaymentIntent is ever created, and the request is settled manually).
 */
export const createPaymentRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z
      .object({
        invoiceId: z.string().uuid(),
        amount: z.number().positive(),
        type: z.enum(["deposit", "partial", "balance"]),
        idempotencyKey: z.string().min(8).max(200),
        method: z.enum(["stripe", "rib"]).default("stripe"),
        ribId: z.string().uuid().optional(),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    if (data.method === "rib" && !data.ribId) {
      throw new Error("ribId is required when method is rib");
    }

    const { data: requestId, error } = await context.supabase.rpc("create_payment_request", {
      _invoice_id: data.invoiceId,
      _amount: data.amount,
      _type: data.type,
      _idempotency_key: data.idempotencyKey,
      _method: data.method,
      ...(data.ribId ? { _rib_id: data.ribId } : {}),
    });
    if (error) throw new Error(error.message);

    const { data: request, error: fetchError } = await context.supabase
      .from("payment_requests")
      .select(
        "id, amount, currency, project_id, invoice_id, method, rib_id, stripe_payment_intent_id",
      )
      .eq("id", requestId as string)
      .single();
    if (fetchError || !request) throw new Error("Payment request could not be loaded");

    // Already has a Stripe PaymentIntent (idempotent replay of the same
    // idempotencyKey on a double-click) — nothing left to do.
    if (request.stripe_payment_intent_id) {
      return { paymentRequestId: request.id };
    }

    if (request.method === "rib") {
      const { data: invoice } = await context.supabase
        .from("invoices")
        .select("label")
        .eq("id", request.invoice_id)
        .single();

      const { data: owner } = await context.supabase
        .from("project_members")
        .select("user_id")
        .eq("project_id", request.project_id)
        .limit(1)
        .maybeSingle();

      const { data: rib, error: ribError } = await context.supabase
        .rpc("get_rib_details", {
          _rib_id: request.rib_id as string,
          _project_id: request.project_id,
        })
        .single();
      if (ribError || !rib) throw new Error("RIB not found or inactive");

      if (owner?.user_id) {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: profile } = await supabaseAdmin
          .from("profiles")
          .select("email, full_name")
          .eq("id", owner.user_id)
          .maybeSingle();
        if (profile?.email) {
          const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
          await sendTemplateEmail("payment-request", profile.email, {
            templateData: {
              clientName: profile.full_name,
              invoiceLabel: invoice?.label ?? "",
              amount: request.amount,
              method: "rib",
              ribLabel: rib.label,
              ribHolderName: rib.holder_name,
              ribIban: rib.iban,
              ribBic: rib.bic,
            },
            idempotencyKey: `payment-request-rib-${request.id}`,
          });
        }
      }

      return { paymentRequestId: request.id };
    }

    const { data: project } = await context.supabase
      .from("projects")
      .select("client_id, name")
      .eq("id", request.project_id)
      .single();
    if (!project) throw new Error("Project not found");

    const { data: client } = await context.supabase
      .from("clients")
      .select("id, name, stripe_customer_id")
      .eq("id", project.client_id)
      .single();
    if (!client) throw new Error("Client not found");

    const stripe = stripeClient();
    let stripeCustomerId = client.stripe_customer_id;
    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        name: client.name,
        metadata: { client_id: client.id },
      });
      stripeCustomerId = customer.id;
      await context.supabase
        .from("clients")
        .update({ stripe_customer_id: stripeCustomerId })
        .eq("id", client.id);
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: toStripeMinorUnits(request.amount, request.currency),
      currency: request.currency,
      customer: stripeCustomerId,
      automatic_payment_methods: { enabled: true },
      metadata: {
        payment_request_id: request.id,
        invoice_id: request.invoice_id,
        project_id: request.project_id,
        client_id: client.id,
      },
    });

    // Narrow, non-financial linking write. `payment_requests` intentionally
    // has no UPDATE grant for `authenticated` (amount/status must never be
    // client-writable) — this server function already proved the caller is
    // an authorized project admin via `create_payment_request` succeeding,
    // so using the service-role client here only to attach the Stripe id is
    // safe and matches that already-established authorization.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin
      .from("payment_requests")
      .update({ stripe_payment_intent_id: paymentIntent.id })
      .eq("id", request.id);

    // Best-effort notification — never blocks the request from being created.
    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      const { data: owner } = await context.supabase
        .from("project_members")
        .select("user_id")
        .eq("project_id", request.project_id)
        .limit(1)
        .maybeSingle();
      if (owner?.user_id) {
        const { data: profile } = await supabaseAdmin
          .from("profiles")
          .select("email, full_name")
          .eq("id", owner.user_id)
          .maybeSingle();
        if (profile?.email) {
          await sendTemplateEmail("payment-request-created", profile.email, {
            templateData: {
              name: profile.full_name,
              amount: request.amount,
              currency: request.currency,
              projectName: project.name,
              payUrl: `${appOrigin()}/pay/${request.id}`,
            },
            idempotencyKey: `payment-request-${request.id}`,
          });
        }
      }
    } catch (emailError) {
      console.error("[payment-request] notification email failed", emailError);
    }

    return { paymentRequestId: request.id };
  });

function appOrigin(): string {
  return process.env["PUBLIC_APP_URL"] || "http://localhost:8080";
}

/** Admin action: cancel a payment request that hasn't been paid yet. */
export const cancelPaymentRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => z.object({ paymentRequestId: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.rpc("cancel_payment_request", {
      _id: data.paymentRequestId,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/**
 * Client action: open the payment form for one request. Returns only a
 * transient Stripe client_secret (never persisted) — refuses if the request
 * is not in a payable state, so a settled/canceled request can't be paid
 * twice.
 */
export const getPaymentIntentClientSecret = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => z.object({ paymentRequestId: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: request, error } = await context.supabase
      .from("payment_requests")
      .select("id, amount, currency, status, stripe_payment_intent_id, type")
      .eq("id", data.paymentRequestId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!request) throw new Error("Payment request not found");
    if (request.status !== "pending") {
      return {
        status: request.status as string,
        clientSecret: null,
        amount: request.amount,
        currency: request.currency,
      };
    }
    if (!request.stripe_payment_intent_id) {
      throw new Error("This payment request is not ready yet");
    }

    const stripe = stripeClient();
    const paymentIntent = await stripe.paymentIntents.retrieve(request.stripe_payment_intent_id);
    return {
      status: request.status as string,
      clientSecret: paymentIntent.client_secret,
      amount: request.amount,
      currency: request.currency,
    };
  });

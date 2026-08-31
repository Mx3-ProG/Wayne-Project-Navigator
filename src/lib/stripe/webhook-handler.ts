import { stripeClient } from "@/lib/stripe/client";

/**
 * The sole source of truth for payment confirmation. Never trust a frontend
 * `success=true` redirect — only a cryptographically verified Stripe event
 * reaching this handler ever settles a payment_request.
 */
export async function handleStripeWebhook(request: Request): Promise<Response> {
  const webhookSecret = process.env["STRIPE_WEBHOOK_SECRET"];
  if (!webhookSecret) {
    console.error("[stripe webhook] STRIPE_WEBHOOK_SECRET is not configured");
    return new Response("Webhook not configured", { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return new Response("Missing signature", { status: 400 });
  }

  // Raw bytes only — signature verification happens over the exact wire body,
  // never a re-serialized/parsed copy.
  const rawBody = await request.text();

  const stripe = stripeClient();
  let event: import("stripe").Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error("[stripe webhook] signature verification failed", error);
    return new Response("Invalid signature", { status: 400 });
  }

  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  // Idempotency: an already-processed event.id is a no-op, whether it's a
  // genuine Stripe retry or a manual "resend" from the dashboard.
  const { data: isNew, error: recordError } = await supabaseAdmin.rpc("record_stripe_event", {
    _id: event.id,
    _type: event.type,
    _payload: event as unknown as import("@/integrations/supabase/types").Json,
  });
  if (recordError) {
    console.error("[stripe webhook] failed to record event", recordError.message);
    return new Response("Internal error", { status: 500 });
  }
  if (!isNew) {
    return new Response(JSON.stringify({ received: true, duplicate: true }), { status: 200 });
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object;
        await supabaseAdmin.rpc("service_confirm_payment_request", {
          _payment_intent_id: paymentIntent.id,
        });
        break;
      }
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object;
        await supabaseAdmin.rpc("service_fail_payment_request", {
          _payment_intent_id: paymentIntent.id,
        });
        break;
      }
      case "payment_intent.canceled": {
        const paymentIntent = event.data.object;
        await supabaseAdmin.rpc("service_cancel_payment_request_by_pi", {
          _payment_intent_id: paymentIntent.id,
        });
        break;
      }
      case "charge.refunded": {
        const charge = event.data.object;
        const paymentIntentId =
          typeof charge.payment_intent === "string"
            ? charge.payment_intent
            : charge.payment_intent?.id;
        if (paymentIntentId) {
          await supabaseAdmin.rpc("service_refund_payment_request", {
            _payment_intent_id: paymentIntentId,
          });
        }
        break;
      }
      default:
        // Unhandled event types are fine to ignore — they're still recorded
        // above so a replay of the same event.id stays a no-op.
        break;
    }
  } catch (error) {
    // Never log payload/card data — only the event type + id, which carry no
    // sensitive banking information.
    console.error(`[stripe webhook] processing failed for ${event.type} (${event.id})`, error);
    return new Response("Internal error", { status: 500 });
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}

import Stripe from "stripe";

// Server-only. Uses the fetch-based HTTP client + async webhook verification
// (Web Crypto) so this works whether the deployed function runs on Node or an
// edge/worker runtime — this repo builds with a `cloudflare-module` Nitro
// preset while deploying to Vercel, so don't assume either runtime.
let _stripe: Stripe | undefined;

export function stripeClient(): Stripe {
  const secretKey = process.env["STRIPE_SECRET_KEY"];
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  if (!_stripe) {
    _stripe = new Stripe(secretKey, {
      httpClient: Stripe.createFetchHttpClient(),
      apiVersion: "2026-08-26.dahlia",
    });
  }
  return _stripe;
}

/** Converts a euro NUMERIC amount (never a float chain — one rounding step) into Stripe's integer minor units. */
export function toStripeMinorUnits(amount: number, currency: string): number {
  const zeroDecimal = new Set(["jpy", "krw", "vnd"]);
  const factor = zeroDecimal.has(currency.toLowerCase()) ? 1 : 100;
  return Math.round(amount * factor);
}

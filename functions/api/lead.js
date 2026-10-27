// Cloudflare Pages Function: POST /api/lead
// Replaces the Manus tRPC `leads.submit` mutation.
//  1. Validates input (same rules as the old zod schema) + honeypot.
//  2. Forwards the lead to REsimpli exactly like the old server code.
//  3. Emails a copy to the owner via a pluggable provider (env EMAIL_PROVIDER).
//
// Environment variables (Pages project > Settings > Variables & Secrets):
//   RESIMPLI_API_TOKEN      (secret, required to forward leads to REsimpli)
//   RESIMPLI_WEBFORM_LINK   (optional, defaults to the current form id)
//   EMAIL_PROVIDER          "resend" | "mailchannels" | "webhook" | unset (no email)
//   EMAIL_API_KEY           (secret; Resend API key, or bearer token for webhook)
//   EMAIL_WEBHOOK_URL       (for EMAIL_PROVIDER=webhook, e.g. a Zapier/Make hook)
//   LEAD_EMAIL_TO           default jack@cashreadyhomeshudsonvalley.com
//   LEAD_EMAIL_FROM         e.g. "Website Leads <leads@cashreadyhomeshudsonvalley.com>"

const DEFAULT_WEBFORM_LINK = "6977ca6a5c1fcabc2e8dcb3e";
const RESIMPLI_URL = "https://live-api.resimpli.com/api/v4/webForm/createLead";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export function validateLead(body) {
  const errors = {};
  const str = v => (typeof v === "string" ? v.trim() : "");
  const lead = {
    propertyAddress: str(body.propertyAddress).slice(0, 500),
    fullName: str(body.fullName).slice(0, 255),
    email: str(body.email).slice(0, 320),
    phone: str(body.phone).slice(0, 30),
    smsConsent: body.smsConsent === true,
    sourcePage: str(body.sourcePage).slice(0, 500) || "/",
  };
  if (lead.propertyAddress.length < 5) errors.propertyAddress = "Please enter a valid property address";
  if (lead.fullName.length < 2) errors.fullName = "Please enter your full name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) errors.email = "Please enter a valid email address";
  if (lead.phone.length < 10 || lead.phone.replace(/\D/g, "").length < 10)
    errors.phone = "Please enter a valid phone number";
  return { lead, errors };
}

export async function sendToResimpli(lead, env, fetchImpl = fetch) {
  if (!env.RESIMPLI_API_TOKEN) {
    console.error("[REsimpli] RESIMPLI_API_TOKEN not set; lead not forwarded");
    return { ok: false, reason: "not-configured" };
  }
  try {
    const res = await fetchImpl(RESIMPLI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        webFormLink: env.RESIMPLI_WEBFORM_LINK || DEFAULT_WEBFORM_LINK,
        Authorization: env.RESIMPLI_API_TOKEN,
      },
      body: JSON.stringify({
        ownerName1: lead.fullName,
        phoneNumber: lead.phone.replace(/\D/g, ""),
        email: lead.email,
        address: lead.propertyAddress,
      }),
    });
    if (!res.ok) {
      console.error("[REsimpli] Failed to create lead:", res.status, await res.text());
      return { ok: false, reason: `http-${res.status}` };
    }
    const data = await res.json().catch(() => ({}));
    if (data.statusCode !== 200) {
      console.error("[REsimpli] API error:", data.message);
      return { ok: false, reason: "api-error" };
    }
    return { ok: true };
  } catch (err) {
    console.error("[REsimpli] Exception sending lead:", err);
    return { ok: false, reason: "exception" };
  }
}

function leadText(lead) {
  return `New seller lead submitted!

Property: ${lead.propertyAddress}
Name: ${lead.fullName}
Email: ${lead.email}
Phone: ${lead.phone}
SMS Consent: ${lead.smsConsent ? "Yes" : "No"}
Source Page: ${lead.sourcePage}
Submitted: ${new Date().toISOString()}`;
}

export async function sendLeadEmail(lead, env, fetchImpl = fetch) {
  const provider = (env.EMAIL_PROVIDER || "").toLowerCase();
  if (!provider) return { ok: false, reason: "not-configured" };
  const to = env.LEAD_EMAIL_TO || "jack@cashreadyhomeshudsonvalley.com";
  const from = env.LEAD_EMAIL_FROM || "Website Leads <leads@cashreadyhomeshudsonvalley.com>";
  const subject = `New Lead: ${lead.fullName}`;
  const text = leadText(lead);
  try {
    let res;
    if (provider === "resend") {
      res = await fetchImpl("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${env.EMAIL_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: [to], subject, text, reply_to: lead.email }),
      });
    } else if (provider === "mailchannels") {
      const m = from.match(/^(.*)<(.+)>$/);
      res = await fetchImpl("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(env.EMAIL_API_KEY ? { "X-Api-Key": env.EMAIL_API_KEY } : {}) },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: m ? { email: m[2].trim(), name: m[1].trim() } : { email: from },
          reply_to: { email: lead.email },
          subject,
          content: [{ type: "text/plain", value: text }],
        }),
      });
    } else if (provider === "webhook") {
      res = await fetchImpl(env.EMAIL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(env.EMAIL_API_KEY ? { Authorization: `Bearer ${env.EMAIL_API_KEY}` } : {}) },
        body: JSON.stringify({ to, subject, text, lead }),
      });
    } else {
      console.error("[Email] Unknown EMAIL_PROVIDER:", provider);
      return { ok: false, reason: "unknown-provider" };
    }
    if (!res.ok) {
      console.error("[Email] Send failed:", res.status, await res.text());
      return { ok: false, reason: `http-${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("[Email] Exception:", err);
    return { ok: false, reason: "exception" };
  }
}

export async function onRequestPost({ request, env, waitUntil }) {
  let body;
  try {
    const type = request.headers.get("content-type") || "";
    body = type.includes("application/json")
      ? await request.json()
      : Object.fromEntries(await request.formData());
  } catch {
    return json({ success: false, error: "Invalid request body" }, 400);
  }
  // Honeypot: real visitors never see the "website" field. Pretend success for bots.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ success: true });
  }
  const { lead, errors } = validateLead(body || {});
  if (Object.keys(errors).length) {
    return json({ success: false, error: Object.values(errors)[0], errors }, 400);
  }

  // Email copy runs in the background; REsimpli is awaited (as before).
  const emailP = sendLeadEmail(lead, env);
  if (waitUntil) waitUntil(emailP);
  const crm = await sendToResimpli(lead, env);
  if (!waitUntil) await emailP;
  if (!crm.ok) console.error("[Lead] Not in REsimpli:", leadText(lead));

  // Like the old code, the visitor sees success even if REsimpli fails
  // (the lead is still logged and emailed).
  return json({ success: true });
}

export function onRequest({ request }) {
  if (request.method === "OPTIONS") return new Response(null, { status: 204 });
  return json({ success: false, error: "Method not allowed" }, 405);
}

// Offline test of functions/api/lead.js with a mocked fetch (no network calls).
import assert from "node:assert/strict";
import { validateLead, sendToResimpli, sendLeadEmail } from "../functions/api/lead.js";

const calls = [];
const mock = async (url, init) => { calls.push({ url, init }); return new Response(JSON.stringify({ statusCode: 200, message: "ok" }), { status: 200 }); };
const { lead, errors } = validateLead({ propertyAddress: "12 Main St", fullName: "Ann Lee", email: "a@b.co", phone: "(845) 555-0100", smsConsent: true });
assert.deepEqual(errors, {});
assert.equal((await sendToResimpli(lead, {}, mock)).reason, "not-configured");
assert.equal(calls.length, 0);
assert.ok((await sendToResimpli(lead, { RESIMPLI_API_TOKEN: "TEST" }, mock)).ok);
const c = calls[0];
assert.equal(c.url, "https://live-api.resimpli.com/api/v4/webForm/createLead");
assert.equal(c.init.headers.webFormLink, "6977ca6a5c1fcabc2e8dcb3e");
assert.equal(c.init.headers.Authorization, "TEST");
assert.deepEqual(JSON.parse(c.init.body), { ownerName1: "Ann Lee", phoneNumber: "8455550100", email: "a@b.co", address: "12 Main St" });
assert.equal((await sendLeadEmail(lead, {}, mock)).reason, "not-configured");
for (const p of ["resend", "mailchannels", "webhook"]) assert.ok((await sendLeadEmail(lead, { EMAIL_PROVIDER: p, EMAIL_API_KEY: "k", EMAIL_WEBHOOK_URL: "https://example.invalid/hook" }, mock)).ok, p);
console.log("lead function tests passed; mocked calls:", calls.map(x => x.url).join(", "));

// Offline test of functions/api/lead.js with a mocked fetch (no network calls).
import assert from "node:assert/strict";
import { validateLead, sendToResimpli, sendLeadEmail, splitName } from "../functions/api/lead.js";

const calls = [];
const mock = async (url, init) => {
  calls.push({ url, init });
  return new Response(JSON.stringify({ statusCode: 200, message: "ok", data: { _id: "mock-lead-id" } }), {
    status: 200,
  });
};

assert.deepEqual(splitName("Ann Lee"), { firstName: "Ann", lastName: "Lee" });
assert.deepEqual(splitName("Madonna"), { firstName: "Madonna", lastName: "" });
assert.deepEqual(splitName("Mary Ann Smith"), { firstName: "Mary", lastName: "Ann Smith" });

const { lead, errors } = validateLead({
  propertyAddress: "12 Main St",
  fullName: "Ann Lee",
  email: "a@b.co",
  phone: "(845) 555-0100",
  smsConsent: true,
});
assert.deepEqual(errors, {});
assert.equal((await sendToResimpli(lead, {}, mock)).reason, "not-configured");
assert.equal(calls.length, 0);

const sent = await sendToResimpli(lead, { RESIMPLI_API_TOKEN: "TEST" }, mock);
assert.ok(sent.ok);
assert.equal(sent.id, "mock-lead-id");
const c = calls[0];
assert.equal(c.url, "https://api.resimpli.com/api/v6/openapi/lead/add");
assert.equal(c.init.headers.Authorization, "TEST");
assert.equal(c.init.headers["Content-Type"], "application/json");
assert.equal(c.init.headers.webFormLink, undefined);
const body = JSON.parse(c.init.body);
assert.equal(body.propertyType, "residential");
assert.equal(body.address, "12 Main St");
assert.equal(body.contactDetails.firstName, "Ann");
assert.equal(body.contactDetails.lastName, "Lee");
assert.deepEqual(body.contactDetails.phoneNumbers, [{ phoneNumber: "8455550100", isPrimary: true }]);
assert.deepEqual(body.contactDetails.emails, [{ email: "a@b.co", isPrimary: true }]);
assert.equal(body.marketingCampignId, "6aa4e257ab4bfde2eb309bcf");
assert.equal(body.marketId, "6966fe0079f37bfe42a74f3c");
assert.equal(body.pipelineId, "6aa4dc07d18014f8fc590a12");
assert.equal(body.mainStatusId, "6aa4dc07d18014f8fc590a13");

calls.length = 0;
assert.ok(
  (
    await sendToResimpli(
      lead,
      {
        RESIMPLI_API_TOKEN: "TEST",
        RESIMPLI_API_URL: "https://example.invalid/custom",
        RESIMPLI_MARKETING_CAMPAIGN_ID: "camp",
        RESIMPLI_MARKET_ID: "mkt",
        RESIMPLI_PIPELINE_ID: "pipe",
        RESIMPLI_MAIN_STATUS_ID: "stat",
      },
      mock
    )
  ).ok
);
assert.equal(calls[0].url, "https://example.invalid/custom");
const b2 = JSON.parse(calls[0].init.body);
assert.equal(b2.marketingCampignId, "camp");
assert.equal(b2.marketId, "mkt");
assert.equal(b2.pipelineId, "pipe");
assert.equal(b2.mainStatusId, "stat");

assert.equal((await sendLeadEmail(lead, {}, mock)).reason, "not-configured");
for (const p of ["resend", "mailchannels", "webhook"])
  assert.ok(
    (
      await sendLeadEmail(
        lead,
        { EMAIL_PROVIDER: p, EMAIL_API_KEY: "k", EMAIL_WEBHOOK_URL: "https://example.invalid/hook" },
        mock
      )
    ).ok,
    p
  );

console.log(
  "lead function tests passed; mocked calls:",
  calls.map(x => x.url).join(", ")
);

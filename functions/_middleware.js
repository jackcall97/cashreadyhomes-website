// Canonicalize www → apex for the live custom domain only.
// Pages `_redirects` cannot match hostnames, so host redirects live here.
// Preview / pages.dev hosts are intentionally left alone.
const WWW_HOST = "www.cashreadyhomeshudsonvalley.com";
const APEX_HOST = "cashreadyhomeshudsonvalley.com";

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const hostHeader = context.request.headers.get("host") || "";
  const host = hostHeader.split(":")[0].toLowerCase() || url.hostname.toLowerCase();

  if (host === WWW_HOST) {
    url.protocol = "https:";
    url.hostname = APEX_HOST;
    // pathname + search preserved by mutating hostname only
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}

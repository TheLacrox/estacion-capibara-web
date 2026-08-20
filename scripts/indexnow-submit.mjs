#!/usr/bin/env node
/**
 * Submit URLs to IndexNow (Bing/Yandex/etc.) after a deploy.
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs url1 url2 ...   # explicit URLs
 *   node scripts/indexnow-submit.mjs --sitemap       # every URL in the live sitemap
 *
 * The key file is served from https://estacioncapibara.com/<KEY>.txt
 * (committed under public/).
 */

const HOST = "estacioncapibara.com";
const KEY = "9baa0ee0ac847828af0f5a2bf009278d";
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function urlsFromSitemap() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urlList = args.includes("--sitemap")
  ? await urlsFromSitemap()
  : args.filter((a) => a.startsWith("http"));

if (urlList.length === 0) {
  console.error("No URLs to submit. Pass URLs or --sitemap.");
  process.exit(1);
}

// IndexNow accepts up to 10,000 URLs per POST.
const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}

import type { APIRoute } from "astro";

// Hand-rolled instead of @astrojs/sitemap — only 2 URLs exist, and this way
// the domain always tracks astro.config.mjs's `site` value with nothing to
// keep in sync by hand. Prerendered to a static file at build time since the
// whole project is static output.
export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? "").replace(/\/$/, "");
  const enURL = `${base}/`;
  const thURL = `${base}/th/`;

  const alternates = `    <xhtml:link rel="alternate" hreflang="en" href="${enURL}" />
    <xhtml:link rel="alternate" hreflang="th" href="${thURL}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${enURL}" />`;

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${enURL}</loc>
${alternates}
  </url>
  <url>
    <loc>${thURL}</loc>
${alternates}
  </url>
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

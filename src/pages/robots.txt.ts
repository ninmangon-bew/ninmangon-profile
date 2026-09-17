import type { APIRoute } from "astro";

// Same reasoning as sitemap.xml.ts — hand-rolled so the Sitemap: line always
// tracks astro.config.mjs's `site` value instead of a hardcoded domain.
export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? "").replace(/\/$/, "");

  const body = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

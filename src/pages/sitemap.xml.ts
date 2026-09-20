import type { APIRoute } from 'astro';
import { PORTFOLIO_PROJECTS } from '../content/copy';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? '').replace(/\/$/, '');
  const paths = ['/', '/portfolio/', ...PORTFOLIO_PROJECTS.map(p => `/portfolio/${p.slug}/`)];
  const urls = paths.map(path => {
    const en = `${base}${path}`;
    const th = `${base}/th${path}`;
    const alternates = `<xhtml:link rel="alternate" hreflang="en" href="${en}" />
      <xhtml:link rel="alternate" hreflang="th" href="${th}" />
      <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />`;
    return [en, th].map(url => `<url><loc>${url}</loc>${alternates}</url>`).join('\n');
  }).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

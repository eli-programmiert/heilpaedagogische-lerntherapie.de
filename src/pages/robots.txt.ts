import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site).href;
  
  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    // Werkzeugseiten (Komponenten-Galerie, QA) sind nur lokal vorhanden;
    // Disallow schützt sie zusätzlich, falls sie doch im Build landen.
    'Disallow: /dev/',
    'Disallow: /qa/',
    '',
    `Sitemap: ${sitemapUrl}`
  ].join('\n');

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

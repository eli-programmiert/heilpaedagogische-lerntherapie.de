import fs from 'node:fs';
import path from 'node:path';

const isClientMode = process.argv.includes('--client');
const root = process.cwd();
const htmlPath = path.join(root, 'dist/index.html');
const seoPath = path.join(root, 'src/data/global/seo.json');
const siteConfigPath = path.join(root, 'site.config.mjs');

function fail(message: string): never {
  console.error(`check:seo: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(htmlPath)) fail('dist/index.html is missing. Run npm run build first.');

const html = fs.readFileSync(htmlPath, 'utf8');
const seo = JSON.parse(fs.readFileSync(seoPath, 'utf8')) as {
  index?: boolean;
  follow?: boolean;
};
const siteConfig = fs.readFileSync(siteConfigPath, 'utf8');
const siteUrl = siteConfig.match(/export const SITE_URL = ['"]([^'"]+)['"]/i)?.[1]?.replace(/\/$/, '') ?? '';

const getMeta = (attribute: 'name' | 'property', value: string): string => {
  const pattern = new RegExp(String.raw`<meta\s+[^>]*${attribute}=["']${value}["'][^>]*>`, 'i');
  return html.match(pattern)?.[0] ?? '';
};

const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim() ?? '';
const description = getMeta('name', 'description');
const robots = getMeta('name', 'robots');
const canonical = html.match(/<link\s+rel=["']canonical["'][^>]*>/i)?.[0] ?? '';
const ogUrl = getMeta('property', 'og:url');
const ogImage = getMeta('property', 'og:image');
const schemaCount = (html.match(/application\/ld\+json/gi) ?? []).length;

if (!title) fail('Page title is missing.');
if (!description) fail('Meta description is missing.');
if (!canonical) fail('Canonical link is missing.');
if (!ogUrl) fail('og:url is missing.');
if (!ogImage) fail('og:image is missing.');
if (schemaCount === 0) fail('JSON-LD schema is missing.');

const robotsContent = robots.match(/content=["']([^"']+)["']/i)?.[1] ?? '';
const shouldIndex = isClientMode || seo.index === true;
const expectedIndex = shouldIndex ? 'index' : 'noindex';
const expectedFollow = seo.follow !== false ? 'follow' : 'nofollow';

if (!robotsContent.includes(expectedIndex) || !robotsContent.includes(expectedFollow)) {
  fail(`Wrong robots policy. Expected "${expectedIndex}, ${expectedFollow}", got "${robotsContent}".`);
}

if (isClientMode && !seo.index) {
  fail('Client mode requires seo.index=true in src/data/global/seo.json.');
}

if (!/^https?:\/\//i.test(siteUrl)) fail('SITE_URL in site.config.mjs must be a full HTTP or HTTPS URL.');
if (!canonical.includes(siteUrl)) fail(`Canonical does not point to SITE_URL (${siteUrl}).`);

// Twitter/X: without twitter:card there is no card preview when sharing.
const twitterCard = getMeta('name', 'twitter:card');
if (!twitterCard) fail('Meta twitter:card is missing.');

// og:image: SVG does not render on Facebook, LinkedIn or Twitter.
const ogImageContent = ogImage.match(/content=["']([^"']+)["']/i)?.[1] ?? '';
// og:image must be absolute: social platforms ignore relative paths.
if (!ogImageContent.startsWith('http')) {
  fail('[og-image-relative] og:image must be an absolute URL (https://...).');
}
if (ogImageContent.endsWith('.svg')) {
  fail('og:image points to an SVG file, which social platforms do not render. Use a PNG/JPG of at least 1200x630.');
}

// Sitemap: lastmod gives Google a signal of how fresh the content is.
const sitemapCandidates = ['sitemap-0.xml', 'sitemap-index.xml'];
const sitemapFile = sitemapCandidates
  .map((name) => path.join(root, 'dist', name))
  .find((p) => fs.existsSync(p));
if (sitemapFile) {
  const sitemap = fs.readFileSync(sitemapFile, 'utf8');
  if (!sitemap.includes('<lastmod>')) fail('Sitemap has no lastmod (no freshness signal for Google).');
} else {
  fail('Neither dist/sitemap-0.xml nor dist/sitemap-index.xml exists. Check the @astrojs/sitemap integration.');
}

console.log(`check:seo: OK, ${isClientMode ? 'live site is indexable' : `robots policy matches seo.json`}, ${schemaCount} schema`);

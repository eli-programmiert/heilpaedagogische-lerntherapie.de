// Single source of truth for site / client project configuration.
// Edit THIS file when changing domain.
// Custom domain on GitHub Pages, so the site is served from the root path.
export const SITE_URL = 'https://heilpaedagogische-lerntherapie.de/';
export const ACTIVE_TEMPLATE = 'nova';

// The practice website is German only.
export const SITE_LOCALE = 'de';

// BUILD_SCOPE — which pages and media go into the build (dist/).
export const BUILD_SCOPE = {
  // Allowlist of paths to keep in build. Empty [] = all.
  // 404 is always kept regardless of this list.
  pages: ['/', '/heilpaedagogik', '/lerntherapie', '/angebot', '/ueber-mich', '/preise', '/kontakt', '/impressum', '/datenschutz'],
  // Whether to clean unused media (images, videos, fonts) from dist/.
  images: true,
};

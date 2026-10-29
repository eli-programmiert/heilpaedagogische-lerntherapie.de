// Single source of truth for site / client project configuration.
// Edit THIS file when changing domain.
// Custom domain on GitHub Pages, so the site is served from the root path.
export const SITE_URL = 'https://heilpaedagogische-lerntherapie.de/';
export const ACTIVE_TEMPLATE = 'nova';

// The practice website is German only.
export const SITE_LOCALE = 'de';

// BUILD_SCOPE — what goes into build (dist/) and what stays dev-only.
// Dev has everything (for prototyping), build is clean per project scope.
export const BUILD_SCOPE = {
  // Allowlist of paths to keep in build. Empty [] = all.
  // 404 is always kept regardless of this list.
  pages: ['/', '/heilpaedagogik', '/lerntherapie', '/angebot', '/ueber-mich', '/preise', '/kontakt', '/impressum', '/datenschutz'],
  // Denylist — always removed from dist/ (dev-only, prototypes, demo).
  // Entry matches by first path segment. Dev and QA stay out of production build.
  forceRemove: ['starwind-demo', 'layout-test', 'roofing', 'dev', 'qa'],
  // Whether to clean unused media (images, videos, fonts) from dist/.
  images: true,
};

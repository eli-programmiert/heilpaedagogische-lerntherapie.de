/**
 * URL helpers for Astro following the project conventions.
 */

/**
 * Formats an internal link so it always ends with a slash (SEO)
 * and is well formed (no double slashes).
 * Skips external links, mailto:, tel: and anchors without a path.
 */
export function formatInternalLink(href: string | null | undefined): string {
  if (!href) return '/';
  
  // Ignore external and special links
  if (
    href.startsWith('http') || 
    href.startsWith('mailto:') || 
    href.startsWith('tel:') ||
    href.startsWith('javascript:')
  ) {
    return href;
  }

  // Anchor only
  if (href.startsWith('#')) {
    return href;
  }

  // Split the path from the anchor and query parameters
  const [base, ...rest] = href.split(/([#?])/);
  const suffix = rest.join('');

  // Clean the base (collapse repeated slashes)
  let formattedBase = base.replace(/\/+/g, '/');
  
  if (!formattedBase.startsWith('/')) {
    formattedBase = '/' + formattedBase;
  }

  if (!formattedBase.endsWith('/')) {
    formattedBase = formattedBase + '/';
  }

  // Home page (avoid //)
  if (formattedBase === '//') formattedBase = '/';

  return formattedBase + suffix;
}

/**
 * Checks whether a link is external
 */
export function isExternal(href: string): boolean {
  return href.startsWith('http') || href.startsWith('//');
}

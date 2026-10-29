// Why: the page scope logic is pulled out of [...page].astro getStaticPaths,
// so it is testable and not duplicated between files.

import { HERO_SECTION_IDS } from "@config/hero-ids";

/**
 * Checks whether a page slug is allowed by BUILD_SCOPE.pages.
 * The root '/' only matches '/'; the other entries are prefixes.
 */
export function isPageAllowed(slug: string, allowedPages: string[]): boolean {
  const allowAll = !allowedPages || allowedPages.length === 0;
  if (allowAll) return true;
  const pathname = slug === "index" ? "/" : `/${slug}/`;
  return allowedPages.some((p) => {
    const normalized = p.endsWith("/") ? p : `${p}/`;
    if (normalized === "/") return pathname === "/";
    return pathname === normalized || pathname.startsWith(normalized);
  });
}

/**
 * Checks whether the sections contain a hero that needs fullBleedTop.
 */
export function hasHeroSection(sectionIds: string[]): boolean {
  return sectionIds.some((id) => (HERO_SECTION_IDS as readonly string[]).includes(id));
}

/**
 * Computes fullBleedTop for Layout from the navbar variant and the section list.
 */
export function getFullBleedTop(
  navbarVariant: string | undefined,
  sectionIds: string[],
): boolean {
  return navbarVariant === "floating" && hasHeroSection(sectionIds);
}

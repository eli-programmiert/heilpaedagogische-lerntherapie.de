import type { CompanyConfig } from '@/types/config';

/**
 * Social media helper.
 * Why: company.json keeps social media as a plain object
 * { facebook: "https://...", instagram: "", ... } with links only, no
 * toggles. Components show only profiles with a link (not empty and not
 * "#"); the rest are not rendered.
 */

export type SocialEntry = {
  key: string;
  label: string;
  icon: string;
  href: string;
};

export const SOCIAL_META: Record<string, { label: string; icon: string }> = {
  facebook: { label: 'Facebook', icon: 'ph-facebook-logo' },
  instagram: { label: 'Instagram', icon: 'ph-instagram-logo' },
  youtube: { label: 'YouTube', icon: 'ph-youtube-logo' },
  twitter: { label: 'X (Twitter)', icon: 'ph-x-logo' },
};

/** Returns the social media entries that have a link (skips empty and "#"). */
export function getEnabledSocialLinks(company: CompanyConfig | Record<string, unknown>): SocialEntry[] {
  const socials = (company as any)?.socials;
  if (!socials || typeof socials !== 'object') return [];

  return Object.entries(socials as Record<string, string>)
    .filter(([key, href]) => href && href.trim() !== '' && href.trim() !== '#')
    .map(([key, href]) => {
      const meta = SOCIAL_META[key] ?? { label: key, icon: 'ph-globe' };
      return { key, label: meta.label, icon: meta.icon, href: href.trim() };
    });
}

/** Schema.org version: list of links for sameAs. */
export function getSocialUrls(company: CompanyConfig | Record<string, unknown>): string[] {
  return getEnabledSocialLinks(company).map((s) => s.href);
}

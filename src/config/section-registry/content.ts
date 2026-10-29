import type { SectionEntry } from './types';

const icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>';

export const contentSections: Record<string, SectionEntry> = {
  pageIntro: {
    id: 'pageIntro', label: 'Page intro', groupId: 'content', hint: 'Minimal subpage header', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'PageIntroBlock' } },
  },
};

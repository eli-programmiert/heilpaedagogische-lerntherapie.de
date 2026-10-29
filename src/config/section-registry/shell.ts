import type { SectionEntry } from './types';

const icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>';

export const shellSections: Record<string, SectionEntry> = {
  theme: {
    id: 'theme', label: 'Theme', groupId: 'theme', hint: 'Global colour theme', icon,
    defaultVariant: 'default',
    variants: { default: { component: null } },
  },
  navbar: {
    id: 'navbar', label: 'Navbar', groupId: 'navbar', hint: 'Main menu layout', icon,
    defaultVariant: 'floating',
    variants: {
      floating: { component: 'Navbar', props: { layout: 'floating' } },
    },
  },
  footer: {
    id: 'footer', label: 'Footer', groupId: 'footer', hint: 'Footer variant', icon,
    defaultVariant: 'nova',
    variants: {
      nova: { component: 'NovaFooterBlock' },
    },
  },
};

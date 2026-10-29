import type { SectionEntry } from './types';

const icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>';

// Blocks of the practice website. Content comes from `sections[].data` in the
// page JSON (src/data/pages/*.json), so every page carries its own copy.
export const praxisSections: Record<string, SectionEntry> = {
  praxisHero: {
    id: 'praxisHero', label: 'Praxis hero', groupId: 'hero', hint: 'Text 7/12 + portrait 5/12 with ring decoration', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'PraxisHeroBlock' } },
  },
  callout: {
    id: 'callout', label: 'Hinweis', groupId: 'content', hint: 'Notice box with icon (disclaimer, cost coverage)', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'CalloutBlock' } },
  },
  richText: {
    id: 'richText', label: 'Fließtext', groupId: 'content', hint: 'Narrow prose column with optional checklist and notice', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'RichTextBlock' } },
  },
  topicTiles: {
    id: 'topicTiles', label: 'Themen-Kacheln', groupId: 'about', hint: 'Split: text left, static topic tiles right', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'TopicTilesBlock' } },
  },
  offerCards: {
    id: 'offerCards', label: 'Angebotskarten', groupId: 'services', hint: 'Linked cards with photo or icon (2+3 or even)', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'OfferCardsBlock' } },
  },
  offerDetail: {
    id: 'offerDetail', label: 'Angebot im Detail', groupId: 'services', hint: 'Zigzag offer section with lists, tags, sub-cards and notices', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'OfferDetailBlock' } },
  },
  program: {
    id: 'program', label: 'Programm', groupId: 'services', hint: 'Highlighted programme card with price and steps', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'ProgramBlock' } },
  },
  profile: {
    id: 'profile', label: 'Profil', groupId: 'about', hint: 'Portrait, bio, qualifications and tags', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'ProfileBlock' } },
  },
  mediaSplit: {
    id: 'mediaSplit', label: 'Text mit Bild', groupId: 'about', hint: 'Text and photo split with optional tiles and extra photos', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'MediaSplitBlock' } },
  },
  cardGrid: {
    id: 'cardGrid', label: 'Karten', groupId: 'content', hint: 'Static cards for comparisons and info columns', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'CardGridBlock' } },
  },
  steps: {
    id: 'steps', label: 'Schritte', groupId: 'process', hint: 'Numbered steps in a row', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'StepsBlock' } },
  },
  timeline: {
    id: 'timeline', label: 'Zeitleiste', groupId: 'process', hint: 'Vertical timeline with icons or year labels', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'TimelineBlock' } },
  },
  praxisFaq: {
    id: 'praxisFaq', label: 'Fragen', groupId: 'faq', hint: 'Accordion with FAQPage structured data', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'FaqBlock' } },
  },
  priceList: {
    id: 'priceList', label: 'Preisliste', groupId: 'services', hint: 'Unit prices table', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'PriceListBlock' } },
  },
  packages: {
    id: 'packages', label: 'Pakete', groupId: 'services', hint: 'Fixed-price packages', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'PackagesBlock' } },
  },
  iflwSeal: {
    id: 'iflwSeal', label: 'IFLW-Prüfsiegel', groupId: 'trust', hint: 'Personal IFLW seal snippet, unchanged', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'IflwSealBlock' } },
  },
  contactCards: {
    id: 'contactCards', label: 'Kontaktkarten', groupId: 'contact', hint: 'Phone and e-mail cards without a form', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'ContactCardsBlock' } },
  },
  ctaBand: {
    id: 'ctaBand', label: 'Abschluss-CTA', groupId: 'cta', hint: 'Closing call to action band', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'CtaBandBlock' } },
  },
};

export type VariantEntry = {
  component: any;
  label?: string;
  props?: Record<string, any>;
  dataKey?: string;
};

export type SectionEntry = {
  id: string;
  label: string;
  groupId: string;
  icon: string;
  defaultVariant: string;
  variants: Record<string, VariantEntry>;
  hint?: string;
};

export type SectionGroup = {
  id: string;
  label: string;
};

export const SECTION_GROUPS: SectionGroup[] = [
  { id: 'theme', label: 'Theme' },
  { id: 'navbar', label: 'Menu' },
  { id: 'footer', label: 'Footer' },
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'trust', label: 'Trust' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'process', label: 'Process' },
  { id: 'social', label: 'Testimonials' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
  { id: 'cta', label: 'CTA' },
  { id: 'content', label: 'Content' },
];

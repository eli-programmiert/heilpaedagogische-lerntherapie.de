import type { SectionEntry } from './section-registry/types';
import { shellSections } from './section-registry/shell';
import { contentSections } from './section-registry/content';
import { praxisSections } from './section-registry/praxis';

export { SECTION_GROUPS } from './section-registry/types';
export type { SectionEntry, SectionGroup, VariantEntry } from './section-registry/types';

export const SECTION_REGISTRY: Record<string, SectionEntry> = {
  ...shellSections,
  ...contentSections,
  ...praxisSections,
};

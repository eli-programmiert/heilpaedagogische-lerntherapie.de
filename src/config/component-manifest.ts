import type { BlockCategory } from './types';

export type BlockClassificationStatus = 'confirmed' | 'provisional';

export type ComponentManifestEntry = {
  category: BlockCategory;
  status: BlockClassificationStatus;
  path?: string;
};

export function getComponentPath(name: string, entry: ComponentManifestEntry): string {
  return entry.path ?? `/src/components/registry/${name}.astro`;
}

/** Public blocks included in the Nova template package. */
export const COMPONENT_MANIFEST: Record<string, ComponentManifestEntry> = {
  // Practice website blocks.
  PraxisHeroBlock: { category: 'core', status: 'confirmed' },
  CalloutBlock: { category: 'core', status: 'confirmed' },
  RichTextBlock: { category: 'core', status: 'confirmed' },
  TopicTilesBlock: { category: 'core', status: 'confirmed' },
  OfferCardsBlock: { category: 'core', status: 'confirmed' },
  OfferDetailBlock: { category: 'core', status: 'confirmed' },
  ProgramBlock: { category: 'core', status: 'confirmed' },
  ProfileBlock: { category: 'core', status: 'confirmed' },
  MediaSplitBlock: { category: 'core', status: 'confirmed' },
  CardGridBlock: { category: 'core', status: 'confirmed' },
  StepsBlock: { category: 'core', status: 'confirmed' },
  TimelineBlock: { category: 'core', status: 'confirmed' },
  FaqBlock: { category: 'core', status: 'confirmed' },
  PriceListBlock: { category: 'core', status: 'confirmed' },
  PackagesBlock: { category: 'core', status: 'confirmed' },
  IflwSealBlock: { category: 'core', status: 'confirmed' },
  ContactCardsBlock: { category: 'core', status: 'confirmed' },
  CtaBandBlock: { category: 'core', status: 'confirmed' },
  NovaFooterBlock: { category: 'core', status: 'provisional' },
  PageIntroBlock: { category: 'core', status: 'provisional' },
};

const manifestEntries = Object.entries(COMPONENT_MANIFEST) as [string, ComponentManifestEntry][];

export const COMPONENT_CATEGORIES: Record<BlockCategory, string[]> = {
  core: manifestEntries
    .filter(([, entry]) => entry.category === 'core')
    .map(([name]) => name),
  catalog: manifestEntries
    .filter(([, entry]) => entry.category === 'catalog')
    .map(([name]) => name),
  legacy: manifestEntries
    .filter(([, entry]) => entry.category === 'legacy')
    .map(([name]) => name),
};

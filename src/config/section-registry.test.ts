import { describe, expect, it } from 'vitest';
import { SECTION_GROUPS, SECTION_REGISTRY } from './section-registry';
import { contentSections } from './section-registry/content';
import { shellSections } from './section-registry/shell';
import { praxisSections } from './section-registry/praxis';

const domainRegistries = [
  shellSections,
  contentSections,
  praxisSections,
];

describe('section registry domains', () => {
  it('contains no duplicate block ids', () => {
    const keys = domainRegistries.flatMap((registry) => Object.keys(registry));
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('keeps every domain entry in the public registry', () => {
    const keys = domainRegistries.flatMap((registry) => Object.keys(registry));

    expect(Object.keys(SECTION_REGISTRY)).toHaveLength(keys.length);
    expect(new Set(Object.keys(SECTION_REGISTRY))).toEqual(new Set(keys));
  });

  it('splits shell entries into theme, menu and footer', () => {
    const groupsById = new Map(SECTION_GROUPS.map((group) => [group.id, group.label]));

    expect(groupsById.get('theme')).toBe('Theme');
    expect(groupsById.get('navbar')).toBe('Menu');
    expect(groupsById.get('footer')).toBe('Footer');
    expect(Object.values(shellSections).filter((entry) => entry.groupId === 'shell')).toHaveLength(0);
  });
});

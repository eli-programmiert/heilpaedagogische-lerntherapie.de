import { describe, expect, it } from 'vitest';
import { PageConfigSchema, PageSectionSchema, SectionDataSchema } from './data-contracts';

describe('data contracts', () => {
  it('accepts a page config with extra fields', () => {
    const result = PageConfigSchema.safeParse({
      heading: 'Startseite',
      seo: {
        title: 'Startseite',
        description: 'Seitenbeschreibung',
      },
      sections: [{ id: 'hero', variant: 'default' }],
      customField: { source: 'json' },
    });

    expect(result.success).toBe(true);
  });

  it('requires a section id and variant', () => {
    expect(PageSectionSchema.safeParse({ id: 'hero' }).success).toBe(false);
    expect(PageSectionSchema.safeParse({ variant: 'default' }).success).toBe(false);
  });

  it('requires an object for section data', () => {
    expect(SectionDataSchema.safeParse({ title: 'Hero' }).success).toBe(true);
    expect(SectionDataSchema.safeParse(['hero']).success).toBe(false);
  });
});

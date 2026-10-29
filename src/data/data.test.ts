import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import siteCopy from './i18n/nova.json';
import company from './global/company.json';
import seo from './global/seo.json';
import homePage from './pages/index.json';
import { SECTION_REGISTRY } from '@config/section-registry';

describe('Data integrity and naming', () => {
  it('seo.json should have valid SEO meta data', () => {
    // Why: siteName/siteUrl/contactEmail have been moved to company.json
    // (single source of company data); seo.json only holds SEO settings.
    expect(seo).toHaveProperty('defaultTitle');
    expect(seo).toHaveProperty('index');
    expect(typeof seo.index).toBe('boolean');
  });

  it('homepage config should declare its primary heading', () => {
    expect(homePage).toHaveProperty('heading');
    expect(typeof homePage.heading).toBe('string');
    expect(homePage.heading.trim().length).toBeGreaterThan(0);
  });

  it('company.json should have valid details', () => {
    expect(company).toHaveProperty('name');
    expect(company).toHaveProperty('city');
    // Ensure city is not a placeholder
    expect(company.city.toLowerCase()).not.toBe('city');
    expect(company.city.trim().length).toBeGreaterThan(0);
  });

  it('anchors and links should follow slug standards', () => {
    const allHrefs = [
      ...siteCopy.de.navigation.menu.flatMap((m) => [m.href, ...(m.children ?? []).map((c) => c.href)]),
      siteCopy.de.navigation.cta.href,
    ];
    
    const umlauts = /[äöüß]/i;

    allHrefs.forEach(href => {
      if (href.startsWith('#')) {
        const slug = href.slice(1);
        // Anchors must be slugified (ae/oe/ue/ss instead of umlauts and ß)
        expect(umlauts.test(slug), `Anchor ${href} should not contain umlauts or ß`).toBe(false);
        
        // Check for spaces
        expect(slug).not.toContain(' ');
      } else if (href.startsWith('/')) {
        // Internal links should not contain spaces or umlauts
        expect(href).not.toContain(' ');
        expect(umlauts.test(href), `Link ${href} should not contain umlauts or ß`).toBe(false);
      }
    });
  });
});

describe('JSON Data Integrity', () => {
  // Reading JSON directly from disk keeps this test useful for files added
  // after the test module was compiled.
  const readJson = (relative: string) =>
    JSON.parse(fs.readFileSync(path.join(process.cwd(), relative), 'utf8'));


  it('sections of src/data/pages/index.json have SECTION_REGISTRY entries', () => {
    const page = readJson('src/data/pages/index.json');
    expect(Array.isArray(page.sections)).toBe(true);
    for (const section of page.sections) {
      expect(SECTION_REGISTRY[section.id], `No "${section.id}" entry in SECTION_REGISTRY`).toBeDefined();
    }
  });
});

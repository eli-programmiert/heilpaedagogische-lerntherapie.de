import { describe, expect, it } from 'vitest';
import { auditContent, isExcluded, PLACEHOLDER_PATTERNS } from './content-audit';

describe('content audit', () => {
  describe('isExcluded', () => {
    it('excludes audit baseline', () => {
      expect(isExcluded('.audit-baseline.json')).toBe(true);
    });

    it('does not exclude production data', () => {
      expect(isExcluded('src/data/global/company.json')).toBe(false);
    });
  });

  describe('placeholder patterns exist', () => {
    it('has rules for example email', () => {
      const rule = PLACEHOLDER_PATTERNS.find((p) => p.rule === 'example-email');
      expect(rule).toBeDefined();
      expect(rule!.patterns.some((r) => r.test('kontakt@example.com'))).toBe(true);
    });

    it('has rules for social media href #', () => {
      const rule = PLACEHOLDER_PATTERNS.find((p) => p.rule === 'placeholder-social-href');
      expect(rule).toBeDefined();
      expect(rule!.patterns.some((r) => r.test('"facebook": "#"'))).toBe(true);
      expect(rule!.patterns.some((r) => r.test('"instagram": "#"'))).toBe(true);
      expect(rule!.patterns.some((r) => r.test('"twitter": "#"'))).toBe(true);
    });

    it('has rules for twitter handle @', () => {
      const rule = PLACEHOLDER_PATTERNS.find((p) => p.rule === 'placeholder-twitter-handle');
      expect(rule).toBeDefined();
      expect(rule!.patterns.some((r) => r.test('"twitterHandle": "@"'))).toBe(true);
    });

    it('has rules for placeholder text', () => {
      const rule = PLACEHOLDER_PATTERNS.find((p) => p.rule === 'placeholder-text');
      expect(rule).toBeDefined();
      expect(rule!.patterns.some((r) => r.test(': "This is placeholder text"'))).toBe(true);
    });
  });

  describe('auditContent detects placeholders', () => {
    it('detects kontakt@example.com', () => {
      const source = JSON.stringify({ email: 'kontakt@example.com' });
      const issues = auditContent(source, 'src/data/global/company.json');
      expect(issues.some((i) => i.rule === 'example-email')).toBe(true);
    });

    it('detects social href #', () => {
      const source = JSON.stringify({ facebook: '#' });
      const issues = auditContent(source, 'src/config/template.ts');
      expect(issues.some((i) => i.rule === 'placeholder-social-href')).toBe(true);
    });

    it('detects twitterHandle @', () => {
      const source = JSON.stringify({ twitterHandle: '@' });
      const issues = auditContent(source, 'src/config/template.ts');
      expect(issues.some((i) => i.rule === 'placeholder-twitter-handle')).toBe(true);
    });

    it('detects placeholder text in page data', () => {
      const source = '{\n  "title": "This is a placeholder for testing"\n}';
      const issues = auditContent(source, 'src/data/pages/test.json');
      expect(issues.some((i) => i.rule === 'placeholder-text')).toBe(true);
    });

    it('returns no issues for the audit baseline', () => {
      const source = JSON.stringify({ email: 'kontakt@example.com' });
      const issues = auditContent(source, '.audit-baseline.json');
      expect(issues).toHaveLength(0);
    });
  });

  describe('correct line numbers', () => {
    it('reports the line of the placeholder', () => {
      const source = '{\n  "email": "kontakt@example.com"\n}';
      const issues = auditContent(source, 'src/data/global/company.json');
      const issue = issues.find((i) => i.rule === 'example-email');
      expect(issue).toBeDefined();
      expect(issue!.line).toBe(2);
    });

    it('reports multiple issues from one file', () => {
      const source = JSON.stringify({
        email: 'kontakt@example.com',
        twitterHandle: '@',
      }, null, 2);
      const issues = auditContent(source, 'src/config/template.ts');
      const rules = new Set(issues.map((i) => i.rule));
      expect(rules.has('example-email')).toBe(true);
      expect(rules.has('placeholder-twitter-handle')).toBe(true);
    });
  });

  describe('accepts realistic data', () => {
    it('accepts realistic company data', () => {
      const source = JSON.stringify({
        name: 'Praxis Eggersdorfer',
        email: 'kontakt@heilpaedagogische-lerntherapie.de',
        phone: '+49 160 1234567',
        address: 'Hauptstraße 1',
      }, null, 2);
      const issues = auditContent(source, 'src/data/global/company.json');
      expect(issues).toHaveLength(0);
    });

    it('accepts realistic social links', () => {
      const source = JSON.stringify({
        socials: {
          instagram: 'https://instagram.com/praxis',
        },
      }, null, 2);
      const issues = auditContent(source, 'src/data/global/company.json');
      expect(issues).toHaveLength(0);
    });
  });
});

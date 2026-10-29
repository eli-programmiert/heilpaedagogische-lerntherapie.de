import { describe, it, expect } from 'vitest';
import { formatInternalLink, isExternal } from './url';

describe('URL Utilities', () => {
  describe('formatInternalLink', () => {
    it('should append trailing slash to internal links', () => {
      expect(formatInternalLink('kontakt')).toBe('/kontakt/');
      expect(formatInternalLink('/angebot')).toBe('/angebot/');
    });

    it('should not duplicate trailing slash if already exists', () => {
      expect(formatInternalLink('/preise/')).toBe('/preise/');
    });

    it('should handle home page correctly', () => {
      expect(formatInternalLink('/')).toBe('/');
      expect(formatInternalLink('')).toBe('/');
    });

    it('should preserve anchors with trailing slash on base path', () => {
      expect(formatInternalLink('angebot#adhs')).toBe('/angebot/#adhs');
      expect(formatInternalLink('/ueber-mich/#profil')).toBe('/ueber-mich/#profil');
    });

    it('should preserve query parameters', () => {
      expect(formatInternalLink('/szukaj?q=test')).toBe('/szukaj/?q=test');
    });

    it('should ignore external links', () => {
      expect(formatInternalLink('https://google.com')).toBe('https://google.com');
      expect(formatInternalLink('mailto:test@example.com')).toBe('mailto:test@example.com');
      expect(formatInternalLink('tel:+48123456789')).toBe('tel:+48123456789');
    });

    it('should handle standalone anchors', () => {
      expect(formatInternalLink('#section')).toBe('#section');
    });

    it('should fix multiple slashes', () => {
      expect(formatInternalLink('///angebot//')).toBe('/angebot/');
    });
  });

  describe('isExternal', () => {
    it('should identify external links correctly', () => {
      expect(isExternal('https://test.pl')).toBe(true);
      expect(isExternal('http://test.pl')).toBe(true);
      expect(isExternal('//test.pl')).toBe(true);
      expect(isExternal('/kontakt')).toBe(false);
      expect(isExternal('#test')).toBe(false);
    });
  });
});

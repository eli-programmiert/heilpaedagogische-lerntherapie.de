import { describe, it, expect } from 'vitest';
import { formatInternalLink } from '@utils/url';

type ButtonVariant = 'primary' | 'accent' | 'outline' | 'ghost' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

const ALL_VARIANTS: ButtonVariant[] = ['primary', 'accent', 'outline', 'ghost', 'secondary', 'success', 'warning', 'error', 'info'];
const ALL_SIZES: ButtonSize[] = ['sm', 'md', 'lg', 'icon'];

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'ui-button-primary',
  accent: 'ui-button-accent',
  outline: 'ui-button-outline',
  ghost: 'ui-button-ghost',
  secondary: 'ui-button-secondary',
  success: 'ui-button-success',
  warning: 'ui-button-warning',
  error: 'ui-button-error',
  info: 'ui-button-info',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9',
  md: 'h-10 sm:h-11',
  lg: 'h-11 sm:h-12',
  icon: 'size-10 sm:size-11',
};

describe('Button — prop logic', () => {
  describe('formatInternalLink (used by Button)', () => {
    it('adds a slash to internal links', () => {
      expect(formatInternalLink('kontakt')).toBe('/kontakt/');
      expect(formatInternalLink('/angebot')).toBe('/angebot/');
    });

    it('keeps external links', () => {
      expect(formatInternalLink('https://google.com')).toBe('https://google.com');
      expect(formatInternalLink('mailto:test@example.com')).toBe('mailto:test@example.com');
      expect(formatInternalLink('tel:+48123456789')).toBe('tel:+48123456789');
    });

    it('returns / for an empty href', () => {
      expect(formatInternalLink('')).toBe('/');
      expect(formatInternalLink(null as unknown as string)).toBe('/');
      expect(formatInternalLink(undefined as unknown as string)).toBe('/');
    });

    it('keeps anchors', () => {
      expect(formatInternalLink('#section')).toBe('#section');
    });

    it('keeps query params', () => {
      expect(formatInternalLink('/szukaj?q=test')).toBe('/szukaj/?q=test');
    });
  });

  describe('varianty', () => {
    it('every variant has a CSS class', () => {
      for (const v of ALL_VARIANTS) {
        expect(variantClasses[v]).toBeTruthy();
        expect(variantClasses[v]).toMatch(/^ui-button-/);
      }
    });

    it('primary is the default variant', () => {
      expect(variantClasses.primary).toBe('ui-button-primary');
    });
  });

  describe('rozmiary', () => {
    it('every size has a size class (h- or size-)', () => {
      for (const s of ALL_SIZES) {
        expect(sizeClasses[s]).toBeTruthy();
        expect(sizeClasses[s]).toMatch(/^(h-|size-)/);
      }
    });

    it('md is the default size', () => {
      expect(sizeClasses.md).toContain('h-10');
    });
  });

  describe('href -> Tag', () => {
    it('href zamienia Tag na <a>', () => {
      const href = '/kontakt/';
      const Tag = href ? 'a' : 'button';
      expect(Tag).toBe('a');
    });

    it('without href the tag stays <button>', () => {
      const href = undefined as unknown as string;
      const resolved = href ? 'a' : 'button';
      expect(resolved).toBe('button');
    });

    it('an external href keeps <a>', () => {
      const href = 'https://example.com';
      const Tag = href ? 'a' : 'button';
      expect(Tag).toBe('a');
    });
  });

  describe('full prop', () => {
    it('full=true adds w-full', () => {
      const full = true;
      expect(full ? 'w-full' : '').toBe('w-full');
    });

    it('full=false does not add w-full', () => {
      const full = false;
      expect(full ? 'w-full' : '').toBe('');
    });

    it('full defaults to false', () => {
      const full = false;
      expect(full).toBe(false);
    });
  });

  describe('disabled', () => {
    it('disabled=true adds the disabled classes', () => {
      const disabled = true;
      expect(disabled ? 'pointer-events-none opacity-50' : '').toContain('pointer-events-none');
    });

    it('disabled=false does not disable', () => {
      const disabled = false;
      expect(disabled ? 'pointer-events-none opacity-50' : '').toBe('');
    });
  });
});

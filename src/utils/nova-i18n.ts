import copy from '@data/i18n/nova.json';

// The practice website is German only.
export type NovaLocale = 'de';

export type SiteCopy = typeof copy.de;

export function getNovaCopy(_locale: NovaLocale = 'de'): SiteCopy {
  return copy.de;
}

function withNovaBase(path: string): string {
  const configuredBase = process.env.PUBLIC_BASE_PATH || import.meta.env.BASE_URL;
  const base = configuredBase === '/'
    ? ''
    : `/${configuredBase.replace(/^\/+|\/+$/g, '')}`;
  return `${base}${path}` || '/';
}

export function getNovaLocalePath(_locale: NovaLocale = 'de'): string {
  return withNovaBase('/');
}

export function getNovaNavigationPath(href: string, _locale: NovaLocale = 'de'): string {
  if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }

  const normalized = href.startsWith('/') ? href : `/${href}`;
  return withNovaBase(normalized);
}

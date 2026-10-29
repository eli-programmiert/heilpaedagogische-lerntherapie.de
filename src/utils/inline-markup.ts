// Minimal inline markup for editorial copy stored in JSON.
// Supports **bold** and [label](href). Everything else is escaped, so content
// editors cannot inject HTML by accident.

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

function isSafeHref(href: string): boolean {
  return /^(\/|#|https:\/\/|mailto:|tel:)/.test(href);
}

function formatHref(href: string): string {
  // Internal page links keep the trailing-slash convention (anchors and query kept).
  const match = href.match(/^(\/[^?#]*?)(\/?)([?#].*)?$/);
  if (!match || href.startsWith('//')) return href;
  const [, path, , rest = ''] = match;
  const hasExtension = /\.[a-z0-9]+$/i.test(path);
  return hasExtension || path === '/' ? `${path}${rest}` : `${path}/${rest}`;
}

export function renderInline(text: string): string {
  let html = escapeHtml(text);

  html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (whole, label: string, rawHref: string) => {
    const href = rawHref.replace(/&amp;/g, '&');
    if (!isSafeHref(href)) return whole;
    const external = href.startsWith('https://');
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a class="praxis-link" href="${escapeHtml(formatHref(href))}"${attrs}>${label}</a>`;
  });

  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return html;
}

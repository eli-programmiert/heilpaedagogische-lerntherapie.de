import { describe, expect, it } from 'vitest';
import { escapeHtml, renderInline } from './inline-markup';

describe('renderInline', () => {
  it('renders bold text', () => {
    expect(renderInline('nach **§ 35a SGB VIII** möglich')).toBe('nach <strong>§ 35a SGB VIII</strong> möglich');
  });

  it('renders internal links with trailing slash and keeps anchors', () => {
    expect(renderInline('[Mehr](/preise#kostenuebernahme)')).toBe(
      '<a class="praxis-link" href="/preise/#kostenuebernahme">Mehr</a>',
    );
    expect(renderInline('[Preise](/preise/)')).toBe('<a class="praxis-link" href="/preise/">Preise</a>');
  });

  it('opens external links in a new tab', () => {
    expect(renderInline('[IFLW](https://www.iflw.de)')).toContain('target="_blank" rel="noopener noreferrer"');
  });

  it('escapes HTML and ignores unsafe link targets', () => {
    expect(renderInline('<script>x</script>')).toBe('&lt;script&gt;x&lt;/script&gt;');
    expect(renderInline('[x](javascript:alert(1))')).not.toContain('<a');
  });

  it('escapes quotes', () => {
    expect(escapeHtml('„Fokus" & Familie')).toBe('„Fokus&quot; &amp; Familie');
  });
});

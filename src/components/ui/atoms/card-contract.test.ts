import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const stylesDir = resolve(__dirname, '../../../styles');
const componentsCss = readFileSync(join(stylesDir, 'components.css'), 'utf-8');
const motionCss = readFileSync(join(stylesDir, 'motion.css'), 'utf-8');

describe('ui-card-interactive — CSS contract', () => {
  it('the contract exists in components.css (transition 250ms, easing easeOutCubic)', () => {
    expect(componentsCss).toContain('.ui-card-interactive');
    // Contract: 250ms and joint easeOutCubic easing (soft start = smooth flow,
    // an aggressive expo-out at 200ms looked like a jump)
    expect(componentsCss).toMatch(/\.ui-card-interactive\s*\{[^}]*250ms cubic-bezier\(0\.33, 1, 0\.68, 1\)/s);
  });

  it('hover lift uses transform, not translate (would clash with the reveal in motion.css)', () => {
    const hoverBlock = componentsCss.match(/\.ui-card-interactive:hover\s*\{[^}]*\}/g) || [];
    const lift = hoverBlock.find((b) => b.includes('translateY(-0.25rem)'));
    expect(lift).toBeDefined();
    expect(lift).not.toContain('translate:');
  });

  it('hover zmienia border (brand-primary 34%) i shadow (brand-dark 12%)', () => {
    const hoverBlock = componentsCss.match(/\.ui-card-interactive:hover\s*\{[^}]*\}/g) || [];
    const style = hoverBlock.find((b) => b.includes('translateY(-0.25rem)'));
    expect(style).toContain('color-mix(in oklch, var(--color-brand-primary) 34%, var(--color-outline))');
    expect(style).toContain('0 1.625rem 4rem color-mix(in oklch, var(--color-brand-dark) 12%, transparent)');
  });

  it('hover is guarded by media (hover: hover) — no lift on touch', () => {
    expect(componentsCss).toMatch(/@media \(hover: hover\)\s*\{[^@]*\.ui-card-interactive:hover/s);
  });

  it('hover border/shadow is UNLAYERED (selector with html) — a rule in @layer would lose to border-*/shadow-* utilities', () => {
    const unlayered = componentsCss.match(/@media \(hover: hover\)\s*\{\s*html \.ui-card-interactive:hover\s*\{[^}]*\}/);
    expect(unlayered).not.toBeNull();
    expect(unlayered![0]).toContain('color-mix(in oklch, var(--color-brand-primary) 34%, var(--color-outline))');
    expect(unlayered![0]).toContain('0 1.625rem 4rem color-mix(in oklch, var(--color-brand-dark) 12%, transparent)');
  });

  it('reduced-motion disables the transition and hover lift', () => {
    const reduced = componentsCss.match(/@media \(prefers-reduced-motion: reduce\)\s*\{[\s\S]*?\n  \}/g) || [];
    const cardBlock = reduced.find((b) => b.includes('.ui-card-interactive'));
    expect(cardBlock).toBeDefined();
    expect(cardBlock).toContain('transition: none');
    expect(cardBlock).toContain('transform: none');
  });

  it('motion.css interplay: a visible card returns to the 250ms transition', () => {
    expect(motionCss).toContain('html[data-motion-ready] .ui-card-interactive[data-motion-visible]');
    // The input (opacity/filter/translate) remains from motion tokens...
    expect(motionCss).toMatch(/\.ui-card-interactive\[data-motion-visible\]\s*\{[^}]*opacity var\(--motion-duration\)/s);
    // ...a hover (transform/shadow/border) animates with a 250ms contract
    expect(motionCss).toMatch(/\.ui-card-interactive\[data-motion-visible\]\s*\{[^}]*transform 250ms cubic-bezier\(0\.33, 1, 0\.68, 1\) 0ms/s);
  });

  it('motion.css has a reduced-motion override for the interplay (unlayered must not override it)', () => {
    const reduced = motionCss.match(/@media \(prefers-reduced-motion: reduce\)\s*\{[\s\S]*?\n\}/g) || [];
    const interplay = reduced.find((b) => b.includes('.ui-card-interactive[data-motion-visible]'));
    expect(interplay).toBeDefined();
    expect(interplay).toContain('transition: none !important');
  });
});

describe('ui-card-interactive — usage contract (registry, molecules, pages)', () => {
  const srcDir = resolve(__dirname, '../../..');
  // We scan all places where cards may be created: registers (organisms),
  // molecules (card molecules) and pages (cards written directly in pages, e.g. blog).
  const scanDirs = ['components/registry', 'components/ui/molecules', 'pages'].map((d) => join(srcDir, d));
  const files: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.astro')) files.push(full);
    }
  };
  scanDirs.forEach(walk);

  it('a block using the contract has no own hover lift/shadow on the same element', () => {
    const violations: string[] = [];
    for (const file of files) {
      const source = readFileSync(file, 'utf-8');
      // A class (or class:list) attribute with ui-card-interactive on the same line
      // as hover:-translate-y or hover:shadow means the old hover stayed on the card.
      const lines = source.split('\n');
      lines.forEach((line, i) => {
        if (line.includes('ui-card-interactive') && /hover:-translate-y|hover:shadow-/.test(line)) {
          violations.push(`${file}:${i + 1}`);
        }
      });
    }
    expect(violations).toEqual([]);
  });
});

import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, 'dist');
const CHECK_ONLY = process.argv.includes('--check');
const WEIGHT_CLASSES = new Set(['bold', 'duotone', 'fill', 'light', 'thin']);
// The minifier merges aliases that share a glyph into one selector list, e.g.
// `.ph.ph-seal-check:before,.ph.ph-circle-wavy-check:before{content:"…"}`, so a
// rule is matched with its whole selector list, not only the last selector.
const ICON_RULE_RE = /((?:\.ph\.ph-[a-z0-9-]+:before\s*,\s*)*\.ph\.ph-[a-z0-9-]+:before)\s*\{([^}]*?content\s*:\s*["'][^"']+["'];?[^}]*?)\}/gi;
const ICON_SELECTOR_RE = /\.ph\.ph-([a-z0-9-]+):before/gi;

function iconNamesOf(selectorList) {
  return [...selectorList.matchAll(ICON_SELECTOR_RE)].map((match) => match[1].toLowerCase());
}

function collectFiles(dir, extension) {
  if (!fs.existsSync(dir)) return [];

  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...collectFiles(fullPath, extension));
    else if (!extension || entry.name.endsWith(extension)) files.push(fullPath);
  }
  return files;
}

function collectUsedIcons() {
  const used = new Set();

  // HTML covers icons rendered by Astro, and JS also covers states changed after
  // page load, for example switching the copy icon to success.
  const files = [...collectFiles(distDir, '.html'), ...collectFiles(distDir, '.js')];
  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    for (const className of source.matchAll(/\bph-([a-z0-9-]+)\b/gi)) {
      if (!WEIGHT_CLASSES.has(className[1].toLowerCase())) used.add(className[1].toLowerCase());
    }
  }

  return used;
}

function findIconSelectors(css) {
  const selectors = new Set();
  for (const match of css.matchAll(ICON_RULE_RE)) {
    for (const iconName of iconNamesOf(match[1])) selectors.add(iconName);
  }
  return selectors;
}

if (!fs.existsSync(distDir)) {
  throw new Error('dist/ is missing. Run npm run build first.');
}

const usedIcons = collectUsedIcons();
let removedRules = 0;
let cssFiles = 0;

for (const file of collectFiles(distDir, '.css')) {
  const originalCss = fs.readFileSync(file, 'utf8');
  if (!originalCss.includes('.ph.ph-')) continue;

  cssFiles += 1;
  const optimizedCss = CHECK_ONLY
    ? originalCss
    : originalCss.replace(ICON_RULE_RE, (rule, selectorList, body) => {
      const names = iconNamesOf(selectorList);
      const kept = names.filter((iconName) => usedIcons.has(iconName));
      removedRules += names.length - kept.length;
      if (kept.length === 0) return '';
      if (kept.length === names.length) return rule;
      return `${kept.map((iconName) => `.ph.ph-${iconName}:before`).join(',')}{${body}}`;
    });

  if (!CHECK_ONLY && optimizedCss !== originalCss) fs.writeFileSync(file, optimizedCss, 'utf8');
}

const availableIcons = new Set();
for (const file of collectFiles(distDir, '.css')) {
  const css = fs.readFileSync(file, 'utf8');
  for (const iconName of findIconSelectors(css)) availableIcons.add(iconName);
}

const missingIcons = [...usedIcons].filter((iconName) => !availableIcons.has(iconName));
if (missingIcons.length > 0) {
  throw new Error(`No CSS definition for icons used in dist: ${missingIcons.join(', ')}`);
}

console.log(
  `phosphor: ${CHECK_ONLY ? 'checked' : `removed ${removedRules} unused rules in`} ${cssFiles} CSS file(s); icons in use: ${usedIcons.size}`,
);

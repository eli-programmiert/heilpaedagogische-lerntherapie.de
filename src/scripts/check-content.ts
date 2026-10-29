import fs from 'node:fs';
import path from 'node:path';
import fg from 'fast-glob';
import { auditContent } from '@utils/content-audit';

const patterns = [
  'src/pages/**/*.astro',
  'src/data/global/company.json',
  'src/data/global/seo.json',
  'src/data/navigation/**/*.json',
  'src/data/pages/**/*.json',
  'src/content/**/*.md',
  'src/content/**/*.mdoc',
  'src/config/site.ts',
  'src/config/template.ts',
  'site.config.mjs',
];

const excludePatterns = [
  '**/node_modules/**',
];

const targets = patterns.flatMap((pattern) =>
  fg.sync(pattern, { ignore: excludePatterns }),
);

let totalIssues = 0;

for (const relativePath of targets) {
  const filePath = path.resolve(relativePath);
  if (!fs.existsSync(filePath)) {
    console.warn(`[warn] File not found: ${relativePath}`);
    continue;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const issues = auditContent(source, relativePath);

  for (const issue of issues) {
    totalIssues += 1;
    console.error(`${issue.file}:${issue.line} [${issue.rule}] Found placeholder: "${issue.value}"`);
  }
}

if (totalIssues > 0) {
  console.error(`\ncheck:content: ${totalIssues} content issue(s) detected in production data.`);
  console.error('Replace the placeholders before building for production.');
  process.exitCode = 1;
} else {
  console.log(`check:content: OK — ${targets.length} files scanned, no issues.`);
}

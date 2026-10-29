import { execSync } from 'node:child_process';

interface QaStep {
  name: string;
  command: string;
  description: string;
}

const STANDARD_STEPS: QaStep[] = [
  { name: 'npm run test', command: 'npm run test -- --run', description: 'All unit and contract tests' },
  { name: 'npm run check:types', command: 'npm run check:types', description: 'TypeScript and Astro component diagnostics' },
  { name: 'npm run check:hardcoded', command: 'npm run check:hardcoded', description: 'No site copy hard-coded in components' },
  { name: 'npm run check:imports', command: 'npm run check:imports', description: 'Cross-directory imports use aliases' },
  { name: 'npm run check:registrations', command: 'npm run check:registrations', description: 'Manifest, registry and component files agree' },
  { name: 'npm run check:atomic', command: 'npm run check:atomic', description: 'Blocking Atomic Design rules' },
  { name: 'npm run check:motion', command: 'npm run check:motion', description: 'No retired animation tokens' },
  { name: 'npm run check:icons', command: 'npm run check:icons', description: 'Used icons are consistent' },
  { name: 'npm run check:data', command: 'npm run check:data', description: 'Page data contracts' },
  { name: 'npm run test:mobile', command: 'npm run test:mobile', description: 'Mobile audit rule tests' },
  { name: 'npm run check:mobile', command: 'npm run check:mobile', description: 'Mobile audit without new violations' },
  { name: 'npm run build', command: 'npm run build', description: 'Production build' },
  { name: 'npm run check:links', command: 'npm run check:links', description: 'Links, routes, headings and form actions' },
  { name: 'npm run check:page-registry', command: 'npm run check:page-registry', description: 'Page configs and registry variants' },
  { name: 'npm run check:images', command: 'npm run check:images', description: 'Rendered images' },
  { name: 'npm run check:seo', command: 'npm run check:seo', description: 'Basic SEO checks' },
];

const STRICT_STEPS = STANDARD_STEPS.map((step) =>
  step.name === 'npm run check:mobile'
    ? { ...step, name: 'npm run check:mobile -- --strict', command: 'npm run check:mobile -- --strict', description: 'Mobile audit without legacy exceptions' }
    : step,
);

const MODES: Record<string, { name: string; steps: QaStep[] }> = {
  qa: {
    name: 'Standard QA',
    steps: STANDARD_STEPS,
  },
  strict: {
    name: 'Strict QA',
    steps: STRICT_STEPS,
  },
  client: {
    name: 'Client Production Gate',
    steps: [
      { name: 'npm run check:content', command: 'npm run check:content', description: 'No placeholder content left' },
      { name: 'npm run build:prod', command: 'npm run build:prod', description: 'Production build' },
      { name: 'npm run check:seo:client', command: 'npm run check:seo:client', description: 'SEO checks for the indexable live site' },
    ],
  },
};

function runStep(step: QaStep): boolean {
  const separator = '\n' + '='.repeat(72) + '\n';
  console.log(separator);
  console.log(`  STEP: ${step.name}`);
  console.log(`  GOAL: ${step.description}`);
  console.log(separator);

  try {
    const output = execSync(step.command, {
      stdio: 'inherit',
      cwd: process.cwd(),
      timeout: 120_000,
    });
    console.log(`\n  [OK] ${step.name} — exited with code 0\n`);
    return true;
  } catch (err: unknown) {
    const status = (err as { status?: number }).status;
    console.log(`\n  [FAIL] ${step.name} — exited with code ${status ?? 'unknown'}\n`);
    return false;
  }
}

function showHelp(): void {
  const lines = [
    '',
    '  ============================================================',
    '  QA runner',
    '  ============================================================',
    '',
    '  COMMANDS:',
    '',
    `  npm run qa          Standard gate: tests + checks + build (${STANDARD_STEPS.length} steps)`,
    '  npm run qa:strict   Like qa, but check:mobile in strict mode',
    '  npm run qa:client   Production gate: check:content + build:prod + check:seo:client',
    '  npm run qa:help     This help',
    '',
    '  WHEN TO USE WHICH:',
    '',
    '  qa         — after every UI change (the usual choice)',
    '  qa:strict  — before merging to main, requires 0 known legacy issues',
    '  qa:client  — before publishing the site',
    '',
    '  MANUAL CHECKS THE RUNNER DOES NOT COVER:',
    '',
    '  - Drawer focus trap (Tab, Shift+Tab, Escape)',
    '  - Smooth scrolling after page transitions',
    '  - Overflow at 320px, 375px, 390px, 414px',
    '  - In-page anchors (e.g. /angebot/#adhs)',
    '',
    '  ============================================================',
    '',
  ];
  console.log(lines.join('\n'));
  process.exit(0);
}

function main(): void {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('help')) {
    showHelp();
    return;
  }

  const modeArg = args.find((a) => !a.startsWith('--')) || 'qa';
  const mode = MODES[modeArg];

  if (!mode) {
    console.error(`Unknown QA profile: "${modeArg}". Available: ${Object.keys(MODES).join(', ')}`);
    process.exit(1);
  }

  const startTime = Date.now();

  console.log(`\n  >>> Starting: ${mode.name} <<<\n`);

  let passed = 0;
  let failed = 0;

  for (const step of mode.steps) {
    const ok = runStep(step);
    if (ok) {
      passed += 1;
    } else {
      failed += 1;
    }
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  const total = mode.steps.length;

  console.log('='.repeat(72));
  console.log(`  SUMMARY: ${mode.name}`);
  console.log('='.repeat(72));
  console.log(`  Passed: ${passed}/${total}  Failed: ${failed}  Time: ${elapsed}s`);


  if (failed > 0) {
    console.log(`\n  >>> FAILED <<<\n`);
    process.exit(1);
  } else {
    console.log(`\n  >>> PASSED <<<\n`);
    process.exit(0);
  }
}

main();

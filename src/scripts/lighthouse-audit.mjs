import { execFileSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const args = process.argv.slice(2);
const urlIndex = args.indexOf('--url');
const requestedUrl = urlIndex >= 0 ? args[urlIndex + 1] : undefined;
const skipBuild = args.includes('--skip-build');
const previewPort = 4322;
const outputDir = path.join(projectRoot, 'audit-reports');
const lighthouseVersion = '13.4.1';

if (requestedUrl?.startsWith('--')) {
  console.error('Invalid --url argument. Pass a full URL.');
  process.exit(1);
}

if (requestedUrl && /https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i.test(requestedUrl)) {
  console.error('A local Lighthouse run must use astro preview. Run the command without --url or pass a published URL.');
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const categories = ['performance', 'accessibility', 'best-practices', 'seo'];

function runAudit(url, label, profileArgs) {
  const safeUrl = url.replace(/^https?:\/\//, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').slice(0, 60);
  const outputBase = path.join(outputDir, `lighthouse-${timestamp}-${safeUrl}-${label}`);
  const lighthouseArgs = [
    '--yes',
    `lighthouse@${lighthouseVersion}`,
    url,
    '--only-categories',
    categories.join(','),
    '--output',
    'json',
    '--output',
    'html',
    '--output-path',
    outputBase,
    '--quiet',
    ...profileArgs,
  ];

  // npx allows you to run an audit without a global installation of Lighthouse, and version
  // is pinned so that the results of subsequent audits are comparable.
  const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  // Windows provides npx as a `.cmd` file that Node must run through
  // shell. On Unix we leave the process invocation directly.
  execFileSync(npxCommand, lighthouseArgs, {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  console.log(`Lighthouse ${label}: ${outputBase}.report.json and .report.html`);
}

async function waitForPreview(url, timeoutMs = 30_000) {
  const startedAt = Date.now();
  let lastError = 'no response';

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
      lastError = `HTTP ${response.status}`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Preview server did not start within ${timeoutMs} ms: ${lastError}`);
}

function startPreview() {
  const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  return spawn(npmCommand, [
    'run',
    'preview',
    '--',
    '--host',
    '127.0.0.1',
    '--port',
    String(previewPort),
    '--strictPort',
  ], {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    windowsHide: true,
  });
}

function stopPreview(processHandle) {
  if (!processHandle || processHandle.exitCode !== null) return;

  if (process.platform === 'win32') {
    // npm.cmd runs a separate Node process, so kill() alone does not terminate the entire tree.
    execFileSync('taskkill.exe', ['/PID', String(processHandle.pid), '/T', '/F'], {
      stdio: 'ignore',
      windowsHide: true,
    });
    return;
  }

  processHandle.kill('SIGTERM');
}

let previewProcess;
let auditUrl = requestedUrl;

try {
  if (!auditUrl) {
    if (!skipBuild) {
      console.log('Building the project before the Lighthouse audit.');
      const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
      execFileSync(npmCommand, ['run', 'build'], {
        cwd: projectRoot,
        stdio: 'inherit',
        shell: process.platform === 'win32',
      });
    }

    auditUrl = `http://127.0.0.1:${previewPort}/`;
    console.log(`Starting astro preview for the built dist: ${auditUrl}`);
    previewProcess = startPreview();
    await waitForPreview(auditUrl);
  }

  console.log(`Running Lighthouse CLI for ${auditUrl}`);
  runAudit(auditUrl, 'mobile', [
    '--form-factor',
    'mobile',
    '--screenEmulation.mobile',
    '--screenEmulation.width=360',
    '--screenEmulation.height=640',
    '--screenEmulation.deviceScaleFactor=2',
  ]);
  runAudit(auditUrl, 'desktop', ['--preset', 'desktop']);
} finally {
  stopPreview(previewProcess);
}

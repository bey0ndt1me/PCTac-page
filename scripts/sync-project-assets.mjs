import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';

// Explicit, reviewed allowlist; never recursively publish research directories.
const root = resolve(import.meta.dirname, '../..');
const destination = resolve(import.meta.dirname, '../public/project');
const commit = '446c86734788d652c5886b7d2445c5941a881ecf';
const figures = [
  ['teaser', 'Fig_teaser_v3.pdf'],
  ['sensor-design', 'Fig_sensor_explosion_v3.pdf'],
  ['learning-system', 'Fig_system_pipeline.pdf'],
  ['object-hue-fields', 'Fig_eight_objects_hue_maps.pdf'],
  ['successful-rollouts', 'Fig_rollouts_v6.pdf'],
  ['failure-cases', 'Fig_failure_samples_v3.pdf'],
];
mkdirSync(destination, { recursive: true });
const assets = figures.map(([name, original]) => {
  const bytes = execFileSync('git', ['show', `${commit}:figures/${original}`], { cwd: root, maxBuffer: 50 * 1024 * 1024 });
  const pdf = resolve(destination, `${name}.pdf`);
  writeFileSync(pdf, bytes);
  execFileSync(process.env.PDF_PYTHON ?? 'python', [resolve(import.meta.dirname, 'sanitize-figure-pdf.py'), pdf]);
  execFileSync('pdftoppm', ['-singlefile', '-scale-to', '2200', '-png', pdf, resolve(destination, name)]);
  return { name, source: `figures/${original}`, sourceCommit: commit, sourceSha256: createHash('sha256').update(bytes).digest('hex'), sha256: createHash('sha256').update(readFileSync(pdf)).digest('hex'), pngSha256: createHash('sha256').update(readFileSync(resolve(destination, `${name}.png`))).digest('hex'), transform: 'Remove PDF document/XMP identity metadata from website copy; Poppler PNG render, longest edge 2200 px. Manuscript source unchanged.' };
});
const results = [
  { policy: 'Vision-only', successes: [19, 9, 1] },
  { policy: 'Marker-based Wedge RGB', successes: [23, 21, 13] },
  { policy: 'Marker-based Wedge depth', successes: [20, 18, 15] },
  { policy: 'Marker-based Wedge normal', successes: [21, 20, 14] },
  { policy: 'Marker-based Wedge marker', successes: [22, null, null] },
  { policy: 'PCTac RGB', successes: [22, 25, 13] },
  { policy: 'PCTac Hue', successes: [24, 28, 16] },
];
const report = { updated: '2026-09-11', sourceCommit: commit, source: 'main.tex, Table I', status: 'Manuscript-reported counts; episode-level records not independently re-audited for this website update.', trialsPerTask: 30, tasks: ['Whiteboard Wiping', 'Test-Tube Insertion', 'Perturbed Test-Tube Insertion'], results };
writeFileSync(resolve(destination, 'results.json'), JSON.stringify(report, null, 2) + '\n');
writeFileSync(resolve(destination, 'results.csv'), 'policy,whiteboard_successes,tube_successes,perturbed_tube_successes,trials_per_task\n' + results.map(r => `${r.policy},${r.successes.map(n => n ?? '').join(',')},30`).join('\n') + '\n');
writeFileSync(resolve(destination, 'provenance.json'), JSON.stringify({ updated: report.updated, sourceCommit: commit, assets, exclusions: ['Raw episodes, model weights, credentials and local configurations', 'Full manuscript PDF and author metadata', 'Superseded duplicate figures and placeholder figures', 'Force/pressure claims and latency claims not independently supported for this release'] }, null, 2) + '\n');
console.log(`Prepared ${assets.length} figures and ${results.length} result rows from ${commit}`);

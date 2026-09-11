import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import test from 'node:test';
const root = new URL('../public/project/', import.meta.url);
test('all released figures retain their source hashes and valid PNG dimensions', async () => {
  const manifest = JSON.parse(await readFile(new URL('provenance.json', root), 'utf8'));
  assert.equal(manifest.assets.length, 6);
  for (const item of manifest.assets) {
    const pdf = await readFile(new URL(`${item.name}.pdf`, root));
    const png = await readFile(new URL(`${item.name}.png`, root));
    assert.equal(createHash('sha256').update(pdf).digest('hex'), item.sha256);
    assert.equal(createHash('sha256').update(png).digest('hex'), item.pngSha256);
    assert.equal(png.readUInt32BE(16), 2200);
  }
});
test('reported counts match reviewed manuscript transcription and preserve missing entries', async () => {
  const report = JSON.parse(await readFile(new URL('results.json', root), 'utf8'));
  assert.deepEqual(report.results.map(r => r.successes), [[19,9,1],[23,21,13],[20,18,15],[21,20,14],[22,null,null],[22,25,13],[24,28,16]]);
  assert.equal(report.trialsPerTask, 30);
  assert.match(report.status, /not independently re-audited/);
});

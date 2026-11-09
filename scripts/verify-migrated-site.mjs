import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = path.join(root, 'site');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'STATIC_SITE_MIGRATION.json'), 'utf8'));
let bytes = 0;
for (const file of manifest.files) {
  const full = path.resolve(site, file.path);
  assert.ok(full.startsWith(site + path.sep), `Unsafe asset path: ${file.path}`);
  const content = fs.readFileSync(full);
  assert.equal(content.length, file.size, `Size differs from source: ${file.path}`);
  assert.equal(createHash('sha256').update(content).digest('hex'), file.sha256,
    `Content differs from source: ${file.path}`);
  bytes += content.length;
}
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
}
assert.equal(walk(site).length, manifest.files.length, 'Unexpected published file');
const html = fs.readFileSync(path.join(site, 'index.html'), 'utf8');
assert.match(html, /PCTac/);
const ids = new Set([...html.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]));
let links = 0;
function check(url, parent) {
  if (url.startsWith('#')) {
    assert.ok(ids.has(url.slice(1)), `Missing section: ${url}`);
    return;
  }
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) return;
  const clean = decodeURIComponent(url.split(/[?#]/)[0]);
  if (!clean) return;
  assert.ok(!clean.startsWith('/'), `Root-relative URL breaks project hosting: ${url}`);
  const full = path.resolve(parent, clean);
  assert.ok(full.startsWith(site + path.sep), `Resource escapes published directory: ${url}`);
  assert.ok(fs.existsSync(full), `Missing local resource: ${url}`);
  links++;
}
for (const match of html.matchAll(/\b(?:href|src|poster)=["']([^"']+)["']/g)) check(match[1], site);
for (const css of walk(site).filter(p => p.endsWith('.css'))) {
  for (const match of fs.readFileSync(css, 'utf8').matchAll(/url\(\s*["']?([^"')\s]+)["']?\s*\)/g)) {
    check(match[1], path.dirname(css));
  }
}
console.log(JSON.stringify({ source_commit: manifest.source_commit,
  files: manifest.files.length, bytes, local_resource_links: links,
  media_sha256_matches_source: true, target_url: manifest.target_url }, null, 2));

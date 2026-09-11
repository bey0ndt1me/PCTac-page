import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const repositoryName = "photonic-crystal-visuotactile-site";
const basePath = `/${repositoryName}`;
const siteUrl = `https://bey0ndt1me.github.io${basePath}`;

test("exports a complete GitHub Pages artifact", async () => {
  await Promise.all([
    access(new URL("../out/.nojekyll", import.meta.url)),
    access(new URL("../out/404.html", import.meta.url)),
    access(new URL("../out/study-design-placeholder.png", import.meta.url)),
    access(new URL("../out/og.png", import.meta.url)),
  ]);

  const html = await readFile(
    new URL("../out/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /<title>PCTac/);
  assert.match(html, /Anonymous Authors/);
  assert.match(html, /Manuscript-reported results/);
  assert.match(html.replace(/<!--.*?-->/g, ""), /68\/90/);
  assert.match(html, /Not reported/);
  assert.match(html, /name="robots" content="noindex, nofollow"/i);
  assert.match(html, new RegExp(`${basePath}/_next/static/`));
  assert.match(html, new RegExp(`${basePath}/project/teaser\\.png`));
  assert.match(html, new RegExp(`${siteUrl}/og\\.png`));
  assert.doesNotMatch(html, /paper-draft\.pdf|SO-101|GelSight/);
  assert.doesNotMatch(
    html,
    /(?:href|src)="\/study-design-placeholder\.png"/,
  );

  const localAssetPaths = [
    ...html.matchAll(/(?:href|src)="([^"]+)"/g),
  ]
    .map((match) => match[1])
    .filter((value) => value.startsWith(`${basePath}/`))
    .map((value) => value.slice(basePath.length + 1));

  assert.ok(localAssetPaths.length > 5);
  await Promise.all(
    [...new Set(localAssetPaths)].map((path) =>
      access(new URL(`../out/${path}`, import.meta.url)),
    ),
  );
});

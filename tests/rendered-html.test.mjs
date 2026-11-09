import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the project results page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>PCTac \| Direct Structural-Color Tactile Feedback<\/title>/i,
  );
  assert.match(html, /Three contact-rich tasks/);
  assert.match(html, /Ruilin Zhang/);
  assert.match(html, /Chenxi Xiao/);
  assert.doesNotMatch(html, /Anonymous Authors/);
  assert.match(html, /Manuscript-reported results/);
  assert.match(html, /not a significance test/i);
  assert.match(html, /Not reported/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("keeps evidence boundaries and required assets in the release", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    access(new URL("../public/study-design-placeholder.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);

  assert.match(
    page,
    /No stock footage or synthetic performance results/,
  );
  assert.match(page, /without interpreting them as calibrated force or pressure/);
  assert.match(page, /not reconstructed physical height, depth or pressure/);
  assert.match(page, /not independently re-audited/);
  assert.doesNotMatch(page, /paper-draft\.pdf|SO-101|GelSight/);
  assert.match(page, /ShanghaiTech University/);
  assert.match(page, /BIGAI/);
  assert.match(layout, /index:\s*true/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
});

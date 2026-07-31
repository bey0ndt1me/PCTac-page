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

test("renders the anonymous result-free research page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Photonic-Crystal Tactile Feedback \| Anonymous Research Preview<\/title>/i,
  );
  assert.match(html, /Matched-Trajectory Evaluation/);
  assert.match(html, /Anonymous Authors/);
  assert.match(html, /Experimental results pending/);
  assert.match(html, /not measured data/i);
  assert.match(html, /Planned/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("keeps evidence boundaries and required assets in the release", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    access(new URL("../public/paper-draft.pdf", import.meta.url)),
    access(new URL("../public/study-design-placeholder.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);

  assert.match(
    page,
    /Synthetic smoke tests validate software\s+and interfaces only/,
  );
  assert.match(page, /No calibrated grip-force claim/);
  assert.match(page, /CC BY-NC-SA 4\.0/);
  assert.match(layout, /index:\s*false/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
});

# Photonic tactile project website

## Scope

- This directory contains the anonymous project website source inside the
  unified PhCTac research repository.
- Keep the site private during double-blind review unless the user explicitly
  approves a different access mode.

## Scientific-content rules

- Treat the website as a result-free research preview until real, locked
  analyses replace the pending state. The 2026-09-11 update replaces the result-free
  state with explicitly manuscript-reported task counts from commit 446c867.
  Keep missing entries null and the independent-re-audit caveat visible.
- Never present planned trial counts, synthetic checks, generated graphics, or
  open-source reference media as measured project evidence.
- Preserve the labels `Planned`, `not measured data`, `result-free`, and
  `reference footage only` unless their underlying evidence status changes.
- PC and marker-based Wedge do not receive precise force/pressure calibration;
  use `gripper command` or `gripper effort`, never grip force in newtons.
- Keep authors anonymous until the user confirms that public identity is safe
  for the submission timeline.

## Commands

- Install: `npm install`
- Develop: `npm run dev`
- Production build: `npm run build`
- GitHub Pages static build: `npm run build:github-pages`
- Rendered HTML tests: `node --test tests/rendered-html.test.mjs`
- GitHub Pages artifact test: `npm run test:github-pages`
- Lint: `npm run lint`
- Full local verification: `npm test && npm run test:github-pages && npm run lint`
- Conda environment: not applicable; this is a Node.js site.

## Assets and licensing

- The manuscript PDF is intentionally excluded from this unified repository.
- `public/study-design-placeholder.png` is a hypothesis/layout placeholder, not
  a result.
- `public/og.png` is a generated design asset, not scientific evidence.
- Maintain the attributions in `THIRD_PARTY_NOTICES.md`.
- Stale SO-101 third-party reference media has been removed; any future media
  must match the Hiwonder HX platform and have traceable provenance.

## Hosting

- Preserve the vinext/Vite/Sites structure and `.openai/hosting.json`.
- Run a successful production build and rendered HTML test before saving a Sites
  version.
- Preserve the separate Next.js static-export path and the repository subpath
  used by GitHub Pages.
- The private source repository publishes a public GitHub Pages site at
  `https://bey0ndt1me.github.io/photonic-crystal-visuotactile-site/` with the
  user's approval. Do not mistake repository privacy or `noindex` metadata for
  website access control.
- Keep the Sites deployment private. Do not change access, add a custom domain,
  or enable search indexing without explicit user approval.

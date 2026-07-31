# Photonic tactile project website

## Scope

- This repository contains the anonymous project website only.
- The research manuscript, protocols, raw data, controller code, and experiment
  outputs remain in the separate research repository.
- Keep the site private during double-blind review unless the user explicitly
  approves a different access mode.

## Scientific-content rules

- Treat the website as a result-free research preview until real, locked
  analyses replace the pending state.
- Never present planned trial counts, synthetic checks, generated graphics, or
  open-source reference media as measured project evidence.
- Preserve the labels `Planned`, `not measured data`, `result-free`, and
  `reference footage only` unless their underlying evidence status changes.
- Use `gripper command` or `gripper effort`, not grip force in newtons, until an
  independent command-to-force calibration is available.
- Keep authors anonymous until the user confirms that public identity is safe
  for the submission timeline.

## Commands

- Install: `npm install`
- Develop: `npm run dev`
- Production build: `npm run build`
- Rendered HTML tests: `node --test tests/rendered-html.test.mjs`
- Lint: `npm run lint`
- Full local verification: `npm test && npm run lint`
- Conda environment: not applicable; this is a Node.js site.

## Assets and licensing

- `public/paper-draft.pdf` is the anonymous, result-free manuscript copy.
- `public/study-design-placeholder.png` is a hypothesis/layout placeholder, not
  a result.
- `public/og.png` is a generated design asset, not scientific evidence.
- Maintain the attributions in `THIRD_PARTY_NOTICES.md`.
- Replace third-party reference media with traceable, project-owned footage
  before a public paper release when practical.

## Hosting

- Preserve the vinext/Vite/Sites structure and `.openai/hosting.json`.
- Run a successful production build and rendered HTML test before saving a Sites
  version.
- Deploy privately by default. Do not publish publicly, change access, add a
  custom domain, or enable search indexing without explicit user approval.

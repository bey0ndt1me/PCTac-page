# Photonic-Crystal Tactile Feedback — project website

## Current release: September 11, 2026

The page now displays six current PCTac figure plates and manuscript-reported
results for seven configurations across three tasks. See `UPDATE_20260911.md`
and `public/project/provenance.json` for evidence boundaries and reproducibility.
GitHub Pages is the requested public release target; the old standalone repository
is used only as a publication mirror of this canonical Website directory.
The result-free description below documents the prior August preview, not the
current release. Missing measurements remain explicitly missing.

Project website source for the PCTac study, now consolidated under the unified
PhCTac research repository, for:

> Matched-Trajectory Evaluation of Photonic-Crystal Tactile Inner-Loop
> Feedback for Slip-Responsive Grasping

The page follows the information architecture of the open-source Academic
Project Astro Template / Academic Project Page Template / Nerfies family, while
using an original React and CSS implementation tailored to this study and the
Sites-compatible vinext runtime.

The previous standalone repository and public GitHub Pages deployment are
historical deployment locations. This unified copy does not activate a root
GitHub Actions workflow or redeploy the site.

## Evidence policy

- Planned trial counts are labeled `Planned`.
- The manuscript PDF is intentionally excluded from the unified repository.
- The study-design image remains visibly labeled as a hypothesis/placeholder.
- The current platform is Hiwonder HX leader/follower; stale SO-101 reference
  footage has been removed.
- Synthetic software checks are never presented as scientific performance.
- The generated social card is a design asset and contains no experimental
  result.

## Local development

```powershell
npm install
npm run dev
npm test
npm run test:github-pages
```

`npm test` verifies the private Sites build. `npm run test:github-pages` creates
and checks the static `out/` artifact with the repository subpath applied to all
local assets.

## Hosting and visibility

- The source repository is public (`bey0ndt1me/PCTac-page`).
- The GitHub Pages website is public and is published from `site/`.
- Author identity is public since 2026-11-09: the page credits the real author
  list, so the double-blind-review identity constraint no longer applies.
- Search indexing is allowed as of 2026-11-09 (the author asked for it): the
  `noindex` meta tag was removed and `site/robots.txt` now serves `Allow: /`.
- The existing Sites deployment remains a separate private preview.

`.github/workflows/pages.yml` at the repository root verifies the `site/`
artifact with `node scripts/verify-migrated-site.mjs` and deploys it to GitHub
Pages on every push to `main`.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for template and media
attribution.

## Current GitHub Pages site (2026-11-09)

The published website is a static import from `Anonymousresearcher-6657/PCTac` at `6b1f85f2e70a58afbab96cd7c7ac11c9f853001c`, with `site/index.html` and `site/_next/static/css/20c3f2f8edbdd7ef.css` edited on 2026-11-09 to credit the real author list and drop the anonymous venue line (see `post_import_edits` in `STATIC_SITE_MIGRATION.json`).
The Pages workflow validates and uploads only `site/`; the original private Sites application source and deployment configuration are retained.

- Website: https://bey0ndt1me.github.io/photonic-crystal-visuotactile-site/
- Verify: `node scripts/verify-migrated-site.mjs`
- Provenance and SHA-256 inventory: `STATIC_SITE_MIGRATION.json`
- Pre-migration restore point: `archive/site-before-anonymous-migration-20261109` (`2c0cfc09aec57581b69f035b5a884d134c33150e`)

All other imported files remain byte-for-byte copies of the source; only the two
files listed above were edited. Source and target Git histories are retained by
the migration merge.

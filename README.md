# Photonic-Crystal Tactile Feedback — project website

## Current release: September 11, 2026

The page now displays six current PCTac figure plates and manuscript-reported
results for seven configurations across three tasks. See `UPDATE_20260911.md`
and `public/project/provenance.json` for evidence boundaries and reproducibility.
GitHub Pages is the requested public release target; the old standalone repository
is used only as a publication mirror of this canonical Website directory.
The result-free description below documents the prior August preview, not the
current release. Missing measurements remain explicitly missing.

Anonymous research-project website source, now consolidated under the private
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

- The source repository remains private.
- The GitHub Pages website is public because a private personal repository does
  not make its Pages site private.
- The default Pages URL exposes the GitHub owner handle `bey0ndt1me`; this is a
  known double-blind-review identity risk.
- Search indexing is discouraged with `noindex, nofollow`, but that metadata is
  advisory and is not access control.
- The existing Sites deployment remains a separate private preview.

The nested historical `.github/workflows/pages.yml` is retained only to preserve
the standalone site source history; GitHub does not execute nested workflows
from the unified repository. Publishing or redeploying still requires explicit
user authorization.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for template and media
attribution.

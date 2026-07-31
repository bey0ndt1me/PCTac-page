# Photonic-Crystal Tactile Feedback — project website

Anonymous research-project website with a private source repository and a
public GitHub Pages deployment for:

> Matched-Trajectory Evaluation of Photonic-Crystal Tactile Inner-Loop
> Feedback for Slip-Responsive Grasping

The page follows the information architecture of the open-source Academic
Project Astro Template / Academic Project Page Template / Nerfies family, while
using an original React and CSS implementation tailored to this study and the
Sites-compatible vinext runtime.

GitHub Pages site:
<https://bey0ndt1me.github.io/photonic-crystal-visuotactile-site/>

## Evidence policy

- Planned trial counts are labeled `Planned`.
- The manuscript PDF is labeled result-free.
- The study-design image remains visibly labeled as a hypothesis/placeholder.
- Open-source SO-101 footage is identified as reference footage and is not
  represented as project data.
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

Pushes to `main` run `.github/workflows/pages.yml`, verify a static Next.js
export, and deploy `out/` through the official GitHub Pages Actions.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for template and media
attribution.

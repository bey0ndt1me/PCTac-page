import { writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const fallbackRepository =
  "bey0ndt1me/photonic-crystal-visuotactile-site";
const repository = process.env.GITHUB_REPOSITORY ?? fallbackRepository;
const [owner, repositoryName, ...extraParts] = repository.split("/");

if (!owner || !repositoryName || extraParts.length > 0) {
  throw new Error(
    `GITHUB_REPOSITORY must use the owner/repository form; received ${repository}`,
  );
}

const isUserSite =
  repositoryName.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const basePath = isUserSite ? "" : `/${repositoryName}`;
const siteUrl = `https://${owner}.github.io${basePath}`;
const nextCli = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);

const result = spawnSync(process.execPath, [nextCli, "build", "--webpack"], {
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
    NEXT_TELEMETRY_DISABLED: "1",
  },
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

await writeFile(new URL("../out/.nojekyll", import.meta.url), "", "utf8");

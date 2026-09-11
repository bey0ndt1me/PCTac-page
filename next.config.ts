import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ??
  "photonic-crystal-visuotactile-site";
const basePath = isGitHubPages
  ? (process.env.NEXT_PUBLIC_BASE_PATH ?? `/${repositoryName}`)
  : "";
const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      outputFileTracingRoot: projectRoot,
      trailingSlash: true,
      basePath,
      images: {
        unoptimized: true,
      },
    }
  : { outputFileTracingRoot: projectRoot };

export default nextConfig;

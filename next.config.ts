import type { NextConfig } from "next";

// evansem.github.io is a user site served from the domain root, so no basePath.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

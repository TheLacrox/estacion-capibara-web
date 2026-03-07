import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Security headers (X-Frame-Options, CSP, etc.) must be configured at
  // nginx/caddy level since output: "export" ignores headers() in next.config.
};

export default nextConfig;

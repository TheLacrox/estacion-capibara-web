import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // Inline the CSS instead of a render-blocking <link> chunk: text-only
    // wiki pages were failing mobile LCP (~3.7s) purely on the blocked
    // render path, not on payload size.
    inlineCss: true,
  },
  // Security headers (X-Frame-Options, CSP, etc.) must be configured at
  // nginx/caddy level since output: "export" ignores headers() in next.config.
};

export default nextConfig;

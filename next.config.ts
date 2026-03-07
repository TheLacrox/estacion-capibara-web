import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // Security headers (X-Frame-Options, CSP, etc.) must be configured at
  // nginx/caddy level since output: "export" ignores headers() in next.config.
  // NOTE: Trailing slash 404s must be fixed at the nginx level with:
  //   rewrite ^(.+)/$ $1 permanent;
};

export default nextConfig;

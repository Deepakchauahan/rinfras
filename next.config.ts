import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* 1. Force Next.js to generate static HTML files (creates the 'out' directory) */
  output: "export",

  /* 2. Add the repository name prefix so styles and scripts load from the correct path */
  basePath: isProd ? "/rinfras" : "",

  /* 3. Required: GitHub Pages doesn't support the dynamic Next.js image optimization API */
  images: {
    unoptimized: true,
  },

};

export default nextConfig;

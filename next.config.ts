import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/rinfras" : "",
  images: {
    unoptimized: true,
  },
  // Add this env block below:
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/rinfras" : "",
  },
};

export default nextConfig;

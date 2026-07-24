import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/rinfras" : undefined, // Uses undefined instead of empty string
  images: {
    unoptimized: true, // Prevents export build failure
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/rinfras" : "",
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/websample", destination: "/websample/index.html" }];
  },
};

export default nextConfig;

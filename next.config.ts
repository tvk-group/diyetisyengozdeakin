import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2400],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 768, 1024, 1280],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

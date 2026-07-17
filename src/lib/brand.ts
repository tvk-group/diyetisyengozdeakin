export const BRAND = {
  forestGreen: "#3D5245",
  champagneGold: "#C5A46D",
  cream: "#FAF8F4",
} as const;

export const BRAND_IMAGES = {
  logo: "/brand/logo.png",
  logoMark: "/brand/logo.png",
  logoTransparent: "/brand/logo-transparent.png",
  banner: "/brand/banner.png",
} as const;

/** Source dimensions after HD enhancement (2400px wide) */
export const BRAND_DIMENSIONS = {
  logo: { width: 2400, height: 1600 },
  banner: { width: 2400, height: 1600 },
} as const;

/** Next/Image quality for brand assets (avoid soft recompression) */
export const BRAND_IMAGE_QUALITY = 100;

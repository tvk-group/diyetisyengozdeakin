export const BRAND = {
  forestGreen: "#3D5245",
  champagneGold: "#C5A46D",
  cream: "#FAF8F4",
} as const;

export const BRAND_IMAGES = {
  logo: "/brand/logo.png",
  logoMark: "/brand/logo.png",
  banner: "/brand/banner.png",
} as const;

/** Display dimensions for next/image (source files are 1536×1024) */
export const BRAND_DIMENSIONS = {
  logo: { width: 1536, height: 1024 },
  banner: { width: 1536, height: 1024 },
} as const;

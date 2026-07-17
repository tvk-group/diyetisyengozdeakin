export const BRAND = {
  forestGreen: "#3D5245",
  champagneGold: "#C5A46D",
  cream: "#FAF8F4",
} as const;

export const BRAND_IMAGES = {
  logo: "/brand/logo.svg",
  logoMark: "/brand/logo-mark.svg",
  banner: "/brand/banner.svg",
  /** Replace with /brand/logo.png when uploading raster logo */
  logoPng: "/brand/logo.png",
  bannerPng: "/brand/banner.png",
} as const;

export function brandAsset(preferred: string, fallback: string) {
  return preferred;
}

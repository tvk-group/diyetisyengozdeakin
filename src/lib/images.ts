/**
 * Professional photo assets for Gözde Akın.
 * Place image files in /public/images/gozde/
 */
export const GOZDE_IMAGES = {
  /** Memorial hospital — hero & profile (lab coat) */
  heroMemorial: "/images/gozde/gozde-memorial-hero.jpg",
  /** Profile portrait for about page & schema */
  profile: "/images/gozde/gozde-memorial-hero.jpg",
  /** Instagram Reel: Akşam Gelen Tatlı Krizi */
  reelTatliKrizi: "/images/gozde/reel-tatli-krizi.jpg",
  /** Instagram Reel: İnsülin Direnci */
  reelInsulinDirenci: "/images/gozde/reel-insulin-direnci.jpg",
} as const;

export const INSTAGRAM_REELS = [
  {
    id: "tatli-krizi",
    image: GOZDE_IMAGES.reelTatliKrizi,
    blogSlug: "tatli-krizlerinin-psikolojisi",
    titleKey: "reel1Title",
    subtitleKey: "reel1Subtitle",
  },
  {
    id: "insulin-direnci",
    image: GOZDE_IMAGES.reelInsulinDirenci,
    blogSlug: "kilo-verememenin-gizli-nedeni-insulin-direnci",
    serviceSlug: "insulin-direnci",
    titleKey: "reel2Title",
    subtitleKey: "reel2Subtitle",
  },
] as const;

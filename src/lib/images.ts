/**
 * Professional photo assets for Gözde Akın.
 * Place source portrait at public/images/gozde/gozde-portrait-source.jpg
 * then run: npm run portrait:install
 */
export const GOZDE_IMAGES = {
  /** Memorial hospital — hero (lab coat) */
  heroMemorial: "/images/gozde/gozde-memorial-hero.jpg",
  /** About & online consultation — same professional portrait */
  profileOffice: "/images/gozde/gozde-memorial-hero.jpg",
  /** Profile for schema & about preview */
  profile: "/images/gozde/gozde-memorial-hero.jpg",
  /** Instagram Reel: Akşam Gelen Tatlı Krizi */
  reelTatliKrizi: "/images/gozde/reel-tatli-krizi.jpg",
  /** Instagram Reel: İnsülin Direnci */
  reelInsulinDirenci: "/images/gozde/reel-insulin-direnci.jpg",
  /** Instagram Reel: 5 Basit Kural */
  reel5Kural: "/images/gozde/reel-5-basit-kural.jpg",
  /** Instagram Reel: Karnıyarık Otu Tohumu */
  reelKarniyarikOtu: "/images/gozde/reel-karniyarik-otu.jpg",
  /** Success story: Ekip İşi, Sağlıklı Değişim */
  successEkipIsi: "/images/gozde/success-ekip-isi.jpg",
} as const;

export type InstagramReelItem = {
  id: string;
  image: string;
  titleKey: string;
  subtitleKey: string;
  blogSlug?: string;
  href?: string;
  imageFit?: "cover" | "contain";
};

export const INSTAGRAM_REELS: InstagramReelItem[] = [
  {
    id: "karniyarik-otu",
    image: GOZDE_IMAGES.reelKarniyarikOtu,
    blogSlug: "karniyarik-otu-tohumu",
    titleKey: "reel4Title",
    subtitleKey: "reel4Subtitle",
  },
  {
    id: "ekip-isi",
    image: GOZDE_IMAGES.successEkipIsi,
    href: "#basari-hikayeleri",
    titleKey: "reel5Title",
    subtitleKey: "reel5Subtitle",
    imageFit: "contain",
  },
  {
    id: "5-basit-kural",
    image: GOZDE_IMAGES.reel5Kural,
    blogSlug: "kilo-vermeyi-hizlandiran-5-basit-kural",
    titleKey: "reel3Title",
    subtitleKey: "reel3Subtitle",
  },
  {
    id: "insulin-direnci",
    image: GOZDE_IMAGES.reelInsulinDirenci,
    blogSlug: "kilo-verememenin-gizli-nedeni-insulin-direnci",
    titleKey: "reel2Title",
    subtitleKey: "reel2Subtitle",
  },
  {
    id: "tatli-krizi",
    image: GOZDE_IMAGES.reelTatliKrizi,
    blogSlug: "tatli-krizlerinin-psikolojisi",
    titleKey: "reel1Title",
    subtitleKey: "reel1Subtitle",
  },
];

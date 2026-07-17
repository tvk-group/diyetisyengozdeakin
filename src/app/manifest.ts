import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Gözde Akın — Uzman Diyetisyen & Psikolog",
    short_name: "Gözde Akın",
    description:
      "Sürdürülebilir beslenme, fonksiyonel tıp ve psikoloji destekli danışmanlık. Memorial İstanbul.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F4",
    theme_color: "#3D5245",
    orientation: "portrait-primary",
    scope: "/",
    lang: "tr",
    categories: ["health", "medical", "lifestyle"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icons/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/brand/banner.png",
        sizes: "1200x630",
        type: "image/jpeg",
        form_factor: "wide",
        label: SITE_CONFIG.shortName,
      },
    ],
    shortcuts: [
      {
        name: "Randevu Al",
        short_name: "Randevu",
        url: "/iletisim",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Hesaplayıcılar",
        short_name: "Hesapla",
        url: "/#hesaplayicilar",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Blog",
        short_name: "Blog",
        url: "/blog",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}

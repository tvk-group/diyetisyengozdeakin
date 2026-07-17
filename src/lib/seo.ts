import { SITE_CONFIG, LOCALES } from "@/lib/constants";
import { routing } from "@/i18n/routing";

const PHYSICIAN_ALTERNATE_NAMES = [
  "Diyetisyen Gözde Akın",
  "Dyt. Gözde Akın",
  "Gözde Akın",
  "Uzman Diyetisyen Gözde Akın",
  "Diyetisyen Gozde Akin",
] as const;

export function getAlternates(path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const languages: Record<string, string> = {};

  for (const locale of LOCALES) {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    languages[locale] = `${SITE_CONFIG.url}${prefix}${normalized || ""}`;
  }

  languages["x-default"] = `${SITE_CONFIG.url}${normalized || ""}`;

  return { canonical: languages[routing.defaultLocale], languages };
}

export function organizationJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Gözde Akın",
    alternateName: PHYSICIAN_ALTERNATE_NAMES,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    image: `${SITE_CONFIG.url}/images/gozde/profile.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    sameAs: [
      SITE_CONFIG.instagram,
      SITE_CONFIG.linkedin,
      SITE_CONFIG.memorialProfile,
      SITE_CONFIG.whatsapp,
    ],
    availableLanguage: LOCALES,
    inLanguage: locale,
  };
}

export function physicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Gözde Akın",
    alternateName: PHYSICIAN_ALTERNATE_NAMES,
    jobTitle: "Uzman Diyetisyen & Psikolog",
    description:
      "Fonksiyonel tıp, gebelikte beslenme, PCOS, diyabet ve insülin direnci uzmanı. Memorial Göztepe ve Ataşehir.",
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    image: `${SITE_CONFIG.url}/images/gozde/profile.jpg`,
    worksFor: {
      "@type": "MedicalOrganization",
      name: "Memorial Sağlık Grubu",
      url: "https://www.memorial.com.tr",
    },
    medicalSpecialty: ["Nutrition", "Psychology", "Functional Medicine"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    sameAs: [
      SITE_CONFIG.instagram,
      SITE_CONFIG.linkedin,
      SITE_CONFIG.memorialProfile,
      SITE_CONFIG.whatsapp,
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Diyetisyen Gözde Akın",
    alternateName: PHYSICIAN_ALTERNATE_NAMES,
    url: SITE_CONFIG.url,
    inLanguage: LOCALES,
    publisher: {
      "@type": "Person",
      name: "Gözde Akın",
    },
  };
}

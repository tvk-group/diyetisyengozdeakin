import { SITE_CONFIG, LOCALES } from "@/lib/constants";
import { routing } from "@/i18n/routing";

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

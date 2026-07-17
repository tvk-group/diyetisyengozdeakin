export const SITE_CONFIG = {
  name: "Uzman Diyetisyen & Psikolog Gözde Akın",
  shortName: "Dyt. Gözde Akın",
  domain: "diyetisyengozdeakin.com",
  url: "https://diyetisyengozdeakin.com",
  email: "dytgozdeakin@gmail.com",
  phone: "+90 (0) 538 935 92 14",
  phoneRaw: "+905389359214",
  whatsapp: "https://wa.me/905389359214",
  instagram: "https://www.instagram.com/diyetisyengozdeakin/",
  instagramHandle: "@diyetisyengozdeakin",
  memorialHandle: "@memorialsaglik",
} as const;

export const HOSPITALS = [
  {
    id: "goztepe",
    name: "Memorial Göztepe Hastanesi",
    city: "İstanbul",
    district: "Göztepe",
  },
  {
    id: "atasehir",
    name: "Memorial Ataşehir Hastanesi",
    city: "İstanbul",
    district: "Ataşehir",
  },
] as const;

export const EXPERTISE_AREAS = [
  "pregnancy",
  "pcos",
  "diabetes",
  "insulinResistance",
  "obesity",
  "weightManagement",
  "functionalMedicine",
  "sportsNutrition",
  "gutHealth",
  "hormonalBalance",
  "corporateNutrition",
  "childrenNutrition",
  "menopause",
  "healthyAging",
] as const;

export const SERVICE_SLUGS = [
  "kilo-yonetimi",
  "pcos",
  "gebelikte-beslenme",
  "diyabet",
  "insulin-direnci",
  "obezite",
  "fonksiyonel-tip",
  "kurumsal-beslenme",
  "sporcu-beslenmesi",
  "cocuk-beslenmesi",
  "hormon-dengesi",
  "menopoz",
] as const;

export const BLOG_CATEGORIES = [
  "nutrition",
  "recipes",
  "hormones",
  "womensHealth",
  "pcos",
  "insulinResistance",
  "pregnancy",
  "children",
  "gutHealth",
  "functionalMedicine",
  "psychology",
  "healthyLifestyle",
] as const;

export const LOCALES = ["tr", "en", "de", "fr", "ru", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  fr: "Français",
  ru: "Русский",
  ar: "العربية",
};

export const RTL_LOCALES: Locale[] = ["ar"];

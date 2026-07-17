import type { EXPERTISE_AREAS } from "@/lib/constants";

type ExpertiseArea = (typeof EXPERTISE_AREAS)[number];

export const EXPERTISE_SERVICE_SLUGS: Partial<Record<ExpertiseArea, string>> = {
  pregnancy: "gebelikte-beslenme",
  pcos: "pcos",
  diabetes: "diyabet",
  insulinResistance: "insulin-direnci",
  obesity: "obezite",
  weightManagement: "kilo-yonetimi",
  functionalMedicine: "fonksiyonel-tip",
  sportsNutrition: "sporcu-beslenmesi",
  gutHealth: "fonksiyonel-tip",
  hormonalBalance: "hormon-dengesi",
  corporateNutrition: "kurumsal-beslenme",
  childrenNutrition: "cocuk-beslenmesi",
  menopause: "menopoz",
  healthyAging: "fonksiyonel-tip",
};

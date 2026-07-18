import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getWhyChooseTheme, type WhyChooseKey } from "@/lib/card-themes";
import { FeatureCard } from "@/components/ui/ThemedCard";

export async function WhyChoose() {
  const t = await getTranslations("whyChoose");

  const items: { key: WhyChooseKey; title: string; desc: string }[] = [
    { key: "scienceBased", title: t("scienceBased"), desc: t("scienceBasedDesc") },
    { key: "personalized", title: t("personalized"), desc: t("personalizedDesc") },
    { key: "psychologyNutrition", title: t("psychologyNutrition"), desc: t("psychologyNutritionDesc") },
    { key: "medicalAnalysis", title: t("medicalAnalysis"), desc: t("medicalAnalysisDesc") },
    { key: "longTerm", title: t("longTerm"), desc: t("longTermDesc") },
    { key: "noCrashDiets", title: t("noCrashDiets"), desc: t("noCrashDietsDesc") },
  ];

  return (
    <Section>
      <SectionHeader badge={t("sectionTitle")} title={t("title")} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ key, title, desc }) => (
          <FeatureCard
            key={key}
            theme={getWhyChooseTheme(key)}
            title={title}
            description={desc}
            centered={false}
          />
        ))}
      </div>
    </Section>
  );
}

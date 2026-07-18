import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { EXPERTISE_AREAS } from "@/lib/constants";
import { EXPERTISE_SERVICE_SLUGS } from "@/lib/expertise";
import { getExpertiseTheme } from "@/lib/card-themes";
import { CompactThemedCard } from "@/components/ui/ThemedCard";

export async function Expertise() {
  const t = await getTranslations("expertise");

  return (
    <Section variant="light">
      <SectionHeader badge={t("sectionTitle")} title={t("title")} />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {EXPERTISE_AREAS.map((area) => {
          const slug = EXPERTISE_SERVICE_SLUGS[area];
          const theme = getExpertiseTheme(area);

          return (
            <CompactThemedCard
              key={area}
              theme={theme}
              title={t(area)}
              href={slug ? `/hizmetler/${slug}` : undefined}
            />
          );
        })}
      </div>
    </Section>
  );
}

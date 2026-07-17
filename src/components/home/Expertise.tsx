import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/ui/Section";
import { EXPERTISE_AREAS } from "@/lib/constants";
import { EXPERTISE_SERVICE_SLUGS } from "@/lib/expertise";
import {
  Activity,
  Baby,
  Building2,
  Dumbbell,
  Flame,
  Heart,
  Leaf,
  Scale,
  Sparkles,
  Stethoscope,
  Users,
  Wheat,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  pregnancy: Baby,
  pcos: Sparkles,
  diabetes: Activity,
  insulinResistance: Flame,
  obesity: Scale,
  weightManagement: Scale,
  functionalMedicine: Leaf,
  sportsNutrition: Dumbbell,
  gutHealth: Wheat,
  hormonalBalance: Heart,
  corporateNutrition: Building2,
  childrenNutrition: Users,
  menopause: Heart,
  healthyAging: Stethoscope,
};

export async function Expertise() {
  const t = await getTranslations("expertise");

  return (
    <Section variant="light">
      <SectionHeader badge={t("sectionTitle")} title={t("title")} />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {EXPERTISE_AREAS.map((area) => {
          const Icon = iconMap[area] || Leaf;
          const slug = EXPERTISE_SERVICE_SLUGS[area];
          const content = (
            <>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-emerald group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-navy">{t(area)}</span>
            </>
          );

          if (slug) {
            return (
              <Link
                key={area}
                href={`/hizmetler/${slug}`}
                className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald/5"
              >
                {content}
              </Link>
            );
          }

          return (
            <div
              key={area}
              className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
            >
              {content}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  Brain,
  FlaskConical,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export async function WhyChoose() {
  const t = await getTranslations("whyChoose");

  const items = [
    { icon: FlaskConical, title: t("scienceBased"), desc: t("scienceBasedDesc") },
    { icon: HeartHandshake, title: t("personalized"), desc: t("personalizedDesc") },
    { icon: Brain, title: t("psychologyNutrition"), desc: t("psychologyNutritionDesc") },
    { icon: Microscope, title: t("medicalAnalysis"), desc: t("medicalAnalysisDesc") },
    { icon: TrendingUp, title: t("longTerm"), desc: t("longTermDesc") },
    { icon: ShieldCheck, title: t("noCrashDiets"), desc: t("noCrashDietsDesc") },
  ];

  return (
    <Section>
      <SectionHeader badge={t("sectionTitle")} title={t("title")} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-navy/5 bg-white p-8 transition-all duration-300 hover:border-emerald/20 hover:shadow-xl hover:shadow-emerald/5"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10 text-emerald transition-colors group-hover:bg-emerald group-hover:text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading mb-2 text-lg font-semibold text-navy">{title}</h3>
            <p className="text-sm text-navy/60">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

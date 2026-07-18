import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getJourneyTheme, type JourneyStepKey } from "@/lib/card-themes";
import { ThemedCard } from "@/components/ui/ThemedCard";
import { cn } from "@/lib/utils";

const STEP_KEYS: JourneyStepKey[] = ["step1", "step2", "step3", "step4", "step5", "step6"];

export async function PatientJourney() {
  const t = await getTranslations("journey");

  return (
    <Section>
      <SectionHeader badge={t("sectionTitle")} title={t("title")} />
      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-emerald/40 via-emerald/20 to-transparent md:block" />
        <div className="space-y-8 md:space-y-0">
          {STEP_KEYS.map((stepKey, i) => {
            const theme = getJourneyTheme(stepKey);
            const Icon = theme.Icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={stepKey}
                className={`relative flex items-center gap-8 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <ThemedCard
                    theme={theme}
                    showDecor
                    decorSize="sm"
                    className={cn("inline-block p-6", isEven ? "md:ml-auto" : "")}
                  >
                    <h3 className="font-heading mb-1 font-semibold text-navy">{t(stepKey)}</h3>
                    <p className="text-sm text-navy/60">{t(`${stepKey}Desc`)}</p>
                  </ThemedCard>
                </div>
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald text-white shadow-lg shadow-emerald/30 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="hidden flex-1 md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

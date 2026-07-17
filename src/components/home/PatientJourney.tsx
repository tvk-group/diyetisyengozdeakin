import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  ArrowDown,
  ClipboardList,
  FlaskConical,
  LineChart,
  MessageCircle,
  Target,
} from "lucide-react";

export async function PatientJourney() {
  const t = await getTranslations("journey");

  const steps = [
    { icon: MessageCircle, title: t("step1"), desc: t("step1Desc") },
    { icon: FlaskConical, title: t("step2"), desc: t("step2Desc") },
    { icon: ClipboardList, title: t("step3"), desc: t("step3Desc") },
    { icon: Target, title: t("step4"), desc: t("step4Desc") },
    { icon: LineChart, title: t("step5"), desc: t("step5Desc") },
    { icon: ArrowDown, title: t("step6"), desc: t("step6Desc") },
  ];

  return (
    <Section>
      <SectionHeader badge={t("sectionTitle")} title={t("title")} />
      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-emerald/40 via-emerald/20 to-transparent md:block" />
        <div className="space-y-8 md:space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={step.title}
                className={`relative flex items-center gap-8 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className={`glass-card inline-block rounded-2xl p-6 ${isEven ? "md:ml-auto" : ""}`}>
                    <h3 className="font-heading mb-1 font-semibold text-navy">{step.title}</h3>
                    <p className="text-sm text-navy/60">{step.desc}</p>
                  </div>
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

import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { GOZDE_IMAGES } from "@/lib/images";
import { getSuccessMetricTheme, type SuccessMetricKey } from "@/lib/card-themes";
import { MetricCard } from "@/components/ui/ThemedCard";

export async function SuccessStories() {
  const t = await getTranslations("testimonials");

  const metrics: { key: SuccessMetricKey; value: string; label: string }[] = [
    { key: "weightLoss", value: "-2.9 kg", label: t("weightLoss") },
    { key: "fatRatio", value: "-2.4%", label: t("fatRatio") },
    { key: "teamSupport", value: "3", label: t("teamSupport") },
  ];

  return (
    <Section id="basari-hikayeleri" variant="light">
      <SectionHeader
        badge={t("sectionTitle")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="mx-auto w-full max-w-lg overflow-hidden rounded-3xl bg-[#FAF8F4] p-3 shadow-xl sm:p-4 md:max-w-none">
          <div className="relative aspect-[4/5] max-h-[min(70vh,640px)] w-full">
            <Image
              src={GOZDE_IMAGES.successEkipIsi}
              alt={t("storyTitle")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="font-heading mb-2 text-2xl font-bold text-navy md:text-3xl">
              {t("storyTitle")}
            </h3>
            <p className="text-lg text-emerald font-medium">{t("storyTagline")}</p>
          </div>
          <p className="text-navy/70 leading-relaxed">{t("storyDesc")}</p>
          <div className="grid grid-cols-3 gap-4">
            {metrics.map(({ key, value, label }) => (
              <MetricCard
                key={key}
                theme={getSuccessMetricTheme(key)}
                value={value}
                label={label}
              />
            ))}
          </div>
          <blockquote className="rounded-2xl border-l-4 border-emerald bg-emerald/5 p-6">
            <p className="font-medium text-navy">{t("storyQuote")}</p>
          </blockquote>
          <p className="text-sm text-navy/50">{t("disclaimer")}</p>
        </div>
      </div>
    </Section>
  );
}

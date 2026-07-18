import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { GOZDE_IMAGES } from "@/lib/images";
import { Scale, TrendingDown, Users } from "lucide-react";

export async function SuccessStories() {
  const t = await getTranslations("testimonials");

  const metrics = [
    { icon: Scale, value: "-2.9 kg", label: t("weightLoss") },
    { icon: TrendingDown, value: "-2.4%", label: t("fatRatio") },
    { icon: Users, value: "3", label: t("teamSupport") },
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
            {metrics.map(({ icon: Icon, value, label }) => (
              <div key={label} className="glass-card rounded-2xl p-4 text-center">
                <Icon className="mx-auto mb-2 h-6 w-6 text-memorial-red" />
                <p className="font-heading text-xl font-bold text-navy">{value}</p>
                <p className="mt-1 text-xs text-navy/60">{label}</p>
              </div>
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

import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ThemedCard } from "@/components/ui/ThemedCard";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { SITE_CONFIG, SERVICE_SLUGS } from "@/lib/constants";
import { getService, getLocalizedService } from "@/content/services/services";
import { getServiceTheme } from "@/lib/card-themes";
import type { ServiceSlug } from "@/content/services/services";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Gözde Akın" };
  const localized = getLocalizedService(service, locale);
  return {
    title: `${localized.name} | Gözde Akın`,
    description: localized.intro,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!SERVICE_SLUGS.includes(slug as (typeof SERVICE_SLUGS)[number])) {
    notFound();
  }

  const service = getService(slug);
  if (!service) notFound();

  const t = await getTranslations("services");
  const localized = getLocalizedService(service, locale);
  const theme = getServiceTheme(slug as ServiceSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: localized.name,
    description: localized.intro,
    provider: {
      "@type": "Physician",
      name: "Gözde Akın",
      url: SITE_CONFIG.url,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localized.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ServiceDetailHero theme={theme} title={localized.name} subtitle={localized.intro} />
      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="font-heading mb-4 text-2xl font-bold text-navy">{t("symptoms")}</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {localized.symptoms.map((s) => (
                <li key={s}>
                  <ThemedCard theme={theme} showDecor={false} className="flex items-center gap-2 px-4 py-3">
                    <span className={cn("h-2 w-2 shrink-0 rounded-full", theme.iconBg)} />
                    <span className="text-sm text-navy/70">{s}</span>
                  </ThemedCard>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading mb-4 text-2xl font-bold text-navy">{t("science")}</h2>
            <ThemedCard theme={theme} showDecor={false} className="p-6">
              <p className="text-navy/70 leading-relaxed">{localized.science}</p>
            </ThemedCard>
          </div>

          <div>
            <h2 className="font-heading mb-4 text-2xl font-bold text-navy">{t("treatment")}</h2>
            <ol className="space-y-3">
              {localized.treatmentSteps.map((step, i) => (
                <li key={step}>
                  <ThemedCard theme={theme} showDecor={false} className="flex gap-4 p-4">
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                        theme.iconBg,
                        theme.iconColor
                      )}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-1 text-navy/70">{step}</span>
                  </ThemedCard>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-heading mb-4 text-2xl font-bold text-navy">{t("timeline")}</h2>
            <div className="space-y-4">
              {localized.timeline.map((item) => (
                <ThemedCard key={item.period} theme={theme} showDecor={false} className="border-l-4 border-emerald/30 p-4 pl-6">
                  <p className={cn("font-heading font-semibold", theme.iconColor)}>{item.period}</p>
                  <p className="text-navy/70">{item.title}</p>
                </ThemedCard>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading mb-4 text-2xl font-bold text-navy">{t("results")}</h2>
            <ThemedCard theme={theme} showDecor={false} className="p-6">
              <ul className="space-y-2">
                {localized.results.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-navy/70">
                    <span className={theme.iconColor}>✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </ThemedCard>
          </div>

          <div>
            <h2 className="font-heading mb-4 text-2xl font-bold text-navy">{t("faq")}</h2>
            <div className="space-y-3">
              {localized.faq.map((item) => (
                <ThemedCard key={item.q} theme={theme} showDecor={false} className="p-6">
                  <h3 className="font-heading mb-2 font-semibold text-navy">{item.q}</h3>
                  <p className="text-sm text-navy/70">{item.a}</p>
                </ThemedCard>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button href={SITE_CONFIG.whatsapp} size="lg">
              {t("bookNow")}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

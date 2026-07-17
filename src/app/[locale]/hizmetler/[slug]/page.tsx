import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, SERVICE_SLUGS } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const serviceNames: Record<string, Record<string, string>> = {
  "kilo-yonetimi": { tr: "Kilo Yönetimi", en: "Weight Management" },
  pcos: { tr: "PCOS", en: "PCOS" },
  "gebelikte-beslenme": { tr: "Gebelikte Beslenme", en: "Pregnancy Nutrition" },
  diyabet: { tr: "Diyabet", en: "Diabetes" },
  "insulin-direnci": { tr: "İnsülin Direnci", en: "Insulin Resistance" },
  obezite: { tr: "Obezite", en: "Obesity" },
  "fonksiyonel-tip": { tr: "Fonksiyonel Tıp", en: "Functional Medicine" },
  "kurumsal-beslenme": { tr: "Kurumsal Beslenme", en: "Corporate Nutrition" },
  "sporcu-beslenmesi": { tr: "Sporcu Beslenmesi", en: "Sports Nutrition" },
  "cocuk-beslenmesi": { tr: "Çocuk Beslenmesi", en: "Children Nutrition" },
  "hormon-dengesi": { tr: "Hormon Dengesi", en: "Hormonal Balance" },
  menopoz: { tr: "Menopoz", en: "Menopause" },
};

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const name = serviceNames[slug]?.[locale] || serviceNames[slug]?.tr || slug;
  return { title: `${name} | Gözde Akın` };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!SERVICE_SLUGS.includes(slug as (typeof SERVICE_SLUGS)[number])) {
    notFound();
  }

  const t = await getTranslations("services");
  const name = serviceNames[slug]?.[locale] || serviceNames[slug]?.tr || slug;

  return (
    <>
      <Section variant="gradient" className="!py-16">
        <SectionHeader title={name} subtitle={t("subtitle")} />
      </Section>
      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="font-heading mb-4 text-2xl font-bold text-navy">{t("symptoms")}</h2>
            <p className="text-navy/70">
              {name} konusunda uzman danışmanlık hizmeti sunulmaktadır. Kişiselleştirilmiş değerlendirme ve tedavi planı oluşturulur.
            </p>
          </div>
          <div>
            <h2 className="font-heading mb-4 text-2xl font-bold text-navy">{t("treatment")}</h2>
            <ol className="list-inside list-decimal space-y-2 text-navy/70">
              <li>Detaylı anamnez ve değerlendirme</li>
              <li>Kan tahlili ve vücut analizi</li>
              <li>Kişiselleştirilmiş beslenme planı</li>
              <li>Haftalık takip ve motivasyon desteği</li>
              <li>Uzun vadeli sürdürülebilir sonuçlar</li>
            </ol>
          </div>
          <div>
            <h2 className="font-heading mb-4 text-2xl font-bold text-navy">{t("results")}</h2>
            <p className="text-navy/70">
              Metabolik iyileşme, kan biyokimyası optimizasyonu ve sürdürülebilir yaşam alışkanlıkları hedeflenir. Mucize vaatleri yerine ölçülebilir, kalıcı sonuçlar.
            </p>
          </div>
          <div className="text-center">
            <Button href={SITE_CONFIG.whatsapp} size="lg">{t("bookNow")}</Button>
          </div>
        </div>
      </Section>
    </>
  );
}

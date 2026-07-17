import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SERVICE_SLUGS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const serviceNames: Record<string, Record<string, string>> = {
  "kilo-yonetimi": { tr: "Kilo Yönetimi", en: "Weight Management", de: "Gewichtsmanagement", fr: "Gestion du poids", ru: "Управление весом", ar: "إدارة الوزن" },
  pcos: { tr: "PCOS", en: "PCOS", de: "PCOS", fr: "SOPK", ru: "СПКЯ", ar: "متلازمة تكيس المبايض" },
  "gebelikte-beslenme": { tr: "Gebelikte Beslenme", en: "Pregnancy Nutrition", de: "Schwangerschaftsernährung", fr: "Nutrition pendant la grossesse", ru: "Питание при беременности", ar: "تغذية الحمل" },
  diyabet: { tr: "Diyabet", en: "Diabetes", de: "Diabetes", fr: "Diabète", ru: "Диабет", ar: "السكري" },
  "insulin-direnci": { tr: "İnsülin Direnci", en: "Insulin Resistance", de: "Insulinresistenz", fr: "Résistance à l'insuline", ru: "Инсулинорезистентность", ar: "مقاومة الأنسولين" },
  obezite: { tr: "Obezite", en: "Obesity", de: "Adipositas", fr: "Obésité", ru: "Ожирение", ar: "السمنة" },
  "fonksiyonel-tip": { tr: "Fonksiyonel Tıp", en: "Functional Medicine", de: "Funktionelle Medizin", fr: "Médecine fonctionnelle", ru: "Функциональная медицина", ar: "الطب الوظيفي" },
  "kurumsal-beslenme": { tr: "Kurumsal Beslenme", en: "Corporate Nutrition", de: "Betriebliche Ernährung", fr: "Nutrition d'entreprise", ru: "Корпоративное питание", ar: "التغذية المؤسسية" },
  "sporcu-beslenmesi": { tr: "Sporcu Beslenmesi", en: "Sports Nutrition", de: "Sporternährung", fr: "Nutrition sportive", ru: "Спортивное питание", ar: "تغذية الرياضيين" },
  "cocuk-beslenmesi": { tr: "Çocuk Beslenmesi", en: "Children Nutrition", de: "Kinderernährung", fr: "Nutrition infantile", ru: "Детское питание", ar: "تغذية الأطفال" },
  "hormon-dengesi": { tr: "Hormon Dengesi", en: "Hormonal Balance", de: "Hormonbalance", fr: "Équilibre hormonal", ru: "Гормональный баланс", ar: "التوازن الهرموني" },
  menopoz: { tr: "Menopoz", en: "Menopause", de: "Menopause", fr: "Ménopause", ru: "Менопауза", ar: "سن اليأس" },
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: `${t("title")} | Gözde Akın` };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <Section variant="gradient" className="!py-16">
      <SectionHeader badge={t("title")} title={t("title")} subtitle={t("subtitle")} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_SLUGS.map((slug) => {
          const name = serviceNames[slug]?.[locale] || serviceNames[slug]?.tr || slug;
          return (
            <Link
              key={slug}
              href={`/hizmetler/${slug}`}
              className="group glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-emerald/5"
            >
              <h3 className="font-heading mb-2 text-lg font-semibold text-navy group-hover:text-emerald">{name}</h3>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-memorial-red">
                {t("bookNow")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

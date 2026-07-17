import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { Globe, Video, Heart, LineChart } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "onlineConsultation" });
  return { title: `${t("title")} | Gözde Akın` };
}

export default async function OnlineConsultationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("onlineConsultation");

  const features = [
    { icon: Video, title: t("videoCall"), desc: "Zoom / Google Meet" },
    { icon: Globe, title: t("worldwide"), desc: "Türkiye ve yurt dışı" },
    { icon: Heart, title: t("personalized"), desc: "Kişiye özel plan" },
    { icon: LineChart, title: t("followUp"), desc: "Düzenli takip" },
  ];

  return (
    <>
      <Section variant="gradient" className="!py-16">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      </Section>
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card rounded-2xl p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading mb-1 font-semibold text-navy">{title}</h3>
              <p className="text-sm text-navy/60">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href={SITE_CONFIG.whatsapp} size="lg">
            {t("title")}
          </Button>
        </div>
      </Section>
    </>
  );
}

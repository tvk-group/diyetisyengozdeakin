import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { FeatureCard } from "@/components/ui/ThemedCard";
import { SITE_CONFIG } from "@/lib/constants";
import { GOZDE_IMAGES } from "@/lib/images";
import { getOnlineFeatureTheme, type OnlineFeatureKey } from "@/lib/card-themes";

type Props = {
  params: Promise<{ locale: string }>;
};

const FEATURE_KEYS: OnlineFeatureKey[] = ["videoCall", "worldwide", "personalized", "followUp"];
const FEATURE_DESC: Record<OnlineFeatureKey, string> = {
  videoCall: "Zoom / Google Meet",
  worldwide: "Türkiye ve yurt dışı",
  personalized: "Kişiye özel plan",
  followUp: "Düzenli takip",
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

  return (
    <>
      <Section variant="gradient" className="!py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} centered={false} />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl">
            <ProfileImage
              src={GOZDE_IMAGES.profileOffice}
              alt="Gözde Akın — Online Danışmanlık"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_KEYS.map((key) => (
            <FeatureCard
              key={key}
              theme={getOnlineFeatureTheme(key)}
              title={t(key)}
              description={FEATURE_DESC[key]}
            />
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

import { getTranslations, setRequestLocale } from "next-intl/server";
import { LegalPage } from "@/components/legal/LegalPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.privacy" });
  return { title: `${t("title")} | Gözde Akın` };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal.privacy");
  const sections = t.raw("sections") as { title: string; paragraphs: string[] }[];

  return <LegalPage title={t("title")} updated={t("updated")} sections={sections} />;
}

import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { ThemedCard } from "@/components/ui/ThemedCard";
import { GOZDE_IMAGES } from "@/lib/images";
import { getAboutStatTheme } from "@/lib/card-themes";
import { Award, BookOpen, Globe, GraduationCap, Heart, Target } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: `${t("title")} | Gözde Akın` };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const site = await getTranslations("site");

  const education = t.raw("educationItems") as string[];
  const experience = t.raw("experienceItems") as string[];

  return (
    <>
      <Section variant="gradient" className="!py-16">
        <SectionHeader badge={t("sectionTitle")} title={t("title")} subtitle={t("intro")} />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg text-navy/70">{t("bio1")}</p>
            <p className="text-navy/70">{t("bio2")}</p>
            <p className="text-navy/70">{t("bio3")}</p>
          </div>
          <ThemedCard theme={getAboutStatTheme("stat1")} showDecor decorSize="lg" className="overflow-hidden rounded-3xl">
            <div className="relative aspect-[4/5]">
              <ProfileImage
                src={GOZDE_IMAGES.profileOffice}
                alt={site("imageAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-wrap gap-2 p-6 pt-0">
              {[t("role1"), t("role2"), t("role3")].map((role) => (
                <span key={role} className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald">
                  {role}
                </span>
              ))}
            </div>
          </ThemedCard>
        </div>
      </Section>

      <Section variant="light">
        <div className="grid gap-8 md:grid-cols-2">
          <ThemedCard theme={getAboutStatTheme("stat1")} showDecor={false} className="rounded-3xl p-8">
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-memorial-red" />
              <h2 className="font-heading text-xl font-bold text-navy">{t("education")}</h2>
            </div>
            <ul className="space-y-3">
              {education.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                  <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                  {item}
                </li>
              ))}
            </ul>
          </ThemedCard>
          <ThemedCard theme={getAboutStatTheme("stat3")} showDecor={false} className="rounded-3xl p-8">
            <div className="mb-4 flex items-center gap-3">
              <Award className="h-6 w-6 text-memorial-red" />
              <h2 className="font-heading text-xl font-bold text-navy">{t("experience")}</h2>
            </div>
            <ul className="space-y-3">
              {experience.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                  {item}
                </li>
              ))}
            </ul>
          </ThemedCard>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-navy p-8 text-white">
            <Target className="mb-4 h-8 w-8 text-gold" />
            <h2 className="font-heading mb-2 text-xl font-bold">{t("mission")}</h2>
            <p className="text-white/70">{t("missionText")}</p>
          </div>
          <div className="rounded-3xl bg-emerald p-8 text-white">
            <Heart className="mb-4 h-8 w-8 text-white" />
            <h2 className="font-heading mb-2 text-xl font-bold">{t("vision")}</h2>
            <p className="text-white/70">{t("visionText")}</p>
          </div>
        </div>
      </Section>
    </>
  );
}

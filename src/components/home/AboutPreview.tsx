import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { GOZDE_IMAGES } from "@/lib/images";
import { SITE_CONFIG } from "@/lib/constants";
import { getAboutStatTheme, type AboutStatKey } from "@/lib/card-themes";
import { ThemedCard } from "@/components/ui/ThemedCard";
import { ArrowRight, Award, Brain, Heart, Stethoscope } from "lucide-react";

const STAT_KEYS: AboutStatKey[] = ["stat1", "stat3", "stat2", "stat4"];
const STAT_VALUE_KEYS = ["stat1Value", "stat3Value", "stat2Value", "stat4Value"] as const;
const STAT_LABEL_KEYS = ["stat1Label", "stat3Label", "stat2Label", "stat4Label"] as const;

export async function AboutPreview() {
  const t = await getTranslations("about");
  const site = await getTranslations("site");

  const roles = [
    { icon: Stethoscope, label: t("role1") },
    { icon: Brain, label: t("role2") },
    { icon: Heart, label: t("role3") },
  ];

  return (
    <Section id="hakkimda" variant="light">
      <SectionHeader badge={t("sectionTitle")} title={t("title")} subtitle={t("intro")} />
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <ThemedCard
          theme={getAboutStatTheme("stat1")}
          showDecor
          decorSize="lg"
          className="rounded-3xl p-8 md:p-12"
        >
          <div className="mb-6 flex flex-wrap gap-3">
            {roles.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-emerald/10 px-4 py-2 text-sm font-medium text-emerald"
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
          <a
            href={SITE_CONFIG.memorialProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-memorial-red transition-colors hover:text-memorial-red/80"
          >
            <Award className="h-4 w-4" />
            {t("hospital")}
          </a>
          <p className="mb-4 text-navy/70">{t("bio1")}</p>
          <p className="mb-4 text-navy/70">{t("bio2")}</p>
          <p className="text-navy/70">{t("bio3")}</p>
          <Link
            href="/hakkimda"
            className="mt-6 inline-flex items-center gap-2 font-medium text-memorial-red transition-colors hover:text-memorial-red/80"
          >
            {t("readMore")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ThemedCard>
        <div className="space-y-6">
          <div className="glass-card relative aspect-[4/5] overflow-hidden rounded-3xl">
            <ProfileImage
              src={GOZDE_IMAGES.profile}
              alt={site("imageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {STAT_KEYS.map((key, i) => (
              <ThemedCard
                key={key}
                theme={getAboutStatTheme(key)}
                showDecor
                decorSize="sm"
                className="p-6 text-center"
              >
                <p className="font-heading text-3xl font-bold text-navy">{t(STAT_VALUE_KEYS[i])}</p>
                <p className="mt-1 text-sm text-navy/60">{t(STAT_LABEL_KEYS[i])}</p>
              </ThemedCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

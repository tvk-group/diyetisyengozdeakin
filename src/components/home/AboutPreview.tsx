import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { GOZDE_IMAGES } from "@/lib/images";
import { ArrowRight, Award, Brain, Heart, Stethoscope } from "lucide-react";

export async function AboutPreview() {
  const t = await getTranslations("about");

  const roles = [
    { icon: Stethoscope, label: t("role1") },
    { icon: Brain, label: t("role2") },
    { icon: Heart, label: t("role3") },
  ];

  return (
    <Section id="hakkimda" variant="light">
      <SectionHeader badge={t("sectionTitle")} title={t("title")} subtitle={t("intro")} />
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="glass-card rounded-3xl p-8 md:p-12">
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
          <p className="mb-2 flex items-center gap-2 text-sm font-medium text-memorial-red">
            <Award className="h-4 w-4" />
            {t("hospital")}
          </p>
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
        </div>
        <div className="space-y-4">
          <div className="glass-card relative aspect-[4/5] overflow-hidden rounded-3xl">
            <ProfileImage
              src={GOZDE_IMAGES.profile}
              alt="Uzman Diyetisyen Gözde Akın — Memorial"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
          {[
            { value: "2.", label: "Beslenme ve Diyetetik" },
            { value: "3.", label: "Sağlık Bilimleri Fakültesi" },
            { value: "8+", label: "Yıllık Klinik Deneyim" },
            { value: "2", label: "Lisans Diploması" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
              <p className="font-heading text-3xl font-bold text-navy">{stat.value}</p>
              <p className="mt-1 text-sm text-navy/60">{stat.label}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import { ThemedContactRow } from "@/components/ui/ThemedCard";
import { SITE_CONFIG, HOSPITALS } from "@/lib/constants";
import { getContactTheme } from "@/lib/card-themes";

type Props = {
  params: Promise<{ locale: string }>;
};

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0!2d29.07!3d40.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWVtb3JpYWwgR8O2enRlcGUgSGFzdGFuZXNp!5e0!3m2!1str!2str!4v1";

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: `${t("title")} | Gözde Akın` };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <Section variant="gradient" className="!py-16">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      </Section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <ThemedContactRow
              theme={getContactTheme("whatsapp")}
              href={SITE_CONFIG.whatsapp}
              external
            >
              <p className="font-medium text-navy">{t("whatsapp")}</p>
              <p className="text-sm text-navy/60">{t("whatsappDesc")}</p>
            </ThemedContactRow>
            <ThemedContactRow theme={getContactTheme("email")} href={`mailto:${SITE_CONFIG.email}`}>
              <p className="text-sm text-navy/50">{t("email")}</p>
              <p className="font-medium text-navy">{SITE_CONFIG.email}</p>
            </ThemedContactRow>
            <ThemedContactRow theme={getContactTheme("phone")} href={`tel:${SITE_CONFIG.phoneRaw}`}>
              <p className="text-sm text-navy/50">{t("phone")}</p>
              <p className="font-medium text-navy">{SITE_CONFIG.phone}</p>
            </ThemedContactRow>
            <ThemedContactRow theme={getContactTheme("hours")}>
              <p className="text-sm text-navy/50">{t("workingHours")}</p>
              <p className="font-medium text-navy">{t("workingHoursValue")}</p>
            </ThemedContactRow>
            {HOSPITALS.map((h) => (
              <ThemedContactRow key={h.id} theme={getContactTheme("hospital")}>
                <p className="font-medium text-navy">{h.name}</p>
                <p className="text-sm text-navy/50">
                  {h.district}, {h.city}
                </p>
              </ThemedContactRow>
            ))}
            <ThemedContactRow
              theme={getContactTheme("memorial")}
              href={SITE_CONFIG.memorialProfile}
              external
            >
              <p className="font-medium text-navy">{t("memorialProfile")}</p>
              <p className="text-sm text-navy/50">memorial.com.tr</p>
            </ThemedContactRow>
            <ThemedContactRow
              theme={getContactTheme("instagram")}
              href={SITE_CONFIG.instagram}
              external
            >
              <p className="font-medium text-navy">Instagram</p>
              <p className="text-sm text-navy/50">{SITE_CONFIG.instagramHandle}</p>
            </ThemedContactRow>
            <ThemedContactRow
              theme={getContactTheme("linkedin")}
              href={SITE_CONFIG.linkedin}
              external
            >
              <p className="font-medium text-navy">LinkedIn</p>
              <p className="text-sm text-navy/50">{t("linkedinDesc")}</p>
            </ThemedContactRow>
            <Button href={SITE_CONFIG.whatsapp} className="w-full sm:w-auto">
              {t("whatsapp")}
            </Button>
          </div>

          <ContactForm />
        </div>
      </Section>

      <Section variant="light">
        <h2 className="font-heading mb-6 text-2xl font-bold text-navy">{t("mapTitle")}</h2>
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <iframe
            title={t("mapTitle")}
            src={MAP_EMBED_URL}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </Section>
    </>
  );
}

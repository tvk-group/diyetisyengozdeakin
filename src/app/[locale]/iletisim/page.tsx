import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE_CONFIG, HOSPITALS } from "@/lib/constants";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";

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
          <div className="space-y-6">
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-emerald/10 p-6 transition-colors hover:bg-emerald/15"
            >
              <MessageCircle className="h-6 w-6 text-emerald" />
              <div>
                <p className="font-medium text-navy">{t("whatsapp")}</p>
                <p className="text-sm text-navy/60">{t("whatsappDesc")}</p>
              </div>
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 rounded-2xl bg-light-gray p-6 transition-colors hover:bg-emerald/5">
              <Mail className="h-6 w-6 text-memorial-red" />
              <div>
                <p className="text-sm text-navy/50">{t("email")}</p>
                <p className="font-medium text-navy">{SITE_CONFIG.email}</p>
              </div>
            </a>
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center gap-4 rounded-2xl bg-light-gray p-6 transition-colors hover:bg-emerald/5">
              <Phone className="h-6 w-6 text-memorial-red" />
              <div>
                <p className="text-sm text-navy/50">{t("phone")}</p>
                <p className="font-medium text-navy">{SITE_CONFIG.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-light-gray p-6">
              <Clock className="h-6 w-6 text-memorial-red" />
              <div>
                <p className="text-sm text-navy/50">{t("workingHours")}</p>
                <p className="font-medium text-navy">{t("workingHoursValue")}</p>
              </div>
            </div>
            {HOSPITALS.map((h) => (
              <div key={h.id} className="flex items-center gap-4 rounded-2xl bg-light-gray p-6">
                <MapPin className="h-6 w-6 text-emerald" />
                <div>
                  <p className="font-medium text-navy">{h.name}</p>
                  <p className="text-sm text-navy/50">{h.district}, {h.city}</p>
                </div>
              </div>
            ))}
            <Button href={SITE_CONFIG.whatsapp} className="w-full sm:w-auto">
              <MessageCircle className="h-4 w-4" />
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

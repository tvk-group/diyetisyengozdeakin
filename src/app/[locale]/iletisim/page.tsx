import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, HOSPITALS } from "@/lib/constants";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

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
          </div>

          <form className="glass-card rounded-3xl p-8">
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-navy/70">{t("name")}</label>
                <input type="text" className="w-full rounded-xl border border-navy/10 px-4 py-3 outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-navy/70">{t("email")}</label>
                <input type="email" className="w-full rounded-xl border border-navy/10 px-4 py-3 outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-navy/70">{t("phone")}</label>
                <input type="tel" className="w-full rounded-xl border border-navy/10 px-4 py-3 outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-navy/70">{t("message")}</label>
                <textarea rows={4} className="w-full rounded-xl border border-navy/10 px-4 py-3 outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20" />
              </div>
              <Button type="submit" className="w-full">{t("send")}</Button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}

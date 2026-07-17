import { getTranslations } from "next-intl/server";
import { AtSign, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SITE_CONFIG, HOSPITALS } from "@/lib/constants";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const site = await getTranslations("site");

  const links = [
    { href: "/", label: nav("home") },
    { href: "/hakkimda", label: nav("about") },
    { href: "/hizmetler", label: nav("services") },
    { href: "/blog", label: nav("blog") },
    { href: "/iletisim", label: nav("contact") },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-memorial-red text-sm font-bold">
                GA
              </div>
              <div>
                <p className="font-heading font-bold">Gözde Akın</p>
                <p className="text-xs text-white/60">{site("expertDietitian")}</p>
              </div>
            </div>
            <p className="text-sm text-white/60">{t("description")}</p>
          </div>

          <div>
            <h3 className="mb-4 font-heading font-semibold">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading font-semibold">{t("hospitals")}</h3>
            <ul className="space-y-3">
              {HOSPITALS.map((h) => (
                <li key={h.id} className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-memorial-red" />
                  <span>{h.name}, {h.district} / {h.city}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading font-semibold">{t("contact")}</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-white">
                  <Mail className="h-4 w-4 text-memorial-red" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-white">
                  <Phone className="h-4 w-4 text-memorial-red" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-white">
                  <AtSign className="h-4 w-4 text-memorial-red" />
                  {SITE_CONFIG.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. {t("rights")}
        </div>
      </div>
    </footer>
  );
}

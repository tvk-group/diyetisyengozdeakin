import { getTranslations } from "next-intl/server";
import { AtSign, ExternalLink, Link2, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";
import { SITE_CONFIG, HOSPITALS } from "@/lib/constants";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");

  const links = [
    { href: "/", label: nav("home") },
    { href: "/hakkimda", label: nav("about") },
    { href: "/hizmetler", label: nav("services") },
    { href: "/blog", label: nav("blog") },
    { href: "/iletisim", label: nav("contact") },
  ];

  return (
    <footer className="bg-navy text-white pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo
              href="/"
              size="footer"
              transparent
              showName={false}
              linkClassName="mb-6"
            />
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
            <a
              href={SITE_CONFIG.memorialProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ExternalLink className="h-4 w-4 text-memorial-red" />
              {t("memorialProfile")}
            </a>
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
            </ul>
            <h3 className="mb-3 mt-6 font-heading font-semibold">{t("followUs")}</h3>
            <ul className="space-y-3">
              <li>
                <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-white">
                  <AtSign className="h-4 w-4 text-memorial-red" />
                  {SITE_CONFIG.instagramHandle}
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-white">
                  <Link2 className="h-4 w-4 text-memorial-red" />
                  LinkedIn
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

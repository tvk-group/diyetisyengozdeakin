"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, LOCALE_NAMES, type Locale } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/hakkimda", label: t("about") },
    { href: "/hizmetler", label: t("services") },
    { href: "/blog", label: t("blog") },
    { href: "/online-danismanlik", label: t("onlineConsultation") },
    { href: "/iletisim", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-memorial-red text-sm font-bold text-white">
            GA
          </div>
          <div className="hidden sm:block">
            <p className="font-heading text-sm font-bold text-navy">Gözde Akın</p>
            <p className="text-xs text-navy/50">Uzman Diyetisyen & Psikolog</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-navy/5 text-memorial-red"
                  : "text-navy/70 hover:bg-navy/5 hover:text-navy"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-full border border-navy/10 px-3 py-2 text-sm text-navy/70 transition-colors hover:bg-navy/5"
              aria-label="Change language"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{LOCALE_NAMES[locale]}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 rounded-2xl border border-navy/10 bg-white py-2 shadow-xl">
                {routing.locales.map((loc) => (
                  <Link
                    key={loc}
                    href={pathname}
                    locale={loc}
                    onClick={() => setLangOpen(false)}
                    className={cn(
                      "block px-4 py-2 text-sm transition-colors hover:bg-navy/5",
                      loc === locale ? "font-semibold text-memorial-red" : "text-navy/70"
                    )}
                  >
                    {LOCALE_NAMES[loc as Locale]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Button href={SITE_CONFIG.whatsapp} size="sm" className="hidden md:inline-flex">
            {t("bookAppointment")}
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-2 text-navy lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-navy/5 bg-white px-4 py-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-navy/70 hover:bg-navy/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4">
            <Button href={SITE_CONFIG.whatsapp} className="w-full">
              {t("bookAppointment")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

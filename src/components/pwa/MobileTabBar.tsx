"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { BookOpen, Calculator, Home, LayoutGrid, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { href: "/", labelKey: "home", icon: Home },
  { href: "/hizmetler", labelKey: "services", icon: LayoutGrid },
  { href: "/#hesaplayicilar", labelKey: "calculators", icon: Calculator },
  { href: "/blog", labelKey: "blog", icon: BookOpen },
  { href: "/iletisim", labelKey: "contact", icon: Phone },
] as const;

function isActive(pathname: string, hash: string, href: string, labelKey: string) {
  if (labelKey === "calculators") {
    return pathname === "/" && hash === "#hesaplayicilar";
  }
  if (href === "/") {
    return pathname === "/" && hash !== "#hesaplayicilar";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileTabBar() {
  const t = useTranslations("pwa");
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const update = () => {
      window.setTimeout(() => setHash(window.location.hash), 0);
    };
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [pathname]);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white/90 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label={t("tabBarLabel")}
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-1 pt-1">
        {TABS.map(({ href, labelKey, icon: Icon }) => {
          const active = isActive(pathname, hash, href, labelKey);

          return (
            <Link
              key={labelKey}
              href={href}
              className={cn(
                "flex min-w-0 flex-1 flex-col items-center gap-0.5 px-1 py-2 text-[10px] font-medium transition-colors",
                active ? "text-memorial-red" : "text-navy/50 hover:text-navy"
              )}
            >
              <Icon className={cn("h-5 w-5", active && "scale-110")} strokeWidth={active ? 2.5 : 2} />
              <span className="truncate">{t(labelKey)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

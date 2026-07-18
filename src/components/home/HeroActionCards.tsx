"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, CalendarCheck, MessageCircle, Video } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const cardClass =
  "group relative flex min-h-[7.5rem] flex-col justify-between overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald/25 hover:shadow-lg hover:shadow-emerald/10";

export function HeroActionCards() {
  const t = useTranslations("hero");

  return (
    <div className="relative z-10 mt-8 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={SITE_CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(cardClass, "bg-gradient-to-br from-memorial-red/10 via-white to-rose/5")}
        >
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-memorial-red/15 text-memorial-red transition-colors group-hover:bg-memorial-red group-hover:text-white">
            <CalendarCheck className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <p className="font-heading text-base font-semibold text-navy">{t("ctaAppointment")}</p>
            <p className="mt-1 text-sm text-navy/60">{t("ctaAppointmentDesc")}</p>
          </div>
          <ArrowRight className="absolute right-4 top-4 h-4 w-4 text-memorial-red/50 transition-all group-hover:translate-x-0.5 group-hover:text-memorial-red" />
        </a>

        <Link
          href="/online-danismanlik"
          className={cn(cardClass, "bg-gradient-to-br from-emerald/15 via-white to-teal/5")}
        >
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald/15 text-emerald transition-colors group-hover:bg-emerald group-hover:text-white">
            <Video className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <p className="font-heading text-base font-semibold text-navy">{t("ctaOnline")}</p>
            <p className="mt-1 text-sm text-navy/60">{t("ctaOnlineDesc")}</p>
          </div>
          <ArrowRight className="absolute right-4 top-4 h-4 w-4 text-emerald/50 transition-all group-hover:translate-x-0.5 group-hover:text-emerald" />
        </Link>
      </div>

      <Button href={SITE_CONFIG.whatsapp} variant="secondary" className="w-full sm:w-auto">
        <MessageCircle className="h-4 w-4" />
        {t("ctaWhatsapp")}
      </Button>
    </div>
  );
}

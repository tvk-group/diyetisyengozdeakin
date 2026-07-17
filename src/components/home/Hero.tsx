"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald/5 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-memorial-red/20 bg-memorial-red/5 px-4 py-1.5 text-sm font-medium text-memorial-red">
              {t("badge")}
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl">
              <span className="block">{t("title1")}</span>
              <span className="block text-gradient">{t("title2")}</span>
              <span className="block">{t("title3")}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-navy/60">{t("subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={SITE_CONFIG.whatsapp}>
                {t("ctaAppointment")}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/online-danismanlik" variant="outline">
                <Video className="h-4 w-4" />
                {t("ctaOnline")}
              </Button>
              <Button href={SITE_CONFIG.whatsapp} variant="secondary">
                <MessageCircle className="h-4 w-4" />
                {t("ctaWhatsapp")}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card relative aspect-[4/5] overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald/20 via-navy/10 to-memorial-red/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-white/80 text-5xl font-bold text-navy shadow-xl">
                    GA
                  </div>
                  <p className="font-heading text-xl font-bold text-navy">Gözde Akın</p>
                  <p className="text-sm text-navy/60">Uzman Diyetisyen & Psikolog</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-2xl font-bold text-emerald">8+</p>
              <p className="text-xs text-navy/60">Yıllık Deneyim</p>
            </div>
            <div className="absolute -right-4 -top-4 rounded-2xl bg-memorial-red p-4 text-white shadow-xl">
              <p className="text-2xl font-bold">Memorial</p>
              <p className="text-xs text-white/80">Sağlık Grubu</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

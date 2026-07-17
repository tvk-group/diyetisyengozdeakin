"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { SITE_CONFIG } from "@/lib/constants";
import { GOZDE_IMAGES } from "@/lib/images";

export function Hero() {
  const t = useTranslations("hero");
  const site = useTranslations("site");

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
              <ProfileImage
                src={GOZDE_IMAGES.heroMemorial}
                alt={site("imageAlt")}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-6 pt-24">
                <p className="font-heading text-xl font-bold text-white">Gözde Akın</p>
                <p className="text-sm text-white/80">{site("expertDietitian")}</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-2xl font-bold text-emerald">{t("yearsExperience")}</p>
              <p className="text-xs text-navy/60">{t("yearsExperienceLabel")}</p>
            </div>
            <div className="absolute -right-4 -top-4 rounded-2xl bg-memorial-red p-4 text-white shadow-xl">
              <p className="text-2xl font-bold">{t("memorialLabel")}</p>
              <p className="text-xs text-white/80">{t("memorialSub")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

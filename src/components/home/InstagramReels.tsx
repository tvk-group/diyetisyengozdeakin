"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Play } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/ui/Section";
import { INSTAGRAM_REELS } from "@/lib/images";
import { SITE_CONFIG } from "@/lib/constants";

export function InstagramReels() {
  const t = useTranslations("instagram");

  return (
    <Section id="instagram">
      <SectionHeader
        badge={t("sectionTitle")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {INSTAGRAM_REELS.map((reel) => (
          <Link
            key={reel.id}
            href={`/blog/${reel.blogSlug}`}
            className="group relative aspect-[9/16] max-h-[480px] overflow-hidden rounded-3xl bg-navy shadow-xl transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={reel.image}
              alt={t(reel.titleKey)}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors group-hover:bg-memorial-red">
                <Play className="h-5 w-5 fill-white text-white" />
              </div>
              <p className="font-heading text-xl font-bold leading-tight text-white">
                {t(reel.titleKey)}
              </p>
              <p className="mt-1 text-sm text-white/70">{t(reel.subtitleKey)}</p>
            </div>
          </Link>
        ))}

        <a
          href={SITE_CONFIG.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex aspect-[9/16] max-h-[480px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-navy/15 bg-light-gray p-8 text-center transition-colors hover:border-memorial-red/30 hover:bg-memorial-red/5"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-memorial-red/10 text-2xl font-bold text-memorial-red">
            @
          </div>
          <p className="font-heading text-lg font-semibold text-navy">{t("followMore")}</p>
          <p className="mt-2 text-sm text-navy/60">{SITE_CONFIG.instagramHandle}</p>
        </a>
      </div>
    </Section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { INSTAGRAM_REELS } from "@/lib/images";
import { SITE_CONFIG } from "@/lib/constants";

function ReelCard({
  reel,
  title,
  subtitle,
}: {
  reel: (typeof INSTAGRAM_REELS)[number];
  title: string;
  subtitle: string;
}) {
  const content = (
    <>
      <Image
        src={reel.image}
        alt={title}
        fill
        sizes="(max-width: 640px) 50vw, 20vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors group-hover:bg-memorial-red">
          <Play className="h-4 w-4 fill-white text-white" />
        </div>
        <p className="font-heading text-base font-bold leading-tight text-white md:text-lg">
          {title}
        </p>
        <p className="mt-1 text-xs text-white/70">{subtitle}</p>
      </div>
    </>
  );

  const className =
    "group relative aspect-[9/16] overflow-hidden rounded-3xl bg-navy shadow-xl transition-transform duration-300 hover:scale-[1.02]";

  if (reel.href) {
    return (
      <a href={reel.href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={`/blog/${reel.blogSlug}`} className={className}>
      {content}
    </Link>
  );
}

export function InstagramReels() {
  const t = useTranslations("instagram");

  return (
    <Section id="instagram">
      <SectionHeader
        badge={t("sectionTitle")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {INSTAGRAM_REELS.map((reel) => (
          <ReelCard
            key={reel.id}
            reel={reel}
            title={t(reel.titleKey)}
            subtitle={t(reel.subtitleKey)}
          />
        ))}
        <a
          href={SITE_CONFIG.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex aspect-[9/16] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-navy/15 bg-light-gray p-4 text-center transition-colors hover:border-memorial-red/30 hover:bg-memorial-red/5"
        >
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-memorial-red/10 text-xl font-bold text-memorial-red">
            @
          </div>
          <p className="font-heading text-sm font-semibold text-navy">{t("followMore")}</p>
          <p className="mt-1 text-xs text-navy/60">{SITE_CONFIG.instagramHandle}</p>
        </a>
      </div>
    </Section>
  );
}

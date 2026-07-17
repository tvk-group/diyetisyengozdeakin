"use client";

import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/ui/Section";
import { YOUTUBE_VIDEOS } from "@/lib/constants";

export function YouTubeVideos() {
  const t = useTranslations("youtube");

  return (
    <Section id="youtube" variant="light">
      <SectionHeader badge={t("sectionTitle")} title={t("title")} subtitle={t("subtitle")} />
      <div className="grid gap-8 md:grid-cols-2">
        {YOUTUBE_VIDEOS.map((video) => (
          <div key={video.id} className="glass-card overflow-hidden rounded-3xl">
            <div className="relative aspect-video w-full bg-navy/5">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                title={t(video.titleKey)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-navy">{t(video.titleKey)}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

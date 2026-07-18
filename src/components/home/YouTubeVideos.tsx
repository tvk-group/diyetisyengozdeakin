"use client";

import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { YOUTUBE_VIDEOS } from "@/lib/constants";
import { useConsentState } from "@/components/legal/CookieConsent";

export function YouTubeVideos() {
  const t = useTranslations("youtube");
  const consent = useConsentState();
  const canEmbed = consent?.preferences || consent?.marketing;

  return (
    <Section id="youtube" variant="light">
      <SectionHeader badge={t("sectionTitle")} title={t("title")} subtitle={t("subtitle")} />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {YOUTUBE_VIDEOS.map((video) => (
          <div
            key={video.id}
            className={`glass-card overflow-hidden rounded-3xl ${
              video.format === "short" ? "mx-auto w-full max-w-sm sm:col-span-1" : ""
            }`}
          >
            <div
              className={`relative w-full bg-navy/5 ${
                video.format === "short" ? "aspect-[9/16]" : "aspect-video"
              }`}
            >
              {canEmbed ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                  title={t(video.titleKey)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy/5 p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-memorial-red/10 text-memorial-red">
                    <Play className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-navy/60">{t("consentRequired")}</p>
                </div>
              )}
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

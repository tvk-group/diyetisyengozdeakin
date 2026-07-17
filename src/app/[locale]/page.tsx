import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Expertise } from "@/components/home/Expertise";
import { HealthCalculators } from "@/components/home/HealthCalculators";
import { PatientJourney } from "@/components/home/PatientJourney";
import { SuccessStories } from "@/components/home/SuccessStories";
import { InstagramReels } from "@/components/home/InstagramReels";
import { YouTubeVideos } from "@/components/home/YouTubeVideos";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { setRequestLocale } from "next-intl/server";
import { physicianJsonLd, websiteJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = [physicianJsonLd(), websiteJsonLd()];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutPreview />
      <WhyChoose />
      <Expertise />
      <HealthCalculators />
      <PatientJourney />
      <SuccessStories />
      <YouTubeVideos />
      <InstagramReels />
      <FAQ />
      <CTA />
    </>
  );
}

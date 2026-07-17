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
import { SITE_CONFIG } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Gözde Akın",
    jobTitle: "Uzman Diyetisyen & Psikolog",
    description: "Fonksiyonel tıp, gebelikte beslenme, PCOS, diyabet ve insülin direnci uzmanı",
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    image: `${SITE_CONFIG.url}/images/gozde/profile.jpg`,
    worksFor: {
      "@type": "Hospital",
      name: "Memorial Sağlık Grubu",
    },
    medicalSpecialty: ["Nutrition", "Psychology", "Functional Medicine"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    sameAs: [SITE_CONFIG.instagram, SITE_CONFIG.linkedin, SITE_CONFIG.memorialProfile],
  };

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

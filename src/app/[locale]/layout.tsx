import type { Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Manrope, Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PwaShell } from "@/components/pwa/PwaShell";
import { RTL_LOCALES, SITE_CONFIG } from "@/lib/constants";
import { getAlternates, organizationJsonLd } from "@/lib/seo";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export function generateViewport(): Viewport {
  return {
    themeColor: "#3D5245",
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  };
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const alternates = getAlternates();
  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(SITE_CONFIG.url),
    alternates,
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: SITE_CONFIG.url,
      siteName: "Gözde Akın",
      locale,
      type: "website",
      images: [{ url: "/images/gozde/profile.jpg", width: 1200, height: 630, alt: "Gözde Akın" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/gozde/profile.jpg"],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Gözde Akın",
    },
    applicationName: "Gözde Akın",
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [
        { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    other: {
      "mobile-web-app-capable": "yes",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isRtl = RTL_LOCALES.includes(locale as (typeof RTL_LOCALES)[number]);
  const orgLd = organizationJsonLd(locale);

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} className={`${manrope.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">{children}</main>
          <Footer />
          <PwaShell />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

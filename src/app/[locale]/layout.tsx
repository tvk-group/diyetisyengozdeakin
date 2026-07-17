import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Manrope, Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

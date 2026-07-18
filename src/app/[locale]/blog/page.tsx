import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/ui/Section";
import { blogPosts, getLocalizedPost } from "@/content/blog/posts";
import { getBlogCategoryTheme } from "@/lib/card-themes";
import { ThemedCard } from "@/components/ui/ThemedCard";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return { title: `${t("title")} | Gözde Akın` };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  return (
    <Section variant="gradient" className="!py-16">
      <SectionHeader badge={t("title")} title={t("title")} subtitle={t("subtitle")} />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => {
          const localized = getLocalizedPost(post, locale);
          const theme = getBlogCategoryTheme(post.category);
          const CategoryIcon = theme.Icon;

          return (
            <ThemedCard
              key={post.slug}
              theme={theme}
              showDecor={false}
              className="flex flex-col overflow-hidden"
            >
              <div className={cn("relative h-48 bg-gradient-to-br", theme.gradient)}>
                {post.thumbnail && (
                  <Image
                    src={post.thumbnail}
                    alt={localized.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-navy shadow-sm">
                  <CategoryIcon className={cn("h-3.5 w-3.5", theme.iconColor)} />
                  {post.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-2 text-xs text-navy/50">
                  <Clock className="h-3 w-3" />
                  {post.readingTime} {t("minRead")}
                  <span>·</span>
                  {post.publishedAt}
                </div>
                <h2 className="font-heading mb-2 text-lg font-semibold text-navy group-hover:text-emerald">
                  {localized.title}
                </h2>
                <p className="mb-4 flex-1 text-sm text-navy/60">{localized.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-memorial-red"
                >
                  {t("readMore")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ThemedCard>
          );
        })}
      </div>
    </Section>
  );
}

import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/ui/Section";
import { blogPosts, getLocalizedPost } from "@/content/blog/posts";
import { ArrowRight, Clock } from "lucide-react";

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
          return (
            <article key={post.slug} className="group glass-card flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-br from-emerald/20 to-navy/10" />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-2 text-xs text-navy/50">
                  <Clock className="h-3 w-3" />
                  {post.readingTime} dk
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
            </article>
          );
        })}
      </div>
    </Section>
  );
}

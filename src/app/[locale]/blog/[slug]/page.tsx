import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { blogPosts, getBlogPost, getLocalizedPost } from "@/content/blog/posts";
import { ArrowLeft, Clock } from "lucide-react";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog | Gözde Akın" };
  const localized = getLocalizedPost(post, locale);
  return { title: `${localized.title} | Gözde Akın`, description: localized.excerpt };
}

function renderMarkdown(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("**") && block.includes("**\n")) {
      const [heading, ...rest] = block.split("\n");
      const h = heading.replace(/\*\*/g, "");
      return (
        <div key={i}>
          <h2 className="font-heading mb-3 mt-8 text-xl font-bold text-navy">{h}</h2>
          {rest.map((line, j) => (
            <p key={j} className="mb-2 text-navy/70">{line.replace(/^- /, "• ")}</p>
          ))}
        </div>
      );
    }
    if (block.startsWith("**")) {
      return <h2 key={i} className="font-heading mb-3 mt-8 text-xl font-bold text-navy">{block.replace(/\*\*/g, "")}</h2>;
    }
    if (block.startsWith("- ")) {
      return (
        <ul key={i} className="mb-4 list-inside list-disc space-y-1 text-navy/70">
          {block.split("\n").map((line, j) => (
            <li key={j}>{line.replace(/^- /, "")}</li>
          ))}
        </ul>
      );
    }
    return <p key={i} className="mb-4 text-navy/70 leading-relaxed">{block}</p>;
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  const post = getBlogPost(slug);
  if (!post) notFound();

  const localized = getLocalizedPost(post, locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: localized.title,
    description: localized.excerpt,
    author: { "@type": "Person", name: "Gözde Akın" },
    datePublished: post.publishedAt,
    publisher: { "@type": "Organization", name: "Gözde Akın" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section variant="gradient" className="!py-12">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-navy/60 hover:text-navy">
            <ArrowLeft className="h-4 w-4" />
            {t("allPosts")}
          </Link>
          <div className="mb-4 flex items-center gap-2 text-sm text-navy/50">
            <Clock className="h-4 w-4" />
            {post.readingTime} {t("minRead")} · {post.publishedAt}
          </div>
          <h1 className="font-heading text-3xl font-bold text-navy md:text-4xl">{localized.title}</h1>
          <p className="mt-2 text-sm text-emerald">{t("author")}: Gözde Akın · {t("medicalReview")}</p>
        </div>
      </Section>
      <Section>
        <article className="prose prose-lg mx-auto max-w-3xl">
          {renderMarkdown(localized.content)}
        </article>
        <div className="mx-auto mt-12 max-w-3xl flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-navy/5 px-3 py-1 text-xs text-navy/60">#{tag}</span>
          ))}
        </div>
      </Section>
    </>
  );
}

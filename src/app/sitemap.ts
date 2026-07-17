import type { MetadataRoute } from "next";
import { SITE_CONFIG, LOCALES, SERVICE_SLUGS } from "@/lib/constants";
import { blogPosts } from "@/content/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const pages = ["", "/hakkimda", "/hizmetler", "/blog", "/online-danismanlik", "/iletisim"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    const prefix = locale === "tr" ? "" : `/${locale}`;
    for (const page of pages) {
      entries.push({
        url: `${base}${prefix}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "/blog" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }
    for (const slug of SERVICE_SLUGS) {
      entries.push({
        url: `${base}${prefix}/hizmetler/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
    for (const post of blogPosts) {
      entries.push({
        url: `${base}${prefix}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}

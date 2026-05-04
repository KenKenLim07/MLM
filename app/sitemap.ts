import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { siteUrl } from "@/lib/seo";

/**
 * Last-modified hint for static marketing URLs. Update when you ship meaningful
 * homepage or landing-page changes so crawlers can prioritize recrawls.
 */
const STATIC_PAGES_LAST_MODIFIED = new Date("2026-05-04T00:00:00.000Z");

function dateFromPublishedAt(publishedAt: string): Date {
  const parsed = new Date(`${publishedAt.trim()}T00:00:00.000Z`);
  return Number.isNaN(parsed.getTime()) ? STATIC_PAGES_LAST_MODIFIED : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const canonical = siteUrl.replace(/\/$/, "");

  const postsBySlug = [...blogPosts].sort((a, b) => a.slug.localeCompare(b.slug));

  const latestPostTime = postsBySlug.reduce((max, post) => {
    return Math.max(max, dateFromPublishedAt(post.publishedAt).getTime());
  }, 0);

  const blogIndexLastModified =
    postsBySlug.length > 0 ? new Date(latestPostTime) : STATIC_PAGES_LAST_MODIFIED;

  const blogPostEntries: MetadataRoute.Sitemap = postsBySlug.map((post) => ({
    url: `${canonical}/blog/${post.slug}`,
    lastModified: dateFromPublishedAt(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [
    {
      url: `${canonical}/`,
      lastModified: STATIC_PAGES_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${canonical}/beauty-products-iloilo`,
      lastModified: STATIC_PAGES_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${canonical}/skincare-products-iloilo`,
      lastModified: STATIC_PAGES_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${canonical}/reseller-beauty-products-iloilo`,
      lastModified: STATIC_PAGES_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${canonical}/delivery-guimaras-beauty-products`,
      lastModified: STATIC_PAGES_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${canonical}/blog`,
      lastModified: blogIndexLastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPostEntries,
  ];
}

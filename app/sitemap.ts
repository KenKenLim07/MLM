import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const pages = [
  "",
  "/beauty-products-iloilo",
  "/skincare-products-iloilo",
  "/reseller-beauty-products-iloilo",
  "/delivery-guimaras-beauty-products",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.75,
  }));
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import { siteUrl } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "MLM Skincare",
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="text-xs uppercase tracking-wide text-stone-500">{post.publishedAt}</p>
      <h1 className="mt-3 font-serif text-4xl text-rose-950 sm:text-5xl">{post.title}</h1>
      <p className="mt-4 text-base leading-8 text-stone-700">{post.description}</p>

      <article className="mt-8 space-y-6 text-base leading-8 text-stone-700">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/blog" className="rounded-full border border-rose-300 px-5 py-2.5 text-sm font-semibold text-rose-900">
          Back to guides
        </Link>
        <Link href="/beauty-products-iloilo" className="rounded-full bg-rose-900 px-5 py-2.5 text-sm font-semibold text-white">
          Browse products
        </Link>
      </div>
    </main>
  );
}

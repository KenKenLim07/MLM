import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Iloilo Beauty and Skincare Guides",
  description:
    "Practical beauty and skincare guides for Iloilo customers and resellers.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
        SEO Content Hub
      </p>
      <h1 className="mt-3 font-serif text-4xl text-rose-950 sm:text-5xl">
        Iloilo Beauty Guides
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">
        Helpful articles for skincare buyers and resellers in Iloilo and Guimaras.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-rose-100 bg-white p-6">
            <p className="text-xs uppercase tracking-wide text-stone-500">{post.publishedAt}</p>
            <h2 className="mt-2 text-xl font-semibold text-rose-950">{post.title}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">{post.description}</p>
            <div className="mt-4">
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-rose-900 underline decoration-rose-300 underline-offset-4">
                Read article
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

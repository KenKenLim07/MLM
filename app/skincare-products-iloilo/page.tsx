import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { storeInfo } from "@/data/store";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Skincare Products Iloilo",
  description:
    "Find skincare products in Iloilo including whitening serum, kojic soap, sunscreen, and glow routines. MLM Skincare supports retail buyers and resellers.",
  alternates: { canonical: "/skincare-products-iloilo" },
};

export default function SkincareProductsIloiloPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Skincare Products Iloilo",
    url: `${siteUrl}/skincare-products-iloilo`,
    about: ["skincare products iloilo", "whitening serum iloilo", "kojic soap iloilo"],
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
        Skincare Iloilo
      </p>
      <h1 className="mt-3 font-serif text-4xl text-rose-950 sm:text-5xl">
        Skincare Products Iloilo Buyers Trust
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">
        Browse skincare essentials from MLM Skincare. We stock practical items for
        glow maintenance, sun protection, and daily routines with helpful support for
        Iloilo and Guimaras customers.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {products.map((product) => (
          <article key={product.id} className="rounded-2xl border border-rose-100 bg-white p-5">
            <h2 className="text-lg font-semibold text-rose-950">{product.name}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">{product.description}</p>
          </article>
        ))}
      </div>

      <section className="mt-10 rounded-2xl border border-rose-100 bg-white p-6">
        <h2 className="text-xl font-semibold text-rose-950">Need recommendations?</h2>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          Message our team to ask which skincare products match your goals and budget.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={storeInfo.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_messenger_cta"
            data-analytics-category="conversion"
            data-analytics-label="local_landing_cta"
            className="rounded-full bg-rose-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Chat on Messenger
          </a>
          <Link href="/beauty-products-iloilo" className="rounded-full border border-rose-300 px-5 py-2.5 text-sm font-semibold text-rose-900">
            View beauty products page
          </Link>
        </div>
      </section>
    </main>
  );
}

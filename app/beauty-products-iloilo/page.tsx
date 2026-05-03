import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { storeInfo } from "@/data/store";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Beauty Products Iloilo",
  description:
    "Shop beauty products in Iloilo from MLM Skincare. Explore curated skincare essentials, fast Messenger support, and delivery options for Iloilo and Guimaras.",
  alternates: { canonical: "/beauty-products-iloilo" },
};

export default function BeautyProductsIloiloPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Beauty Products Iloilo",
    url: `${siteUrl}/beauty-products-iloilo`,
    about: ["beauty products iloilo", "skincare products iloilo"],
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
        Iloilo Beauty Shop
      </p>
      <h1 className="mt-3 font-serif text-4xl text-rose-950 sm:text-5xl">
        Beauty Products in Iloilo
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">
        MLM Skincare offers carefully selected beauty products in Iloilo for daily
        skincare users and resellers. We focus on trusted items, responsive support,
        and quick ordering through Messenger.
      </p>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="rounded-2xl border border-rose-100 bg-white p-5">
            <h2 className="text-lg font-semibold text-rose-950">{product.name}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">{product.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-rose-100 bg-rose-50/50 p-6">
        <h2 className="text-xl font-semibold text-rose-950">Order Beauty Products in Iloilo</h2>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          Send us a message for availability, prices, and delivery arrangements in Iloilo
          province and nearby areas.
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
            Message on Facebook
          </a>
          <Link href="/" className="rounded-full border border-rose-300 px-5 py-2.5 text-sm font-semibold text-rose-900">
            Back to homepage
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { storeInfo } from "@/data/store";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Beauty Products Delivery Guimaras",
  description:
    "Need beauty products delivery to Guimaras? MLM Skincare supports customers and resellers in Iloilo and Guimaras through Messenger-based ordering.",
  alternates: { canonical: "/delivery-guimaras-beauty-products" },
};

export default function DeliveryGuimarasBeautyProductsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Beauty Products Delivery to Guimaras",
    areaServed: ["Guimaras", "Iloilo"],
    provider: {
      "@type": "Organization",
      name: storeInfo.brandName,
      url: siteUrl,
    },
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
        Guimaras Delivery
      </p>
      <h1 className="mt-3 font-serif text-4xl text-rose-950 sm:text-5xl">
        Beauty Products Delivery to Guimaras
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">
        MLM Skincare serves Guimaras and Iloilo customers looking for beauty and
        skincare products with responsive support and clear order coordination.
      </p>

      <section className="mt-10 rounded-2xl border border-rose-100 bg-white p-6">
        <h2 className="text-xl font-semibold text-rose-950">How to order from Guimaras</h2>
        <ol className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
          <li>1. Message us on Facebook with your product list and quantity.</li>
          <li>2. We confirm availability, total, and delivery arrangement details.</li>
          <li>3. We coordinate your order for smooth fulfillment.</li>
        </ol>
      </section>

      <section className="mt-8 rounded-2xl border border-rose-100 bg-rose-50/50 p-6">
        <h2 className="text-xl font-semibold text-rose-950">Ready to place an order?</h2>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          Send your message directly and include your area in Guimaras so we can guide
          the best arrangement quickly.
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
            Message to order
          </a>
          <Link href="/beauty-products-iloilo" className="rounded-full border border-rose-300 px-5 py-2.5 text-sm font-semibold text-rose-900">
            Browse products
          </Link>
        </div>
      </section>
    </main>
  );
}

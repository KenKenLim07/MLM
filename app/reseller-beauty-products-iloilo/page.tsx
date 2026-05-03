import type { Metadata } from "next";
import Link from "next/link";
import { storeInfo } from "@/data/store";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Reseller Beauty Products Iloilo",
  description:
    "Looking for reseller beauty products in Iloilo? MLM Skincare supports resellers with curated products, reliable supply, and responsive Messenger ordering.",
  alternates: { canonical: "/reseller-beauty-products-iloilo" },
};

const resellerBenefits = [
  "Reliable product sourcing for repeat orders",
  "Fast response for stock and price checks",
  "Support for Iloilo and Guimaras coverage",
  "Practical starter options for small resellers",
];

export default function ResellerBeautyProductsIloiloPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Reseller Beauty Products Iloilo",
    url: `${siteUrl}/reseller-beauty-products-iloilo`,
    about: ["reseller skincare iloilo", "beauty distributor iloilo"],
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
        Reseller Program
      </p>
      <h1 className="mt-3 font-serif text-4xl text-rose-950 sm:text-5xl">
        Reseller Beauty Products in Iloilo
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">
        MLM Skincare partners with Iloilo-based resellers who need stable supply,
        dependable communication, and products customers actually reorder.
      </p>

      <section className="mt-10 rounded-2xl border border-rose-100 bg-white p-6">
        <h2 className="text-xl font-semibold text-rose-950">Why resellers choose us</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
          {resellerBenefits.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-rose-100 bg-rose-50/50 p-6">
        <h2 className="text-xl font-semibold text-rose-950">Start your reseller inquiry</h2>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          Tell us your location, expected order volume, and target products so we can
          suggest a practical starting lineup.
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
            Message reseller inquiry
          </a>
          <Link href="/skincare-products-iloilo" className="rounded-full border border-rose-300 px-5 py-2.5 text-sm font-semibold text-rose-900">
            View skincare lineup
          </Link>
        </div>
      </section>
    </main>
  );
}

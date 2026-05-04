import type { Metadata } from "next";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import { storeInfo } from "@/data/store";
import { defaultDescription, defaultKeywords, normalizedPhone, siteUrl } from "@/lib/seo";

const brandName = storeInfo.brandName;
const logoPath = "/logo.png";

const features = [
  {
    title: "Trusted Distributor",
    description:
      "Reliable and consistent product supply for resellers and repeat buyers.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4zm-1 12l5-5-1.4-1.4-3.6 3.6-1.6-1.6L8 11l3 3z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "High Quality Beauty Products",
    description:
      "Every product is selected for safety, authenticity, and visible results.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M7 3h10v3h2v15H5V6h2V3zm2 3h6V5H9v1zm3 3l3 3h-2v4h-2v-4H9l3-3z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Fast Nationwide Orders",
    description:
      "Quick response and order processing for customers across the Philippines.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M3 6h11v9H3V6zm12 2h3l3 3v4h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3v-2h12V8zm1 7a1 1 0 102 0 1 1 0 00-2 0zM6 16a1 1 0 102 0 1 1 0 00-2 0z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const feedbacks = [
  {
    name: "Aira M.",
    location: "Iloilo",
    message:
      "Madili lang kausap sa Messenger, dasig man ang delivery nila",
  },
  {
    name: "Jen R.",
    location: "Guimaras",
    message:
      "GA Balik balik lang ko di kay reseller man ko nami quality kag barato compare sa iban.",
  },
  {
    name: "Camille T.",
    location: "Iloilo City",
    message:
      "Nami ila packaging kag responsive ang seller. Sulit gid sa skincare routine ko hehe.",
  },
];

const phoneDigits = storeInfo.phone.replace(/\D/g, "");
const phoneTel = (() => {
  if (!phoneDigits) return storeInfo.phone;
  if (phoneDigits.startsWith("63")) return `+${phoneDigits}`;
  if (phoneDigits.startsWith("0")) return `+63${phoneDigits.slice(1)}`;
  return `+${phoneDigits}`;
})();
const phoneDisplay =
  phoneDigits.length === 11 && phoneDigits.startsWith("09")
    ? `${phoneDigits.slice(0, 4)} ${phoneDigits.slice(4, 7)} ${phoneDigits.slice(7)}`
    : storeInfo.phone;

const homeTitle = "Beauty Products Iloilo and Guimaras";

export const metadata: Metadata = {
  title: homeTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
  alternates: { canonical: "/" },
};

export default function Home() {
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    storeInfo.locationText
  )}&output=embed`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: storeInfo.brandName,
    url: siteUrl,
    logo: `${siteUrl}/MLM.PNG`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: normalizedPhone,
        areaServed: ["PH"],
      },
    ],
    sameAs: [storeInfo.orderUrl, storeInfo.tiktokUrl],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: storeInfo.brandName,
    url: siteUrl,
    image: `${siteUrl}/MLM.PNG`,
    telephone: normalizedPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "126 Delgado St",
      addressLocality: "Iloilo City",
      addressRegion: "Iloilo",
      addressCountry: "PH",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Iloilo" },
      { "@type": "AdministrativeArea", name: "Guimaras" },
    ],
    sameAs: [storeInfo.orderUrl, storeInfo.tiktokUrl, storeInfo.mapUrl],
  };

  return (
    <div className="min-h-screen bg-[#fffdfb] text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, localBusinessSchema]),
        }}
      />
      <Navbar brandName={brandName} logoPath={logoPath} />
      <main>
        <HeroSection brandName={brandName} orderUrl={storeInfo.orderUrl} />

        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="grid gap-8 rounded-[2rem] border border-rose-100 bg-white p-8 shadow-[0_18px_50px_-36px_rgba(136,19,55,0.5)] md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
                About Us
              </p>
              <h2 className="font-serif text-3xl text-rose-950 sm:text-4xl">
                Quality You Can Trust
              </h2>
            </div>
            <p className="text-base leading-8 text-stone-600">
              MLM Skincare is a trusted distributor focused on premium
              skincare and beauty essentials. We work with quality-tested products
              and support customers, resellers, and beauty businesses with smooth
              orders. We proudly serve branches in{" "}
              {storeInfo.branches.join(" and ")}.
            </p>
          </div>
        </section>

        <ProductGrid products={products} />

        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl text-rose-950 sm:text-4xl">
              Built on Trust, Service, and Results
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 md:pb-20">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
              Customer Feedback
            </p>
            <h2 className="font-serif text-3xl text-rose-950 sm:text-4xl">
              What Customers Say
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {feedbacks.map((feedback) => (
              <article
                key={feedback.name}
                className="rounded-3xl border border-rose-100 bg-white p-6 shadow-[0_14px_40px_-35px_rgba(136,19,55,0.5)]"
              >
                <div>
                  <p className="font-semibold text-rose-950">{feedback.name}</p>
                  <p className="text-xs uppercase tracking-wide text-stone-500">
                    {feedback.location}
                  </p>
                </div>
                <p className="mt-4 border-t border-rose-100 pt-4 text-sm leading-7 text-stone-600">
                  &quot;{feedback.message}&quot;
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
          <div className="rounded-[2rem] border border-rose-100 bg-white p-6 shadow-[0_18px_50px_-36px_rgba(136,19,55,0.45)] md:p-10">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
                    Contact
                  </p>
                  <h2 className="font-serif text-3xl text-rose-950 sm:text-4xl">
                    Order via Messenger
                  </h2>
                  <p className="max-w-xl text-base leading-7 text-stone-700">
                    Message us to order or ask for prices. Fastest replies are usually on{" "}
                    <span className="font-medium text-stone-700">Messenger</span>.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={storeInfo.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-analytics-event="click_messenger_cta"
                    data-analytics-category="conversion"
                    data-analytics-label="homepage_contact_section"
                    className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-rose-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700 sm:col-span-2"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
                      <path
                        d="M20 12a8 8 0 10-9.27 7.9v-5.58h-2.4V12h2.4V10.2c0-2.37 1.4-3.68 3.55-3.68 1.03 0 2.1.18 2.1.18V9h-1.18c-1.17 0-1.53.72-1.53 1.46V12h2.6l-.42 2.32h-2.18v5.58A8 8 0 0020 12z"
                        fill="currentColor"
                      />
                    </svg>
                    Facebook / Messenger
                  </a>

                  {phoneDigits ? (
                    <a
                      href={`tel:${phoneTel}`}
                      aria-label={`Call or text ${phoneDisplay}`}
                      data-analytics-event="click_phone_cta"
                      data-analytics-category="conversion"
                      data-analytics-label="homepage_store_details"
                      className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-3 text-sm font-semibold text-rose-900 transition-all duration-300 hover:border-rose-300 hover:bg-rose-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
                        <path
                          d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.2 11.2 0 003.5.56 1 1 0 011 1V20a1 1 0 01-1 1C10.3 21 3 13.7 3 4a1 1 0 011-1h3.5a1 1 0 011 1 11.2 11.2 0 00.56 3.5 1 1 0 01-.24 1l-2.27 2.3z"
                          fill="currentColor"
                        />
                      </svg>
                      Call / Text
                    </a>
                  ) : null}

                  <a
                    href={storeInfo.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-analytics-event="click_tiktok_cta"
                    data-analytics-category="conversion"
                    data-analytics-label="homepage_contact_section"
                    className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-3 text-sm font-semibold text-rose-900 transition-all duration-300 hover:border-rose-300 hover:bg-rose-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
                      <path
                        d="M16.5 3c.3 1.7 1.3 3 2.9 3.7V9c-1.2 0-2.4-.4-3.4-1.1v5.2c0 2.8-2.3 5-5.1 5A5.05 5.05 0 016 13c0-2.8 2.2-5 5-5 .3 0 .6 0 .9.1v2.5c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.5S9.6 15.4 11 15.4s2.5-1.1 2.5-2.5V3h3z"
                        fill="currentColor"
                      />
                    </svg>
                    TikTok
                  </a>
                </div>

                <p className="text-sm leading-6 text-stone-600">
                  For delivery and branch availability, include your location and the products you want in your message.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">
                    Store Location
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-stone-700">
                    {storeInfo.locationText}
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-rose-100 bg-rose-50/40 shadow-[0_16px_44px_-36px_rgba(136,19,55,0.5)]">
                  <iframe
                    title="MLM Skincare location map"
                    src={mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[210px] w-full md:h-[320px]"
                    allowFullScreen
                  />
                  <div className="border-t border-rose-100 bg-white/80 px-4 py-3 text-xs text-stone-600">
                    Zoom and drag to explore.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
          <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-[0_14px_40px_-36px_rgba(136,19,55,0.45)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">
              Guides and pages
            </p>
            <h2 className="mt-3 font-serif text-2xl text-rose-950 sm:text-3xl">
              Helpful links for buyers and resellers
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link href="/beauty-products-iloilo" className="rounded-xl border border-rose-100 px-4 py-3 text-sm font-medium text-stone-700 hover:bg-rose-50">
                Beauty Products Iloilo
              </Link>
              <Link href="/skincare-products-iloilo" className="rounded-xl border border-rose-100 px-4 py-3 text-sm font-medium text-stone-700 hover:bg-rose-50">
                Skincare Products Iloilo
              </Link>
              <Link href="/reseller-beauty-products-iloilo" className="rounded-xl border border-rose-100 px-4 py-3 text-sm font-medium text-stone-700 hover:bg-rose-50">
                Reseller Beauty Products Iloilo
              </Link>
              <Link href="/delivery-guimaras-beauty-products" className="rounded-xl border border-rose-100 px-4 py-3 text-sm font-medium text-stone-700 hover:bg-rose-50">
                Delivery Guide
              </Link>
              <Link href="/blog" className="rounded-xl border border-rose-100 px-4 py-3 text-sm font-medium text-stone-700 hover:bg-rose-50 sm:col-span-2">
                Read Beauty Guides
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer
        brandName={brandName}
        location={storeInfo.branches.join(" & ") + ", Philippines"}
      />

      <a
        href={storeInfo.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-event="click_messenger_cta"
        data-analytics-category="conversion"
        data-analytics-label="floating_mobile_cta"
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 flex min-h-12 max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border border-rose-200/80 bg-white pl-4 pr-1.5 text-rose-900 shadow-[0_14px_40px_-24px_rgba(136,19,55,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 sm:hidden"
      >
        <span className="whitespace-nowrap text-xs font-semibold tracking-wide">
          Message us
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-200/70 bg-rose-50/70">
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
              fill="currentColor"
            />
          </svg>
        </span>
      </a>
    </div>
  );
}

import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import { storeInfo } from "@/data/store";

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
      "Dali lang kausap sa Messenger, madasig man ang delivery. Legit gid ang produkto.",
  },
  {
    name: "Jen R.",
    location: "Guimaras",
    message:
      "Balik-balik ko diri kay reseller ako—pareho ang kalidad kag presyo, wala sang sinyas nga palpak.",
  },
  {
    name: "Camille T.",
    location: "Iloilo City",
    message:
      "Maayo ang packaging kag responsive ang seller. Sulit gid para sa skincare routine ko.",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffdfb] text-stone-800">
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
              ordering through Facebook. We proudly serve branches in{" "}
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
                <p className="text-sm leading-7 text-stone-600">
                  &quot;{feedback.message}&quot;
                </p>
                <div className="mt-4 border-t border-rose-100 pt-4">
                  <p className="font-semibold text-rose-950">{feedback.name}</p>
                  <p className="text-xs uppercase tracking-wide text-stone-500">
                    {feedback.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-100/60 via-white to-amber-100/40 p-8 shadow-[0_18px_50px_-36px_rgba(136,19,55,0.45)] md:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
                  Contact / Order
                </p>
                <h2 className="mt-3 font-serif text-3xl text-rose-950 sm:text-4xl">
                  Message us to order
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700">
                  Ready to stock up or ask about our latest beauty collection? Send us
                  a message and our team will respond quickly.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={storeInfo.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-rose-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
                      <path
                        d="M20 12a8 8 0 10-9.27 7.9v-5.58h-2.4V12h2.4V10.2c0-2.37 1.4-3.68 3.55-3.68 1.03 0 2.1.18 2.1.18V9h-1.18c-1.17 0-1.53.72-1.53 1.46V12h2.6l-.42 2.32h-2.18v5.58A8 8 0 0020 12z"
                        fill="currentColor"
                      />
                    </svg>
                    Facebook / Messenger
                  </a>
                  <a
                    href={storeInfo.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-3 text-sm font-semibold text-rose-900 transition-all duration-300 hover:border-rose-300 hover:bg-rose-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
                      <path
                        d="M16.5 3c.3 1.7 1.3 3 2.9 3.7V9c-1.2 0-2.4-.4-3.4-1.1v5.2c0 2.8-2.3 5-5.1 5A5.05 5.05 0 016 13c0-2.8 2.2-5 5-5 .3 0 .6 0 .9.1v2.5c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.5S9.6 15.4 11 15.4s2.5-1.1 2.5-2.5V3h3z"
                        fill="currentColor"
                      />
                    </svg>
                    Follow us on TikTok
                  </a>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-6 text-stone-600">
                  Fastest replies are usually on{" "}
                  <span className="font-medium text-stone-700">Messenger</span>. For calls or
                  texts, use the number on the right.
                </p>
              </div>

              <div className="rounded-3xl border border-rose-100/90 bg-white/85 p-6 shadow-[0_14px_44px_-38px_rgba(136,19,55,0.55)] backdrop-blur-sm">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">
                  Store details
                </h3>
                <dl className="mt-5 space-y-6">
                  <div>
                    <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-rose-700"
                        aria-hidden="true"
                      >
                        <path
                          d="M6.6 2h10.8c1 0 1.8.8 1.8 1.8v16.7c0 .7-.8 1.1-1.3.7l-3.7-2.8-3.2 2.4a.8.8 0 01-1 0L6.3 18.4 2.8 21.1c-.5.4-1.3 0-1.3-.7V3.8C1.5 2.8 2.3 2 3.3 2h3.3z"
                          fill="currentColor"
                        />
                      </svg>
                      Mobile
                    </dt>
                    <dd className="mt-2">
                      {phoneDigits ? (
                        <a
                          href={`tel:${phoneTel}`}
                          aria-label={`Call or text ${phoneDisplay}`}
                          className="group inline-flex cursor-pointer rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
                        >
                          <span className="font-sans text-2xl font-semibold tabular-nums tracking-tight text-rose-950 underline decoration-rose-200 underline-offset-[6px] transition-colors group-hover:text-rose-800 group-hover:decoration-rose-400">
                            {phoneDisplay}
                          </span>
                        </a>
                      ) : (
                        <p className="font-sans text-2xl font-semibold tabular-nums tracking-tight text-rose-950">
                          {phoneDisplay}
                        </p>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-rose-700"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"
                          fill="currentColor"
                        />
                      </svg>
                      Address
                    </dt>
                    <dd className="mt-2 space-y-2 text-sm leading-6 text-stone-700">
                      <p>{storeInfo.locationText}</p>
                      <a
                        href={storeInfo.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-4 py-2 text-sm font-semibold text-rose-900 transition-colors duration-200 hover:border-rose-300 hover:bg-rose-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
                          <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 4.5 5.2 11.2 6.7 13.1.2.2.5.3.8.3s.6-.1.8-.3C14.8 20.2 20 13.5 20 9c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"
                            fill="currentColor"
                          />
                        </svg>
                        View in Google Maps
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
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

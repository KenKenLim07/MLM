"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroSectionProps = {
  brandName: string;
  orderUrl: string;
};

const softRise = {
  initial: { y: 14, opacity: 1 },
  animate: { y: 0, opacity: 1 },
};

const glowWordTransition = {
  duration: 1.8,
  repeat: Infinity,
  repeatType: "reverse" as const,
  ease: "easeInOut" as const,
};

export default function HeroSection({ brandName, orderUrl }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,207,232,0.3),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.12),_transparent_40%)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-24 md:pt-24">
        <div className="space-y-6 text-center md:text-left">
          {reduceMotion ? (
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
                Authorized Beauty Distributor
              </p>
              <h1 className="mx-auto max-w-xl font-serif text-4xl leading-tight text-rose-950 sm:text-5xl md:mx-0 md:text-6xl">
                {brandName}
              </h1>
              <h2 className="mx-auto max-w-xl leading-relaxed md:mx-0">
                <span className="text-3xl font-semibold text-amber-600 sm:text-4xl">
                  Premium
                </span>{" "}
                <span className="text-xl font-medium text-stone-800/65 sm:text-2xl">
                  Beauty Products for Radiant Skin
                </span>
              </h2>
              <p className="mx-auto max-w-xl text-base leading-7 text-stone-600 sm:text-lg md:mx-0">
                Curated skincare and beauty essentials trusted by resellers and
                everyday customers across the Philippines.
              </p>
            </>
          ) : (
            <>
              <motion.p
                {...softRise}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0 }}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700"
              >
                Authorized Beauty Distributor
              </motion.p>
              <motion.h1
                {...softRise}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.04 }}
                className="mx-auto max-w-xl font-serif text-4xl leading-tight text-rose-950 sm:text-5xl md:mx-0 md:text-6xl"
              >
                {brandName}
              </motion.h1>
              <motion.h2
                {...softRise}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
                className="mx-auto max-w-xl leading-relaxed md:mx-0"
              >
                <span className="text-3xl font-semibold text-amber-600 sm:text-4xl">
                  Premium
                </span>{" "}
                <span className="text-xl font-medium text-stone-800/65 sm:text-2xl">
                  Beauty Products for Radiant Skin
                </span>
              </motion.h2>
              <motion.p
                {...softRise}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                className="mx-auto max-w-xl text-base leading-7 text-stone-600 sm:text-lg md:mx-0"
              >
                Curated skincare and beauty essentials trusted by resellers and
                everyday customers across the Philippines.
              </motion.p>
            </>
          )}
          {reduceMotion ? (
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start">
              <a
                href="#products"
                className="rounded-full bg-rose-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-800"
              >
                View Products
              </a>
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-rose-200 bg-white px-6 py-3 text-sm font-semibold text-rose-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-50"
              >
                Message us on Facebook
              </a>
            </div>
          ) : (
            <motion.div
              {...softRise}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
              className="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start"
            >
              <a
                href="#products"
                className="rounded-full bg-rose-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-800"
              >
                View Products
              </a>
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-rose-200 bg-white px-6 py-3 text-sm font-semibold text-rose-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-50"
              >
                Message us
              </a>
            </motion.div>
          )}
        </div>

        {reduceMotion ? (
          <div className="relative z-10 min-h-72 overflow-hidden rounded-[2.25rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-8 shadow-[0_20px_60px_-35px_rgba(136,19,55,0.4)] sm:min-h-80">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-rose-200/40 blur-2xl" />
            <div className="absolute -bottom-10 -left-4 h-36 w-36 rounded-full bg-amber-200/30 blur-2xl" />
            <div className="relative flex h-full flex-col justify-between text-center md:text-left">
              <p className="font-serif text-3xl text-rose-900">
                <span
                  className="inline-block"
                  style={{ textShadow: "0 0 14px rgba(136,19,55,0.28), 0 0 8px rgba(251,191,36,0.2)" }}
                >
                  Glow with Confidence
                </span>
              </p>
              <p className="mx-auto max-w-xs text-sm leading-6 text-stone-600 md:mx-0">
                Wholesale-ready selections, quality-controlled products, and fast
                messenger ordering support for your beauty business.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm md:text-left">
                <div className="rounded-2xl border border-rose-100 bg-white/75 p-4">
                  <p className="font-semibold text-rose-900">100%</p>
                  <p className="text-stone-600">Authentic stocks</p>
                </div>
                <div className="rounded-2xl border border-rose-100 bg-white/75 p-4">
                  <p className="font-semibold text-rose-900">Nationwide</p>
                  <p className="text-stone-600">Delivery support</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ y: 18, opacity: 1, scale: 0.985 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
            className="relative z-10 min-h-72 overflow-hidden rounded-[2.25rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-8 shadow-[0_20px_60px_-35px_rgba(136,19,55,0.4)] sm:min-h-80"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-rose-200/40 blur-2xl" />
            <div className="absolute -bottom-10 -left-4 h-36 w-36 rounded-full bg-amber-200/30 blur-2xl" />
            <div className="relative flex h-full flex-col justify-between text-center md:text-left">
              <p className="font-serif text-3xl text-rose-900">
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 14px rgba(136,19,55,0.2), 0 0 8px rgba(251,191,36,0.16)",
                      "0 0 18px rgba(136,19,55,0.34), 0 0 12px rgba(251,191,36,0.24)",
                    ],
                  }}
                  transition={glowWordTransition}
                  className="inline-block"
                >
                  Glow with Confidence
                </motion.span>
              </p>
              <p className="mx-auto max-w-xs text-sm leading-6 text-stone-600 md:mx-0">
                Wholesale-ready selections, quality-controlled products, and fast
                ordering support for your beauty business.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm md:text-left">
                <div className="rounded-2xl border border-rose-100 bg-white/75 p-4">
                  <p className="font-semibold text-rose-900">100%</p>
                  <p className="text-stone-600">Authentic stocks</p>
                </div>
                <div className="rounded-2xl border border-rose-100 bg-white/75 p-4">
                  <p className="font-semibold text-rose-900">Nationwide</p>
                  <p className="text-stone-600">Delivery support</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

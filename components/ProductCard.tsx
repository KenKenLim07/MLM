"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

const pesoFormatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl border border-rose-100/90 bg-white shadow-[0_14px_42px_-30px_rgba(136,19,55,0.42)] transition-shadow duration-300 hover:shadow-[0_20px_54px_-30px_rgba(136,19,55,0.52)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-rose-100 via-amber-50 to-rose-50">
        {product.imageSrc ? (
          <Image
            src={product.imageSrc}
            alt={product.imageLabel}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.65),_transparent_50%)]" />
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent p-4">
          <span className="inline-flex rounded-full border border-white/45 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-rose-800 backdrop-blur-sm">
            {product.imageLabel}
          </span>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-rose-950">{product.name}</h3>
          <p className="text-sm leading-6 text-stone-600">{product.description}</p>
        </div>
        <div className="space-y-3">
          <div className="flex items-end justify-between gap-3">
            <p className="text-2xl font-semibold tabular-nums text-rose-900">
              {pesoFormatter.format(product.price)}
            </p>
            <p className="text-xs uppercase tracking-wide text-stone-500">Suggested retail</p>
          </div>
          <a
            href={product.messengerUrl}
            target="_blank"
            rel="noreferrer"
            data-analytics-event="click_messenger_cta"
            data-analytics-category="conversion"
            data-analytics-label={`product_card:${product.id}`}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-rose-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-rose-800 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Inquire now
          </a>
        </div>
      </div>
    </motion.article>
  );
}

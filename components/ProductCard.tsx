"use client";

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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-[0_12px_40px_-32px_rgba(136,19,55,0.45)]"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-rose-100 via-amber-50 to-rose-50 p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.65),_transparent_50%)]" />
        <div className="relative flex h-full items-end">
          <span className="rounded-full border border-rose-200/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-rose-800">
            {product.imageLabel}
          </span>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-rose-950">{product.name}</h3>
          <p className="text-sm leading-6 text-stone-600">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-semibold text-rose-900">
            {pesoFormatter.format(product.price)}
          </p>
          <a
            href={product.messengerUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-rose-900 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Inquire now
          </a>
        </div>
      </div>
    </motion.article>
  );
}

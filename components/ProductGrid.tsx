import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section id="products" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
      <div className="mb-10 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
          Our TOp Choice
        </p>
        <h2 className="font-serif text-3xl text-rose-950 sm:text-4xl">
          Beauty Products Our Clients Love
        </h2>
        <p className="max-w-2xl text-stone-600">
          Explore our bestselling line of premium beauty essentials for resellers
          and skincare enthusiasts.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

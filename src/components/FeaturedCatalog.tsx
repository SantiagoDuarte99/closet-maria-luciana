import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedCatalog() {
  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <span className="font-script text-2xl text-coral-deep">Nuestra colección</span>
          <h2 className="font-display text-3xl sm:text-4xl text-ink mt-1">
            Lo más querido del closet
          </h2>
        </div>
        <Link
          href="/tienda"
          className="font-display text-coral-deep hover:underline underline-offset-4"
        >
          Ver todo →
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}

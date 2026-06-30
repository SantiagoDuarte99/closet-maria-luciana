import Image from "next/image";
import Link from "next/link";
import { Product, formatCOP } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group block rounded-3xl overflow-hidden bg-white/60 border border-coral/10 hover:border-coral/30 hover:shadow-lg hover:shadow-coral/10 transition-all"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-display text-coral-deep">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-sm sm:text-base text-ink leading-snug">
          {product.name}
        </h3>
        <p className="mt-1 font-display text-coral-deep text-lg">
          {formatCOP(product.price)}
        </p>
      </div>
    </Link>
  );
}

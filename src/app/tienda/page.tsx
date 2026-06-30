import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Tienda | El Closet de María Luciana",
};

export default function TiendaPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center mb-12">
        <span className="font-script text-2xl text-coral-deep">Catálogo</span>
        <h1 className="font-display text-3xl sm:text-4xl text-ink mt-1">
          Toda nuestra colección
        </h1>
        <p className="text-ink/60 mt-3 max-w-md mx-auto">
          {products.length} prendas pensadas para los más pequeños de la casa.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}

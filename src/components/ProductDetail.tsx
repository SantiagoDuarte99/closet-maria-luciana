"use client";

import { useState } from "react";
import Image from "next/image";
import { Product, formatCOP } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "@/lib/site";
import { Check } from "lucide-react";

export default function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCart();

  function handleAddToCart() {
    if (!size) return;
    addItem(product.slug, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    openCart();
  }

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-cream-deep">
          <Image
            src={product.images[activeImage]}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        </div>
        {product.images.length > 1 && (
          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`relative h-20 w-16 rounded-xl overflow-hidden border-2 transition-colors ${
                  activeImage === i ? "border-coral" : "border-transparent"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <span className="inline-block rounded-full bg-coral/10 text-coral-deep font-display text-xs px-3 py-1 mb-3">
          {product.category}
        </span>
        <h1 className="font-display text-2xl sm:text-3xl text-ink leading-snug">
          {product.name}
        </h1>
        <p className="font-display text-2xl text-coral-deep mt-3">
          {formatCOP(product.price)}
        </p>
        <p className="text-ink/70 leading-relaxed mt-5">{product.description}</p>

        <div className="mt-7">
          <p className="font-display text-sm text-ink mb-2">Talla</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`h-11 min-w-11 px-3 rounded-full border-2 font-display text-sm transition-colors ${
                  size === s
                    ? "bg-coral text-white border-coral"
                    : "border-ink/15 text-ink/70 hover:border-coral/40"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAddToCart}
            disabled={!size}
            className="flex-1 rounded-full bg-coral text-white py-3.5 font-display hover:bg-coral-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {added ? (
              <>
                <Check size={18} /> Agregado
              </>
            ) : (
              "Agregar al carrito"
            )}
          </button>
          <a
            href={whatsappLink(
              `¡Hola! Me interesa "${product.name}"${size ? ` en talla ${size}` : ""}. ¿Está disponible?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full border-2 border-ink/15 py-3.5 font-display text-ink/80 text-center hover:border-coral/40 hover:text-coral-deep transition-colors"
          >
            Preguntar por WhatsApp
          </a>
        </div>
        {!size && (
          <p className="text-xs text-ink/40 mt-2">Selecciona una talla para continuar.</p>
        )}
      </div>
    </div>
  );
}

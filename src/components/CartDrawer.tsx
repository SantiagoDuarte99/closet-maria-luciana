"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getProduct, formatCOP } from "@/lib/products";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice } =
    useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-cream shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-coral/15">
          <h2 className="font-display text-xl text-coral-deep">Tu carrito</h2>
          <button
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="h-9 w-9 rounded-full hover:bg-coral/10 flex items-center justify-center"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 text-ink/60">
              <p className="font-display text-lg">Tu carrito está vacío</p>
              <p className="text-sm">Explora la tienda y elige algo lindo 🌈</p>
              <Link
                href="/tienda"
                onClick={closeCart}
                className="mt-2 rounded-full bg-coral text-white px-5 py-2 text-sm font-semibold hover:bg-coral-deep transition-colors"
              >
                Ir a la tienda
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => {
                const product = getProduct(item.slug);
                if (!product) return null;
                return (
                  <li key={`${item.slug}-${item.size}`} className="flex gap-3">
                    <div className="relative h-20 w-16 shrink-0 rounded-xl overflow-hidden bg-cream-deep">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm text-ink leading-snug truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-ink/50 mt-0.5">Talla {item.size}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 border border-coral/20 rounded-full px-2 py-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.size, item.quantity - 1)
                            }
                            aria-label="Disminuir cantidad"
                            className="text-coral-deep"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-semibold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.size, item.quantity + 1)
                            }
                            aria-label="Aumentar cantidad"
                            className="text-coral-deep"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-ink">
                          {formatCOP(product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.slug, item.size)}
                      aria-label="Eliminar del carrito"
                      className="text-ink/30 hover:text-coral-deep transition-colors self-start"
                    >
                      <Trash2 size={16} />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-coral/15 px-6 py-5 bg-cream">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-ink/70">Total</span>
              <span className="font-display text-xl text-coral-deep">
                {formatCOP(totalPrice)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block text-center rounded-full bg-coral text-white py-3 font-semibold hover:bg-coral-deep transition-colors"
            >
              Finalizar compra
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}

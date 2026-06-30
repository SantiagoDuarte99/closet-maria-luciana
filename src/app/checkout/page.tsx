"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { getProduct, formatCOP } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handlePay() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          buyer: { name: form.name, email: form.email, phone: form.phone },
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "No se pudo procesar el pago.");
        setLoading(false);
        return;
      }
      window.location.href = data.init_point;
    } catch {
      setError("No se pudo conectar con Mercado Pago.");
      setLoading(false);
    }
  }

  const orderSummary = items
    .map((i) => {
      const p = getProduct(i.slug);
      return p ? `${i.quantity}x ${p.name} (talla ${i.size})` : "";
    })
    .join("\n");

  const whatsappOrderLink = whatsappLink(
    `¡Hola! Quiero confirmar mi pedido:\n${orderSummary}\n\nTotal: ${formatCOP(
      totalPrice
    )}\n\nNombre: ${form.name}\nDirección: ${form.address}, ${form.city}\nTeléfono: ${form.phone}`
  );

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-2xl text-ink mb-3">Tu carrito está vacío</h1>
        <p className="text-ink/60 mb-6">Agrega productos antes de pasar al pago.</p>
        <Link
          href="/tienda"
          className="rounded-full bg-coral text-white px-6 py-3 font-display hover:bg-coral-deep transition-colors"
        >
          Ir a la tienda
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="font-display text-3xl text-ink mb-10">Finalizar compra</h1>

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <div>
          <h2 className="font-display text-lg text-coral-deep mb-4">
            Datos de envío
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              placeholder="Nombre completo"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="rounded-xl border border-ink/15 px-4 py-3 sm:col-span-2 outline-none focus:border-coral"
            />
            <input
              placeholder="Teléfono"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="rounded-xl border border-ink/15 px-4 py-3 outline-none focus:border-coral"
            />
            <input
              placeholder="Correo electrónico"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="rounded-xl border border-ink/15 px-4 py-3 outline-none focus:border-coral"
            />
            <input
              placeholder="Dirección de entrega"
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              className="rounded-xl border border-ink/15 px-4 py-3 sm:col-span-2 outline-none focus:border-coral"
            />
            <input
              placeholder="Ciudad"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              className="rounded-xl border border-ink/15 px-4 py-3 sm:col-span-2 outline-none focus:border-coral"
            />
          </div>

          {error && (
            <p className="mt-4 text-sm text-coral-deep bg-coral/10 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={handlePay}
              disabled={loading || !form.name || !form.phone || !form.address}
              className="rounded-full bg-coral text-white py-3.5 font-display hover:bg-coral-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Conectando con Mercado Pago…" : "Pagar con Mercado Pago"}
            </button>
            <a
              href={whatsappOrderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-ink/15 py-3.5 font-display text-ink/80 text-center hover:border-coral/40 hover:text-coral-deep transition-colors"
            >
              O confirmar pedido por WhatsApp
            </a>
          </div>
        </div>

        <div className="bg-cream-deep/60 rounded-3xl p-6 h-fit">
          <h2 className="font-display text-lg text-ink mb-4">Resumen del pedido</h2>
          <ul className="flex flex-col gap-4">
            {items.map((item) => {
              const product = getProduct(item.slug);
              if (!product) return null;
              return (
                <li key={`${item.slug}-${item.size}`} className="flex gap-3">
                  <div className="relative h-16 w-14 shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-display text-ink leading-snug">{product.name}</p>
                    <p className="text-ink/50 text-xs">
                      Talla {item.size} · x{item.quantity}
                    </p>
                  </div>
                  <span className="text-sm font-semibold">
                    {formatCOP(product.price * item.quantity)}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-ink/10 mt-5 pt-4 flex justify-between">
            <span className="font-display text-ink/70">Total</span>
            <span className="font-display text-xl text-coral-deep">
              {formatCOP(totalPrice)}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

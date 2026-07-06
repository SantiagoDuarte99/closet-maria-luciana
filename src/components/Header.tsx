"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/tienda", label: "Tienda" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#faq", label: "Preguntas" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Header() {
  const { totalItems, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-sm border-b border-coral/15">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/brand/logo.png"
            alt="El Closet de María Luciana"
            width={120}
            height={120}
            className="object-contain h-14 w-14 sm:h-16 sm:w-16"
          />
          <span className="hidden sm:block font-display text-lg leading-tight text-coral-deep">
            El Closet de
            <br />
            María Luciana
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-display text-[15px] text-ink/80">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-coral-deep transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            aria-label="Abrir carrito"
            className="relative h-11 w-11 rounded-full bg-coral/10 hover:bg-coral/20 transition-colors flex items-center justify-center text-coral-deep"
          >
            <ShoppingBag size={20} strokeWidth={2.2} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-coral text-white text-[11px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden h-11 w-11 rounded-full flex items-center justify-center text-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-coral/15 bg-cream px-6 py-4 flex flex-col gap-4 font-display text-ink/80">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="hover:text-coral-deep transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsappFloat from "@/components/WhatsappFloat";

export const metadata: Metadata = {
  title: "El Closet de María Luciana | Moda Infantil",
  description:
    "Moda infantil y para bebés en Colombia. Conjuntos, vestidos y ropa de baño con diseños tiernos y materiales suaves. Envíos a todo el país.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700&family=Quicksand:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-cream text-ink">
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <CartDrawer />
          <WhatsappFloat />
        </CartProvider>
      </body>
    </html>
  );
}

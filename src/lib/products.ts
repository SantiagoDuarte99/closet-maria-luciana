export type Product = {
  slug: string;
  name: string;
  price: number;
  sizes: string[];
  category: string;
  description: string;
  images: string[];
};

export const products: Product[] = [
  {
    slug: "conjunto-floral-rosa",
    name: "Conjunto Top y Short Floral Rosa",
    price: 180000,
    sizes: ["2", "4", "6", "8"],
    category: "Niña",
    description:
      "Conjunto de top y short en algodón bordado eyelet, con volantes plisados y botones perlados en la espalda. Fresco, cómodo y perfecto para el día a día o paseos al aire libre.",
    images: [
      "/products/conjunto-floral-rosa-1.jpeg",
      "/products/conjunto-floral-rosa-2.jpeg",
      "/products/conjunto-floral-rosa-3.jpeg",
    ],
  },
  {
    slug: "vestido-bano-lila",
    name: "Vestido de Baño Manga Larga Lila",
    price: 180000,
    sizes: ["2", "4", "6", "8"],
    category: "Niña",
    description:
      "Vestido de baño de manga larga con protección UV, estampado de moños y flores en tonos lila y rosa, cierre frontal de cremallera. Ideal para días de piscina o playa con protección extra.",
    images: [
      "/products/vestido-bano-lila-1.jpeg",
      "/products/vestido-bano-lila-2.jpeg",
    ],
  },
  {
    slug: "vestido-crema-floral",
    name: "Vestido Crema Floral con Lazo",
    price: 180000,
    sizes: ["2", "4", "6", "8"],
    category: "Niña",
    description:
      "Vestido largo en tela a rayas con estampado floral, espalda descubierta y lindo lazo rosa anudado. Una pieza elegante para ocasiones especiales o tardes de fotos.",
    images: [
      "/products/vestido-crema-floral-1.jpeg",
      "/products/vestido-crema-floral-2.jpeg",
    ],
  },
  {
    slug: "conjunto-playero-crema",
    name: "Conjunto Playero Crema con Sombrero",
    price: 180000,
    sizes: ["2", "4", "6", "8"],
    category: "Niña",
    description:
      "Conjunto de camiseta UV manga larga, falda short y sombrero a juego, con estampado de moños y corazones rosa. Perfecto para playa, piscina o vacaciones con protección solar.",
    images: [
      "/products/conjunto-playero-crema-1.jpeg",
      "/products/conjunto-playero-crema-2.jpeg",
    ],
  },
  {
    slug: "romper-bebe-rosa",
    name: "Romper Bebé Rosa con Diadema",
    price: 180000,
    sizes: ["2", "4", "6", "8"],
    category: "Bebé",
    description:
      "Romper en algodón bordado eyelet con tirantes anudados y diadema a juego. Suave, delicado y perfecto para los primeros recuerdos de tu bebé.",
    images: [
      "/products/romper-bebe-rosa-1.jpeg",
      "/products/romper-bebe-rosa-2.jpeg",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatCOP(amount: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}

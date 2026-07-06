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
    slug: "set-valentina-lila",
    name: "Set Valentina Lila – 3 piezas (Vestido + Top Cruzado)",
    price: 149900,
    sizes: ["4", "6", "8", "10"],
    category: "Niña",
    description:
      "Un conjunto tierno y versátil para las más pequeñas de la casa. Incluye vestido tirantas en lila con top blanco cruzado, perfecto para combinar o usar por separado. Tela suave, cómoda para jugar y elegante para salir.",
    images: [
      "/products/set-valentina-lila-1.jpeg",
      "/products/set-valentina-lila-2.jpeg",
      "/products/set-valentina-lila-3.jpeg",
      "/products/set-valentina-lila-4.jpeg",
    ],
  },
  {
    slug: "vestido-camila-verde",
    name: "Vestido Camila Verde Salvia – Cuello Polo con Lazo",
    price: 99900,
    sizes: ["4", "6", "8", "10"],
    category: "Niña",
    description:
      "Vestido en tono verde salvia con cuello estilo polo y detalles en blanco crudo. Cinturón con lazo ajustable en la cintura que le da un toque delicado y falda vaporosa tipo campana, ideal para paseos o eventos especiales.",
    images: [
      "/products/vestido-camila-verde-1.jpeg",
      "/products/vestido-camila-verde-2.jpeg",
      "/products/vestido-camila-verde-3.jpeg",
    ],
  },
  {
    slug: "conjunto-playero-lazos",
    name: "Conjunto Playero Lazos y Corazones Rosa",
    price: 109900,
    sizes: ["12m", "18m", "2", "6", "8", "10"],
    category: "Niña",
    description:
      "Conjunto playero de dos piezas con estampado de lazos y corazones en tono rosa sobre fondo crema. Blusa manga larga tipo rash guard y falda short con volados en doble capa, ideal para el sol y el agua con protección y estilo.",
    images: ["/products/conjunto-playero-lazos-1.jpeg"],
  },
  {
    slug: "vestido-bano-lila",
    name: "Vestido de Baño Manga Larga Lila",
    price: 109900,
    sizes: ["4", "6", "8", "10"],
    category: "Niña",
    description:
      "Vestido de baño de manga larga con protección UV, cierre frontal de cremallera y estampado de moños, flores y corazones en tonos lila, rosa y menta. Ideal para días de piscina o playa con protección extra.",
    images: [
      "/products/vestido-bano-lila-1.jpeg",
      "/products/vestido-bano-lila-2.jpeg",
      "/products/vestido-bano-lila-3.jpeg",
    ],
  },
  {
    slug: "vestido-crema-floral",
    name: "Vestido Crema Floral con Lazo",
    price: 126900,
    sizes: ["2", "4", "6", "8", "10"],
    category: "Niña",
    description:
      "Vestido largo en tela a rayas con estampado floral, encajes delicados y cinturón rosa anudado en la cintura, con vuelo en volante al final de la falda. Una pieza elegante para ocasiones especiales o tardes de fotos.",
    images: [
      "/products/vestido-crema-floral-1.jpeg",
      "/products/vestido-crema-floral-2.jpeg",
      "/products/vestido-crema-floral-3.jpeg",
    ],
  },
  {
    slug: "vestido-eyelet-amarillo",
    name: "Vestido Eyelet Amarillo Corazones",
    price: 139900,
    sizes: ["4", "10"],
    category: "Niña",
    description:
      "Vestido largo en algodón bordado eyelet con estampado de corazones, tirantas fruncidas en rosa y doble capa en la falda con volante. Fresco y romántico, ideal para paseos y ocasiones especiales.",
    images: [
      "/products/vestido-eyelet-amarillo-1.jpeg",
      "/products/vestido-eyelet-amarillo-2.jpeg",
      "/products/vestido-eyelet-amarillo-3.jpeg",
    ],
  },
  {
    slug: "conjunto-floral-rosa",
    name: "Conjunto Emma Rosa Bordado",
    price: 119900,
    sizes: ["6", "10"],
    category: "Niña",
    description:
      "Conjunto de top y short en algodón bordado eyelet, con volantes plisados en tono rosa. Fresco, cómodo y perfecto para el día a día o paseos al aire libre.",
    images: [
      "/products/conjunto-floral-rosa-1.jpeg",
      "/products/conjunto-floral-rosa-2.jpeg",
      "/products/conjunto-floral-rosa-3.jpeg",
    ],
  },
  {
    slug: "jardinero-amarillo-rosa",
    name: "Jardinero Mia Amarillo Dulce",
    price: 109900,
    sizes: ["4", "6"],
    category: "Niña",
    description:
      "Jardinero en algodón bordado eyelet con estampado de corazones, botones perlados y volantes en rosa en cuello y espalda, con abertura posterior. Delicado y divertido para el día a día.",
    images: [
      "/products/romper-amarillo-rosa-1.jpeg",
      "/products/romper-amarillo-rosa-2.jpeg",
      "/products/romper-amarillo-rosa-3.jpeg",
    ],
  },
  {
    slug: "enterizo-bebe-rosa",
    name: "Enterizo Bebé Rosa con Diadema",
    price: 84900,
    sizes: ["9m"],
    category: "Bebé",
    description:
      "Enterizo en algodón bordado con corazones, tirantes cruzados en la espalda y diadema con moño a juego. Suave, delicado y perfecto para los primeros recuerdos de tu bebé.",
    images: [
      "/products/enterizo-bebe-rosa-2.jpeg",
      "/products/enterizo-bebe-rosa-1.jpeg",
      "/products/enterizo-bebe-rosa-3.jpeg",
    ],
  },
  {
    slug: "enterizo-bebe-rosa-lazo",
    name: "Enterizo Luna Rosa",
    price: 79000,
    sizes: ["9m", "12m", "18m"],
    category: "Bebé",
    description:
      "Enterizo en algodón rosa con tirantas anudadas, moño a cuadros en tonos verdes y volantes fruncidos en el escote y las piernas. Suave, fresco y perfecto para el día a día de tu bebé.",
    images: [
      "/products/enterizo-bebe-rosa-lazo-2.jpeg",
      "/products/enterizo-bebe-rosa-lazo-1.jpeg",
      "/products/enterizo-bebe-rosa-lazo-3.jpeg",
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

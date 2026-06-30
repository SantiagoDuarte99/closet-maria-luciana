export const site = {
  name: "El Closet de María Luciana",
  tagline: "Moda infantil",
  whatsapp: "573132060700", // formato internacional sin '+' para enlaces wa.me
  whatsappDisplay: "+57 313 206 0700",
  instagram: "https://instagram.com/elclosetdemarialu",
  instagramHandle: "@elclosetdemarialu",
  facebook: "https://facebook.com/Elclosetdemarialu",
  facebookHandle: "Elclosetdemarialu",
  city: "Colombia",
  currency: "COP",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

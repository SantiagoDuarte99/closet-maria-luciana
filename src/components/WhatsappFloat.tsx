"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function WhatsappFloat() {
  return (
    <a
      href={whatsappLink("¡Hola! Quiero hacer un pedido en El Closet de María Luciana 🌈")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 flex items-center justify-center hover:scale-105 transition-transform animate-float"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}

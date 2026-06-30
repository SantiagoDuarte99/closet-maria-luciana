import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V9a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contacto" className="mt-24 bg-[#3d2e2a] text-cream/90">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/brand/logo.jpeg"
              alt={site.name}
              width={52}
              height={52}
              className="rounded-full object-cover ring-2 ring-cream/30"
            />
            <span className="font-display text-lg text-cream">{site.name}</span>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
            Ropa infantil y para bebés pensada para jugar, sonreír y crecer
            cómodos. Hecha con cariño para los más pequeños de la casa.
          </p>
        </div>

        <div>
          <h3 className="font-display text-cream mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm text-cream/75">
            <li>
              <a
                href={whatsappLink("¡Hola! Tengo una pregunta sobre sus productos 😊")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-mint transition-colors"
              >
                <MessageCircle size={16} /> {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-mint transition-colors"
              >
                <InstagramIcon /> {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-mint transition-colors"
              >
                <FacebookIcon /> {site.facebookHandle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-cream mb-4">Explorar</h3>
          <ul className="space-y-3 text-sm text-cream/75">
            <li>
              <Link href="/tienda" className="hover:text-mint transition-colors">
                Tienda
              </Link>
            </li>
            <li>
              <Link href="/#nosotros" className="hover:text-mint transition-colors">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-mint transition-colors">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {site.name} · Moda infantil hecha con ♥ en
        Colombia
      </div>
    </footer>
  );
}

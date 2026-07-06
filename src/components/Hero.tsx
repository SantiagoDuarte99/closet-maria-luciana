import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden cloud-edge pb-20">
      {/* fondo degradado pastel suave */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(201,184,236,0.35), transparent 45%), radial-gradient(circle at 85% 10%, rgba(168,212,232,0.35), transparent 40%), radial-gradient(circle at 50% 90%, rgba(244,196,78,0.18), transparent 45%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 pt-14 sm:pt-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block rounded-full bg-coral/10 text-coral-deep font-display text-sm px-4 py-1.5 mb-5">
            ✨ Hecho con cariño para los más pequeños
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink">
            Moda infantil
            <br />
            <span className="text-coral-deep">tierna, suave</span>
            <br />y llena de color
          </h1>
          <p className="mt-6 text-ink/70 text-base sm:text-lg max-w-md leading-relaxed">
            Conjuntos, vestidos y ropa de baño pensados para que los niños
            jueguen, sonrían y se sientan cómodos. Diseños únicos para vestir
            cada momento especial.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/tienda"
              className="rounded-full bg-coral text-white px-7 py-3.5 font-display hover:bg-coral-deep transition-colors shadow-md shadow-coral/20"
            >
              Ver catálogo
            </Link>
            <Link
              href="/#nosotros"
              className="rounded-full border-2 border-ink/15 px-7 py-3.5 font-display text-ink/80 hover:border-coral/40 hover:text-coral-deep transition-colors"
            >
              Conócenos
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-gold/30 blur-2xl" />
          <div className="absolute -bottom-8 right-8 h-24 w-24 rounded-full bg-mint/30 blur-2xl" />
          <div className="relative h-72 w-72 sm:h-96 sm:w-96 animate-float rounded-[2.5rem] overflow-hidden ring-8 ring-white shadow-xl shadow-coral/15 bg-black">
            <Image
              src="/brand/logo.jpeg"
              alt="El Closet de María Luciana"
              fill
              priority
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

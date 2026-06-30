export default function About() {
  return (
    <section id="nosotros" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cream-deep/60" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="font-script text-2xl text-coral-deep">Sobre nosotros</span>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mt-2 mb-6">
          Una tienda hecha por amor a los más pequeños
        </h2>
        <p className="text-ink/70 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
          El Closet de María Luciana nació del deseo de vestir a los niños con
          prendas tan tiernas y especiales como ellos. Somos una tienda
          colombiana de ropa infantil y para bebés, dedicada a ofrecer diseños
          únicos, telas suaves y detalles hechos a mano que acompañan cada
          etapa de la infancia. Cada conjunto, vestido y accesorio se elige
          pensando en la comodidad, la calidad y esa magia que solo la moda
          infantil puede tener.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div>
            <p className="font-display text-2xl sm:text-3xl text-coral-deep">100%</p>
            <p className="text-xs sm:text-sm text-ink/60 mt-1">Diseños tiernos</p>
          </div>
          <div>
            <p className="font-display text-2xl sm:text-3xl text-coral-deep">🇨🇴</p>
            <p className="text-xs sm:text-sm text-ink/60 mt-1">Envíos a toda Colombia</p>
          </div>
          <div>
            <p className="font-display text-2xl sm:text-3xl text-coral-deep">♥</p>
            <p className="text-xs sm:text-sm text-ink/60 mt-1">Hecho con cariño</p>
          </div>
        </div>
      </div>
    </section>
  );
}

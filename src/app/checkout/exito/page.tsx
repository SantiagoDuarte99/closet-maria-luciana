import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-28 text-center">
      <div className="text-5xl mb-4">🌈</div>
      <h1 className="font-display text-3xl text-ink mb-3">¡Gracias por tu compra!</h1>
      <p className="text-ink/60 mb-8">
        Tu pago fue procesado correctamente. Te contactaremos pronto para
        confirmar el envío de tu pedido.
      </p>
      <Link
        href="/tienda"
        className="rounded-full bg-coral text-white px-7 py-3.5 font-display hover:bg-coral-deep transition-colors"
      >
        Seguir comprando
      </Link>
    </main>
  );
}

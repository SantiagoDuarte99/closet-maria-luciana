import { NextRequest, NextResponse } from "next/server";
import { getProduct } from "@/lib/products";

type CheckoutItem = { slug: string; size: string; quantity: number };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const items: CheckoutItem[] = body.items ?? [];
    const buyer = body.buyer ?? {};

    if (!items.length) {
      return NextResponse.json({ error: "El carrito está vacío" }, { status: 400 });
    }

    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json(
        {
          error:
            "Falta configurar MP_ACCESS_TOKEN en las variables de entorno del servidor. Ver README para instrucciones.",
        },
        { status: 500 }
      );
    }

    const mpItems = items
      .map((item) => {
        const product = getProduct(item.slug);
        if (!product) return null;
        return {
          title: `${product.name} (talla ${item.size})`,
          quantity: item.quantity,
          currency_id: "COP",
          unit_price: product.price,
        };
      })
      .filter(Boolean);

    const origin = req.headers.get("origin") ?? "";

    const preference = {
      items: mpItems,
      payer: {
        name: buyer.name ?? undefined,
        email: buyer.email ?? undefined,
        phone: buyer.phone ? { number: buyer.phone } : undefined,
      },
      back_urls: {
        success: `${origin}/checkout/exito`,
        failure: `${origin}/checkout`,
        pending: `${origin}/checkout`,
      },
      auto_return: "approved",
    };

    const res = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(preference),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data?.message ?? "No se pudo crear la preferencia de pago" },
        { status: 500 }
      );
    }

    return NextResponse.json({ init_point: data.init_point });
  } catch {
    return NextResponse.json({ error: "Error inesperado al procesar el pago" }, { status: 500 });
  }
}

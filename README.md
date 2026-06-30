# El Closet de María Luciana — Tienda Online

Tienda en línea construida con **Next.js**, **TypeScript** y **Tailwind CSS**, con carrito de compras, catálogo, checkout y pago vía **Mercado Pago**.

## 🚀 Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## 💳 Activar pagos con Mercado Pago

1. Crea una cuenta en https://www.mercadopago.com.co
2. Ve a **Tus integraciones → Crear aplicación** en https://www.mercadopago.com.co/developers/panel
3. Copia tu **Access Token** (usa el de prueba primero, luego el de producción)
4. Crea un archivo `.env.local` en la raíz del proyecto (copia `.env.example`) y pega:

```
MP_ACCESS_TOKEN=tu_access_token_aqui
```

5. Reinicia el servidor (`npm run dev`). El botón "Pagar con Mercado Pago" en el checkout ya quedará funcional.

> Mientras no configures esta variable, el botón mostrará un error indicando que falta el token — pero el botón de "Confirmar pedido por WhatsApp" siempre funciona como alternativa.

## ✏️ Editar productos, precios y tallas

Todo el catálogo vive en un solo archivo:

```
src/lib/products.ts
```

Ahí puedes cambiar precios, tallas, nombres, descripciones y agregar productos nuevos (solo agrega un objeto más al arreglo `products`, con sus imágenes en `public/products/`).

## 📞 Editar WhatsApp y redes sociales

```
src/lib/site.ts
```

## 🌐 Cómo publicar la tienda (deploy)

La forma más simple es con **Vercel** (gratis para este tipo de proyecto):

1. Sube este proyecto a un repositorio de GitHub
2. Entra a https://vercel.com, conecta tu repo
3. En "Environment Variables" agrega `MP_ACCESS_TOKEN`
4. Despliega — Vercel te da una URL pública lista para usar

## 📁 Estructura principal

```
src/
  app/            → páginas (inicio, tienda, producto, checkout)
  components/     → Header, Footer, ProductCard, CartDrawer, etc.
  context/        → carrito de compras (persistente en el navegador)
  lib/            → datos de productos y configuración de contacto
public/
  products/       → fotos de productos
  brand/          → logo
```

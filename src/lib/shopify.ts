export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  shopifyVariantId?: string;
}

export const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "";
export const SHOPIFY_STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";

/**
 * Creates a checkout via Shopify Storefront API (GraphQL cartCreate mutation)
 * or returns null if Shopify credentials are not yet configured.
 */
export async function createShopifyCheckout(
  items: CartItem[],
  giftNote: string,
  deliveryWindow: string
): Promise<{ checkoutUrl?: string; error?: string }> {
  if (!SHOPIFY_DOMAIN || !SHOPIFY_STOREFRONT_TOKEN) {
    return {
      error: "SHOPIFY_NOT_CONFIGURED",
    };
  }

  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  // Map items to Shopify lines. If no variant ID is present, we provide a placeholder
  const lines = items.map((item) => ({
    merchandiseId: item.shopifyVariantId || `gid://shopify/ProductVariant/${item.id}`,
    quantity: item.quantity,
  }));

  const attributes = [
    { key: "Mensaje Dedicatoria", value: giftNote || "Sin dedicatoria solicitada" },
    { key: "Ventana de Entrega", value: deliveryWindow || "Entrega regular decembrina" },
  ];

  try {
    const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables: {
          input: {
            lines,
            attributes,
            note: `Dedicatoria: ${giftNote || "N/A"} | Ventana: ${deliveryWindow || "Estándar"}`,
          },
        },
      }),
    });

    const data = await res.json();
    if (data.errors || (data.data?.cartCreate?.userErrors && data.data.cartCreate.userErrors.length > 0)) {
      const err = data.errors?.[0]?.message || data.data.cartCreate.userErrors[0].message;
      return { error: err };
    }

    return { checkoutUrl: data.data.cartCreate.cart.checkoutUrl };
  } catch (err: unknown) {
    return { error: err instanceof Error ? err.message : "Error al conectar con Shopify" };
  }
}

/**
 * Generates an instant WhatsApp checkout link formatted with order details
 */
export function generateWhatsAppOrderLink(
  items: CartItem[],
  total: number,
  giftNote: string,
  deliveryWindow: string,
  phoneNumber = "525500000000" // Replace with store owner's WhatsApp
): string {
  const itemsText = items
    .map((item) => `• ${item.quantity}x ${item.title} ($${(item.price * item.quantity).toLocaleString("es-MX")} MXN)`)
    .join("%0A");

  const message =
    `🎄 *HOLA, DESEO CONFIRMAR MI PEDIDO DE CANASTAS NAVIDEÑAS*%0A%0A` +
    `*Resumen del Pedido:*%0A${itemsText}%0A%0A` +
    `*Total Estimado:* $${total.toLocaleString("es-MX")} MXN%0A` +
    `*Fecha/Ventana deseada:* ${encodeURIComponent(deliveryWindow || "Lo antes posible")}%0A` +
    `*Mensaje para Dedicatoria:*%0A"${encodeURIComponent(giftNote || "Por favor enviar sin dedicatoria")}"%0A%0A` +
    `¿Me podrían compartir las opciones de pago (Transferencia SPEI / Tarjeta / OXXO)? ¡Gracias!`;

  return `https://wa.me/${phoneNumber}?text=${message}`;
}

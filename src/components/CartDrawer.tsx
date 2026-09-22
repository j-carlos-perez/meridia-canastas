"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShieldCheck, Gift, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { createShopifyCheckout, generateWhatsAppOrderLink } from "@/lib/shopify";

const FREE_SHIPPING_THRESHOLD = 2499;

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    giftNote,
    setGiftNote,
    deliveryWindow,
    setDeliveryWindow,
  } = useCart();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const missingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleCheckout = async () => {
    setIsLoading(true);
    setErrorMsg(null);

    const res = await createShopifyCheckout(items, giftNote, deliveryWindow);

    if (res.checkoutUrl) {
      // Direct redirect to Shopify's real checkout
      window.location.href = res.checkoutUrl;
      return;
    }

    if (res.error === "SHOPIFY_NOT_CONFIGURED") {
      // Graceful fallback to WhatsApp checkout when Shopify keys are not yet plugged into .env
      const waLink = generateWhatsAppOrderLink(items, subtotal, giftNote, deliveryWindow);
      window.open(waLink, "_blank");
      setIsLoading(false);
      return;
    }

    // Other error
    setErrorMsg(res.error || "Ocurrió un error al procesar el checkout");
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf8f5] border-l border-[#d8cdbf] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#e5dcce] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#7a2021]" />
              <h3 className="font-serif text-xl font-normal text-[#1f1d1a]">
                Tu Bolsa de Regalos
              </h3>
              <span className="text-xs text-[#736c61]">
                ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-[#555] hover:text-black rounded-full hover:bg-[#f0eae0] transition-colors"
              aria-label="Cerrar bolsa"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#f2ece2] px-6 py-3 border-b border-[#e5dcce] text-xs">
            {missingForFreeShipping === 0 ? (
              <p className="text-[#1c2e24] font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1c2e24]" />
                <span>¡Felicidades! Tu orden califica para <strong>Envío Gratis</strong></span>
              </p>
            ) : (
              <p className="text-[#4e483f]">
                Agrega <strong>${missingForFreeShipping.toLocaleString("es-MX")} MXN</strong> más para obtener <strong>Envío Gratis</strong>
              </p>
            )}
            <div className="w-full bg-[#dcd2c4] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#1c2e24] h-full transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <Gift className="w-12 h-12 text-[#c2b6a5] mx-auto stroke-[1.2]" />
                <p className="text-[#595349] font-serif text-lg">Tu bolsa está vacía</p>
                <p className="text-xs text-[#80776b] max-w-xs mx-auto">
                  Selecciona una de nuestras canastas o arcones de autor para comenzar tu experiencia navideña.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-2 inline-block text-xs uppercase tracking-widest px-6 py-3 bg-[#1c2e24] text-white hover:bg-[#284234]"
                >
                  Ver Colección
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-white border border-[#e8dfd3] relative"
                >
                  <div className="relative w-20 h-20 bg-[#f4efe6] shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="pr-6">
                      <h4 className="font-serif text-sm text-[#1f1d1a] leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs font-normal text-[#1c2e24] mt-1">
                        ${item.price.toLocaleString("es-MX")} MXN
                      </p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#d8cdbf] bg-[#faf8f5]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-[#666] hover:text-black"
                          aria-label="Disminuir"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-[#666] hover:text-black"
                          aria-label="Aumentar"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs text-[#736c61]">
                        = ${(item.price * item.quantity).toLocaleString("es-MX")} MXN
                      </span>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-3 right-3 text-[#a89d8f] hover:text-[#7a2021] transition-colors"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}

            {items.length > 0 && (
              <>
                {/* Gift Dedication Box */}
                <div className="p-4 bg-white border border-[#e8dfd3] space-y-2 mt-4">
                  <label className="text-xs font-semibold text-[#222] flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5 text-[#7a2021]" />
                    <span>Tarjeta de Dedicatoria (Gratis)</span>
                  </label>
                  <textarea
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    rows={2}
                    placeholder="Escribe el mensaje que imprimiremos en la tarjeta de regalo... (ej. ¡Feliz Navidad y próspero Año Nuevo! Con aprecio, Familia Flores)"
                    className="w-full text-xs p-2.5 bg-[#faf8f5] border border-[#d6cabc] focus:outline-none focus:border-[#1c2e24] text-[#333]"
                  />
                  <p className="text-[10px] text-[#7a7469]">
                    * No incluimos precios ni recibos físicos dentro de los paquetes de regalo.
                  </p>
                </div>

                {/* Delivery Date Range Selection */}
                <div className="p-4 bg-white border border-[#e8dfd3] space-y-2">
                  <label className="text-xs font-semibold text-[#222] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#1c2e24]" />
                    <span>Ventana de Entrega Deseada</span>
                  </label>
                  <select
                    value={deliveryWindow}
                    onChange={(e) => setDeliveryWindow(e.target.value)}
                    className="w-full text-xs p-2.5 bg-[#faf8f5] border border-[#d6cabc] focus:outline-none focus:border-[#1c2e24] text-[#333]"
                  >
                    <option value="10 al 15 de Diciembre">10 al 15 de Diciembre (Entrega Anticipada)</option>
                    <option value="16 al 21 de Diciembre">16 al 21 de Diciembre (Semana Nochebuena)</option>
                    <option value="Entrega Inmediata (48-72 hrs)">Entrega Inmediata (24 a 72 hrs hábiles)</option>
                    <option value="Finales de Diciembre (Fin de Año)">26 al 30 de Diciembre (Brindis Fin de Año)</option>
                  </select>
                </div>
              </>
            )}
          </div>

          {/* Footer / Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#e5dcce] space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-wider text-[#666]">Subtotal</span>
                <span className="font-serif text-2xl text-[#1c2e24]">
                  ${subtotal.toLocaleString("es-MX")}{" "}
                  <span className="text-xs font-sans text-[#80776b]">MXN</span>
                </span>
              </div>

              <p className="text-[11px] text-[#7a7366] text-center">
                Impuestos y cargos de envío calculados en la pantalla de pago.
              </p>

              {errorMsg && (
                <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs text-center">
                  {errorMsg}
                </div>
              )}

              {/* Checkout Button: Triggers Shopify Checkout or WhatsApp Flow */}
              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full py-4 bg-[#1c2e24] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#284234] transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Conectando con checkout...</span>
                ) : (
                  <>
                    <span>Proceder al Pago Seguro</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-[#6b6458] pt-1">
                <span>🔒 Encriptación SSL 256-bit</span>
                <span>•</span>
                <span>Pago con Tarjeta, OXXO y SPEI</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

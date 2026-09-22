"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check, ShieldCheck, Truck, Gift, Plus, Minus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#faf8f5] max-w-4xl w-full border border-[#dcd2c4] shadow-2xl overflow-hidden rounded-none flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#444] hover:text-[#000] bg-white/80 rounded-full hover:bg-white transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Big Image */}
        <div className="relative md:w-1/2 aspect-square md:aspect-auto min-h-[280px] bg-[#f2ede4]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-[#1c2e24] text-[#faf8f5] text-xs uppercase tracking-widest px-3 py-1 font-medium">
              {product.badge}
            </span>
          )}
        </div>

        {/* Right: Detailed Breakdown */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#7a2021] font-semibold">
                Detalle y Contenido Oficial
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1f1d1a] font-normal mt-1">
                {product.title}
              </h2>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl text-[#1c2e24]">
                ${product.price.toLocaleString("es-MX")}{" "}
                <span className="text-xs font-sans text-[#7a746a]">MXN</span>
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-[#999] line-through">
                  ${product.compareAtPrice.toLocaleString("es-MX")} MXN
                </span>
              )}
            </div>

            <p className="text-xs text-[#5c554a] leading-relaxed">
              {product.description}
            </p>

            {/* Included Items Checklist */}
            <div className="space-y-2 pt-2 border-t border-[#eae0d2]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#222]">
                Piezas incluidas en este regalo:
              </h4>
              <ul className="space-y-2 text-xs text-[#4a443b]">
                {product.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1c2e24] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packaging & Weight Specs */}
            <div className="pt-3 border-t border-[#eae0d2] text-[11px] text-[#6b6357] space-y-1">
              <p>
                <strong className="text-[#333]">Presentación:</strong> {product.packaging}
              </p>
              <p>
                <strong className="text-[#333]">Dimensiones y Peso:</strong> {product.dimensionsCm.width}x
                {product.dimensionsCm.height}x{product.dimensionsCm.depth} cm | ~{product.weightKg} kg
              </p>
            </div>

            {/* Micro guarantees */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-[#4d483f]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1c2e24]" />
                Garantía Antirrotura
              </span>
              <span className="flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-[#7a2021]" />
                Tarjeta personalizada gratis
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#eae0d2] flex items-center gap-4">
            <div className="flex items-center border border-[#cfc3b3] bg-white">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 text-[#444] hover:bg-[#f2ece2] transition-colors"
                aria-label="Disminuir cantidad"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-10 text-center text-xs font-medium text-[#222]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2 text-[#444] hover:bg-[#f2ece2] transition-colors"
                aria-label="Aumentar cantidad"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 py-3 px-6 bg-[#1c2e24] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#284234] transition-all flex items-center justify-center gap-2"
            >
              <span>Añadir al Carrito</span>
              <span>•</span>
              <span>${(product.price * quantity).toLocaleString("es-MX")} MXN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

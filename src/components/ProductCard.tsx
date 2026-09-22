"use client";

import React from "react";
import Image from "next/image";
import { Plus, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  onOpenQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onOpenQuickView }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <article className="group flex flex-col bg-white border border-[#e8dfd3] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#cfc2b2]">
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#f7f4ee]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#1c2e24] text-[#faf8f5] text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-sm shadow-sm">
            {product.badge}
          </div>
        )}

        {/* Quick View Hover Action */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
          <button
            onClick={() => onOpenQuickView(product)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white/95 text-[#222] text-xs uppercase tracking-wider font-medium hover:bg-white shadow-md transform -translate-y-2 group-hover:translate-y-0 transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Ver contenido</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-[#7a2021] font-semibold">
            {product.category === "sin-alcohol"
              ? "Bienestar & Sin Alcohol"
              : product.category === "lujo"
              ? "Edición Presidencial"
              : "Selección Navideña"}
          </p>

          <h3 className="font-serif text-lg sm:text-xl text-[#1f1d1a] font-normal leading-snug group-hover:text-[#7a2021] transition-colors">
            {product.title}
          </h3>

          <p className="text-xs text-[#6e675d] line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Pricing and Action */}
        <div className="pt-5 mt-4 border-t border-[#f0eae0] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-normal text-[#1c2e24]">
              ${product.price.toLocaleString("es-MX")} <span className="text-xs font-sans text-[#7a746a]">MXN</span>
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-[#999] line-through">
                ${product.compareAtPrice.toLocaleString("es-MX")} MXN
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f4efe6] text-[#222] hover:bg-[#1c2e24] hover:text-white transition-colors text-xs uppercase tracking-wider font-medium border border-[#dfd5c5]"
            aria-label={`Añadir ${product.title} al carrito`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Añadir</span>
          </button>
        </div>
      </div>
    </article>
  );
}

"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import TrustBadges from "@/components/TrustBadges";
import CorporateQuote from "@/components/CorporateQuote";
import { PRODUCTS, Product } from "@/data/products";
import { Sparkles, MessageCircle, SlidersHorizontal } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "gourmet") return p.category === "gourmet";
    if (selectedCategory === "tradicional") return p.category === "tradicional";
    if (selectedCategory === "lujo") return p.category === "lujo";
    if (selectedCategory === "sin-alcohol") return p.category === "sin-alcohol";
    return true;
  });

  return (
    <div className="relative">
      {/* Hero Banner */}
      <Hero />

      {/* Main Collection Section */}
      <section id="coleccion" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#e5dcce] pb-8 mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7a2021] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curaduría de Temporada</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1f1d1a] font-normal">
              Nuestra Colección de Regalos
            </h2>
          </div>

          {/* Category Filter Pills (Zara Home / Crate & Barrel Style) */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {[
              { id: "all", label: "Todas las piezas" },
              { id: "gourmet", label: "Gourmet & Vinos" },
              { id: "tradicional", label: "Tradicionales" },
              { id: "lujo", label: "Arcones de Lujo" },
              { id: "sin-alcohol", label: "Sin Alcohol" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 uppercase tracking-wider transition-all rounded-none text-[11px] font-medium ${
                  selectedCategory === cat.id
                    ? "bg-[#1c2e24] text-white shadow-sm"
                    : "bg-[#f2ede4] text-[#555] hover:bg-[#e6decf] hover:text-[#222]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenQuickView={(p) => setModalProduct(p)}
            />
          ))}
        </div>
      </section>

      {/* Editorial Quote / Storytelling Banner */}
      <section className="bg-[#ede5d8] py-16 px-4 border-y border-[#dfd5c5] text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7a2021] font-semibold">
            Empaque & Detalle Artesanal
          </p>
          <blockquote className="font-serif text-2xl sm:text-3xl text-[#222] font-light italic leading-relaxed">
            &ldquo;Cada canasta no es solo un regalo; es una mesa compartida, una memoria que perdura y el agradecimiento más sincero de fin de año.&rdquo;
          </blockquote>
          <p className="text-xs text-[#6e675d] tracking-widest uppercase">
            — Taller de Ensamble Nobilis • México
          </p>
        </div>
      </section>

      {/* Trust & Guarantee Badges */}
      <TrustBadges />

      {/* B2B / Corporate Quotation Section */}
      <CorporateQuote />

      {/* Quick View Product Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/525500000000?text=Hola,%20tengo%20una%20duda%20sobre%20las%20canastas%20navide%C3%B1as"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25d366] text-white rounded-full shadow-2xl hover:bg-[#20ba59] transition-all hover:scale-105"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-semibold tracking-wide hidden sm:inline">
            ¿Dudas? Escríbenos
          </span>
        </a>
      </aside>
    </div>
  );
}

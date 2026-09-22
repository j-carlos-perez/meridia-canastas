"use client";

import React from "react";
import { ShoppingBag, ShieldCheck, Phone } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems, openCart } = useCart();

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#1c2e24] text-[#ece4d8] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Garantía Antirrotura en Envíos a todo México</span>
        </span>
        <span className="hidden md:inline text-[#d4af37]">•</span>
        <span className="hidden md:inline">Envío Gratis en compras mayores a $2,499 MXN</span>
        <span className="hidden lg:inline text-[#d4af37]">•</span>
        <span className="hidden lg:inline">Facturación Inmediata CFDI 4.0</span>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8dfd3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex flex-col">
            <a href="#" className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-light text-[#222]">
                MERIDIA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#7a2021] font-semibold">
                Atelier
              </span>
            </a>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#6e685f]">
              Canastas & Arcones Navideños
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest text-[#3d3a34]">
            <a href="#coleccion" className="hover:text-[#7a2021] transition-colors py-1">
              Colección
            </a>
            <a href="#gourmet" className="hover:text-[#7a2021] transition-colors py-1">
              Gourmet & Vinos
            </a>
            <a href="#corporativo" className="hover:text-[#7a2021] transition-colors py-1">
              Corporativo (10+ canastas)
            </a>
            <a href="#garantia" className="hover:text-[#7a2021] transition-colors py-1">
              Garantía & Envíos
            </a>
          </nav>

          {/* Actions: WhatsApp & Cart */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/525500000000?text=Hola,%20deseo%20informaci%C3%B3n%20sobre%20las%20canastas%20navide%C3%B1as"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs tracking-wider uppercase border border-[#d6cbbe] px-3.5 py-2 rounded-full text-[#38332c] hover:bg-[#efe7dc] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1c2e24]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={openCart}
              className="relative p-2.5 text-[#222] hover:text-[#7a2021] transition-colors rounded-full hover:bg-[#f2ece2]"
              aria-label="Carrito de compras"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#7a2021] text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center animate-in fade-in zoom-in">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

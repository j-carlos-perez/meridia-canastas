import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Gift } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#f4efe6] overflow-hidden border-b border-[#e5dcce]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8dfd2] text-[#4a3f35] text-xs font-medium tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#a87932]" />
              <span>Colección Decembrina 2026 • Edición Limitada</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1f1d1a] font-normal leading-[1.15] tracking-tight">
              El arte de agradecer <br />
              <span className="italic font-light text-[#7a2021]">en cada detalle.</span>
            </h1>

            <p className="text-[#595349] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Arcones y canastas navideñas de autor. Vinos de reserva, charcutería ibérica, miel orgánica y dulces
              artesanales mexicanos presentados en empaques sostenibles de madera y mimbre.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#coleccion"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1c2e24] text-[#faf8f5] text-xs tracking-[0.2em] uppercase font-medium rounded-none hover:bg-[#284133] transition-all shadow-sm"
              >
                <span>Explorar Colección</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#corporativo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[#3d3830] text-[#222] text-xs tracking-[0.2em] uppercase font-medium rounded-none hover:bg-[#eae2d5] transition-all"
              >
                <span>Cotizador Empresas (10+)</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-8 border-t border-[#dfd5c5] grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="font-serif text-xl sm:text-2xl text-[#1f1d1a] font-normal">100%</p>
                <p className="text-[11px] text-[#6b6459] uppercase tracking-wider">Antirrotura Seguro</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl text-[#1f1d1a] font-normal">Gratis</p>
                <p className="text-[11px] text-[#6b6459] uppercase tracking-wider">Tarjeta Dedicatoria</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl text-[#1f1d1a] font-normal">CFDI 4.0</p>
                <p className="text-[11px] text-[#6b6459] uppercase tracking-wider">Facturación SAT</p>
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60">
                <Image
                  src="/images/canasta-3-gourmet.jpg"
                  alt="Arcón Gourmet Reserva Ibérica"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#e8dfd3] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1c2e24] flex items-center justify-center text-white">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1f1d1a]">Arcón Insignia 2026</p>
                  <p className="text-[11px] text-[#6b6459]">Vino Crianza & Jamón Serrano</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

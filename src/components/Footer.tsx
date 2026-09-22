import React from "react";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#191816] text-[#b8b2a8] text-xs border-t border-[#33302b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.2em] font-light text-[#faf8f5]">
                MERIDIA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#d4af37]">
                Atelier de Canastas & Arcones Navideños
              </span>
            </div>
            <p className="text-xs text-[#8f897e] max-w-sm font-light leading-relaxed">
              Curaduría artesanal para celebrar la temporada decembrina. Vinos selectos, charcutería fina y dulces
              tradicionales con entrega segura en toda la República Mexicana.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#faf8f5]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Garantía de reposición inmediata ante cualquier avería.</span>
            </div>
          </div>

          {/* Links: Colecciones */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-[#faf8f5] uppercase tracking-wider">
              Colección
            </h4>
            <ul className="space-y-2 text-[#999287]">
              <li>
                <a href="#coleccion" className="hover:text-white transition-colors">
                  Canastas Tradicionales
                </a>
              </li>
              <li>
                <a href="#coleccion" className="hover:text-white transition-colors">
                  Arcones Gourmet & Vinos
                </a>
              </li>
              <li>
                <a href="#coleccion" className="hover:text-white transition-colors">
                  Ediciones de Lujo
                </a>
              </li>
              <li>
                <a href="#coleccion" className="hover:text-white transition-colors">
                  Opciones Sin Alcohol
                </a>
              </li>
              <li>
                <a href="#corporativo" className="hover:text-[#d4af37] transition-colors">
                  Pedidos Corporativos B2B
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto México */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-[#faf8f5] uppercase tracking-wider">
              Atención a Clientes
            </h4>
            <ul className="space-y-2 text-[#999287]">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>WhatsApp: +52 (55) 0000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>pedidos@nobiliscanastas.mx</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Taller de Ensamble y Distribución: Ciudad de México, México.</span>
              </li>
            </ul>
          </div>

          {/* Métodos de Pago México */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-[#faf8f5] uppercase tracking-wider">
              Pagos Seguros
            </h4>
            <p className="text-[11px] text-[#807a70] leading-relaxed">
              Aceptamos los principales métodos de pago en México:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2 py-1 bg-[#282622] rounded text-[10px] text-white">Mercado Pago</span>
              <span className="px-2 py-1 bg-[#282622] rounded text-[10px] text-white">OXXO Pay</span>
              <span className="px-2 py-1 bg-[#282622] rounded text-[10px] text-white">Transferencia SPEI</span>
              <span className="px-2 py-1 bg-[#282622] rounded text-[10px] text-white">Visa / Mastercard</span>
              <span className="px-2 py-1 bg-[#282622] rounded text-[10px] text-white">American Express</span>
              <span className="px-2 py-1 bg-[#282622] rounded text-[10px] text-white">Meses Sin Intereses</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#262420] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6b665c]">
          <p>© {new Date().getFullYear()} Nobilis Atelier de Canastas Navideñas. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos del Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Envío y Roturas</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

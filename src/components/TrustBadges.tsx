import React from "react";
import { ShieldCheck, Truck, Receipt, Sparkles } from "lucide-react";

export default function TrustBadges() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "Garantía Antirrotura 100%",
      desc: "Embalaje con cámaras inflables y protección térmica. Si alguna botella o frasco llega con daño, la reponemos de inmediato.",
    },
    {
      icon: Truck,
      title: "Envíos Puntuales Decembrinos",
      desc: "Monitoreo en tiempo real y opciones de entrega programada en fechas clave antes de Nochebuena y Fin de Año.",
    },
    {
      icon: Receipt,
      title: "Facturación CFDI 4.0",
      desc: "Generamos tu factura fiscal de forma automática tras completar tu compra con todos los requisitos del SAT.",
    },
    {
      icon: Sparkles,
      title: "Selección Artesanal de Autor",
      desc: "Vinos certificados, miel y café orgánico de pequeños productores y charcutería madurada con estándares internacionales.",
    },
  ];

  return (
    <section id="garantia" className="py-16 bg-[#f4efe6] border-y border-[#dfd6c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#7a2021] font-semibold">
            Confianza y Seguridad
          </p>
          <h2 className="font-serif text-3xl text-[#1f1d1a] font-normal mt-1">
            Por qué regalar con Nobilis
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 border border-[#e5dcce] shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-[#1c2e24] text-[#faf8f5] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#1f1d1a] font-normal">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6e685f] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

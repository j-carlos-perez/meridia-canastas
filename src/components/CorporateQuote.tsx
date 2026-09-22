"use client";

import React, { useState } from "react";
import { Briefcase, Send, CheckCircle2, ShieldCheck, FileSpreadsheet } from "lucide-react";

export default function CorporateQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "25",
    budget: "$1,000 - $2,000 MXN",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to API route or WhatsApp
    const message =
      `💼 *SOLICITUD DE COTIZACIÓN CORPORATIVA NOBILIS*%0A%0A` +
      `*Empresa:* ${encodeURIComponent(formData.company)}%0A` +
      `*Contacto:* ${encodeURIComponent(formData.name)}%0A` +
      `*Teléfono:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Volumen estimado:* ${encodeURIComponent(formData.quantity)} canastas%0A` +
      `*Rango de presupuesto:* ${encodeURIComponent(formData.budget)}%0A` +
      `*Comentarios:* ${encodeURIComponent(formData.notes || "Ninguno")}`;

    window.open(`https://wa.me/525500000000?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="corporativo" className="py-20 bg-[#1c2e24] text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#294234] rounded-full text-xs text-[#d4af37] uppercase tracking-wider font-medium">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Atención Especial a Empresas & B2B</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Regalos corporativos que <br />
              <span className="italic text-[#d4af37]">fortalecen alianzas.</span>
            </h2>

            <p className="text-[#c7d1ca] text-sm sm:text-base font-light leading-relaxed">
              Diseñamos arcones a la medida de tu presupuesto para colaboradores, directivos y clientes VIP.
              Descuentos por volumen a partir de 10 piezas, personalización de tarjetas con el logotipo de tu marca y
              facturación inmediata con CFDI 4.0.
            </p>

            <div className="space-y-3 pt-4 border-t border-[#294234] text-xs text-[#dce4df]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Facturación electrónica CFDI 4.0 al instante (Gastos en general / Deducible).</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Inserción de tu logotipo y mensaje institucional en cada tarjeta o lazo.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Envíos individuales a domicilios de tus empleados en toda la República.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Quote Form */}
          <div className="lg:col-span-6 bg-[#faf8f5] text-[#1f1d1a] p-8 sm:p-10 shadow-2xl border border-[#e2d8ca]">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-[#1c2e24] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1c2e24]">¡Solicitud Recibida!</h3>
                <p className="text-xs text-[#6e685f] max-w-sm mx-auto">
                  Un asesor ejecutivo se pondrá en contacto contigo en menos de 2 horas hábiles con la propuesta y catálogo
                  PDF personalizado.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-widest text-[#7a2021] font-semibold underline mt-4"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-2xl text-[#1c2e24]">Solicitar Cotización por Volumen</h3>
                <p className="text-xs text-[#666]">
                  Completa los datos y te enviaremos una propuesta personalizada de inmediato vía WhatsApp y correo.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444] mb-1">
                      Nombre de contacto
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Lic. Roberto Garza"
                      className="w-full text-xs p-2.5 bg-white border border-[#d6cabc] focus:outline-none focus:border-[#1c2e24]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444] mb-1">
                      Empresa
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Grupo Financiero Norte"
                      className="w-full text-xs p-2.5 bg-white border border-[#d6cabc] focus:outline-none focus:border-[#1c2e24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444] mb-1">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej. 55 1234 5678"
                      className="w-full text-xs p-2.5 bg-white border border-[#d6cabc] focus:outline-none focus:border-[#1c2e24]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444] mb-1">
                      Correo Corporativo
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@empresa.com"
                      className="w-full text-xs p-2.5 bg-white border border-[#d6cabc] focus:outline-none focus:border-[#1c2e24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444] mb-1">
                      Canastas estimadas
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-[#d6cabc] focus:outline-none focus:border-[#1c2e24]"
                    >
                      <option value="10 a 25 piezas">10 a 25 piezas</option>
                      <option value="26 a 50 piezas">26 a 50 piezas</option>
                      <option value="51 a 100 piezas">51 a 100 piezas</option>
                      <option value="100+ piezas">Más de 100 piezas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444] mb-1">
                      Presupuesto aprox. / pza
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-[#d6cabc] focus:outline-none focus:border-[#1c2e24]"
                    >
                      <option value="$700 - $1,200 MXN">$700 - $1,200 MXN</option>
                      <option value="$1,200 - $2,000 MXN">$1,200 - $2,000 MXN</option>
                      <option value="$2,000 - $3,500 MXN">$2,000 - $3,500 MXN</option>
                      <option value="Más de $3,500 MXN">Más de $3,500 MXN (Lujo)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444] mb-1">
                    Notas adicionales o requisitos especiales
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Ej. Requerimos entrega en Monterrey y Guadalajara con fecha límite 18 de diciembre."
                    className="w-full text-xs p-2.5 bg-white border border-[#d6cabc] focus:outline-none focus:border-[#1c2e24]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1c2e24] text-[#faf8f5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#273f32] transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar y Cotizar por WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

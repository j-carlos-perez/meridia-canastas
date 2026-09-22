import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const sans = Montserrat({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MERIDIA | Canastas y Arcones Navideños de Autor • México",
  description:
    "Venta de canastas y arcones navideños gourmet en México. Vinos de reserva, jamón serrano y dulces artesanales. Envíos seguros con garantía antirrotura y facturación CFDI 4.0.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#faf8f5] text-[#1f1d1a]">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

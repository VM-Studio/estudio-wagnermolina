import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import { Cormorant_Garamond, Raleway } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-raleway',
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sucesiones y Declaratorias de Herederos en Córdoba | AUGUSTO Filí & Asociados",
  description: "Estudio jurídico con más de 20 años de experiencia en sucesiones y declaratorias de herederos. Tramitamos más de 50 casos por año. 100% online.",
  keywords: "sucesiones córdoba, declaratoria de herederos, abogado sucesiones, herencias córdoba, tracto abreviado",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${raleway.variable} scroll-smooth`}>
      <body
        className={`${montserrat.variable} ${robotoSlab.variable} antialiased font-sans text-gray-900 bg-white`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
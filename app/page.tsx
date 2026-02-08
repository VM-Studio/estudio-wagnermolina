import type { Metadata } from 'next';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './globals.css';
import Navbar from './components/next-web/Nav';
import Hero from './components/next-web/Her';
import Especialidades from './components/next-web/Especialidades';
import Sobre from './components/next-web/Sobre';
import Caracteriza from './components/next-web/Caracteriza';
import Formacion from './components/next-web/Formacion';
import Prensa from './components/next-web/Prensa';
import Videos from './components/next-web/Videos';
import Resenias from './components/next-web/Reseñas';
import Instagram from './components/next-web/Instagram';
import FAQs from './components/next-web/Faqs';
import Contacto from './components/next-web/Contacto';
import Ubicacion from './components/next-web/Ubicacion';

export const metadata: Metadata = {
  title: 'Filí y Asociados – Abogados en Córdoba | Especialistas en Derecho',
  description: 'Estudio jurídico Filí y Asociados en Córdoba. Más de 20 años de experiencia en sucesiones, familia, indemnizaciones, accidentes de tránsito y derecho laboral.',
  keywords: 'abogados cordoba, sucesiones, divorcios, accidentes de transito, derecho laboral, estudio juridico cordoba, augusto fili',
  authors: [{ name: 'Filí y Asociados' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://filiyasociados.com.ar/',
    title: 'Filí y Asociados – Abogados | Córdoba',
    description: 'Asesoramiento legal integral en Córdoba. Especialistas en casos de alta complejidad, sucesiones y derecho laboral.',
    images: [{ url: '/og.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Filí y Asociados – Abogados',
    description: 'Excelencia legal y atención personalizada en Córdoba.',
    images: ['/og.png'],
  },
};

export default function FiliyAsociadosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Filí y Asociados – Abogados',
    image: 'https://filiyasociados.com.ar/favicon.png',
    '@id': '',
    url: 'https://filiyasociados.com.ar/',
    telephone: '+5493515186325',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Blvr. Chacabuco 187, 1b',
      addressLocality: 'Córdoba',
      addressRegion: 'Córdoba',
      postalCode: 'X5000',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -31.4167,
      longitude: -64.1833,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Especialidades />
        <Sobre />
        <Caracteriza />
        <Formacion />
        <Prensa />
        <Videos />
        <Resenias />
        <Instagram />
        <FAQs />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
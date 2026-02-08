'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function Prensa() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const noticias = [
    {
      source: 'Perfil · Córdoba',
      title: 'Causa Márquez y Asociados: medida cautelar para rescatar la empresa y proteger a damnificados',
      link: 'https://www.perfil.com/noticias/cordoba/causa-marquez-y-asociados-presentan-medida-cautelar-para-rescatar-la-empresa-phtml',
    },
    {
      source: 'Perfil · Córdoba',
      title: 'Condenan a un municipio de Córdoba a indemnizar a una madre tras la muerte de su bebé',
      link: 'https://www.perfil.com/noticias/cordoba/condenan-a-un-municipio-de-cordoba-a-indemnizar-a-una-madre-tras-la-muerte-de-su-bebe.phtml',
    },
    {
      source: 'Comercio y Justicia',
      title: 'Medida anticautelar: una herramienta que dará que hablar',
      link: 'https://comercioyjusticia.info/justicia/medida-anticautelar-una-herramienta-que-dara-que-hablar/',
    },
    {
      source: 'El Diario CBA',
      title: 'Murió el joven accidentado hace 19 días en el Corralón municipal de Ausonia',
      link: 'https://www.eldiariocba.com.ar/policiales/2023/3/23/murio-el-joven-accidentado-hace-19-dias-en-el-corralon-municipal-de-ausonia-93288.html',
    },
  ];

  const moveCarousel = (direction: number) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = noticias.length - 1;
    if (newIndex >= noticias.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="prensa" id="prensa">
      <div className="prensa-bg"></div>
      <div className="prensa-bg-overlay"></div>
      <div className="prensa-inner">
        <div className="container">
          <div className="prensa-header">
            <div className="section-label">Casos / Artículos destacados</div>
            <h2 className="section-title">En la <em>prensa</em></h2>
          </div>
          <div className="prensa-carousel-wrap">
            <div 
              className="prensa-carousel" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {noticias.map((noticia, index) => (
                <div key={index} className="prensa-card">
                  <div className="prensa-card-inner">
                    <div className="prensa-card-source">{noticia.source}</div>
                    <h3>{noticia.title}</h3>
                    <a 
                      href={noticia.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="prensa-card-link"
                    >
                      Leer artículo <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="prensa-controls">
            <button className="prensa-btn" onClick={() => moveCarousel(-1)}>
              <ChevronLeft size={14} />
            </button>
            <div className="prensa-dots">
              {noticias.map((_, index) => (
                <div 
                  key={index} 
                  className={`prensa-dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button className="prensa-btn" onClick={() => moveCarousel(1)}>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
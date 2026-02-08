/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Resenias() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const resenias = [
    {
      quote: 'Excelente atención y profesionalismo. El Dr. Filí resolvió mi caso de sucesión de manera impecable, siempre manteniendo una comunicación clara y efectiva.',
      author: 'María González',
      role: 'Cliente - Sucesiones',
      initials: 'MG',
    },
    {
      quote: 'Después de un accidente de tránsito complejo, el estudio logró una indemnización que superó mis expectativas. Muy agradecido por su dedicación.',
      author: 'Carlos Rodríguez',
      role: 'Cliente - Accidentes',
      initials: 'CR',
    },
    {
      quote: 'Profesionales de primera. Me acompañaron en todo el proceso laboral y obtuvimos un resultado muy favorable. Los recomiendo ampliamente.',
      author: 'Laura Martínez',
      role: 'Cliente - Laboral',
      initials: 'LM',
    },
    {
      quote: 'La experiencia y el conocimiento del Dr. Filí en casos complejos es notable. Resolvió mi situación familiar con gran sensibilidad y eficacia.',
      author: 'Roberto Sánchez',
      role: 'Cliente - Familia',
      initials: 'RS',
    },
  ];

  const moveCarousel = (direction: number) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = resenias.length - 1;
    if (newIndex >= resenias.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="resenias" id="resenias">
      <div className="resenias-bg"></div>
      <div className="container">
        <div className="resenias-header">
          <div className="section-label">Testimonios</div>
          <h2 className="section-title">Lo que dicen nuestros <em>clientes</em></h2>
        </div>
        <div className="resenias-carousel-wrap">
          <div 
            className="resenias-carousel" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {resenias.map((resenia, index) => (
              <div key={index} className="resenia-card">
                <div className="resenia-card-inner">
                  <div className="resenia-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
                    ))}
                  </div>
                  <p className="resenia-quote">"{resenia.quote}"</p>
                  <div className="resenia-author">
                    <div className="resenia-avatar">{resenia.initials}</div>
                    <div className="resenia-info">
                      <h4>{resenia.author}</h4>
                      <span>{resenia.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="resenias-controls">
          <button className="resenias-btn" onClick={() => moveCarousel(-1)}>
            <ChevronLeft size={14} />
          </button>
          <div className="resenias-dots">
            {resenias.map((_, index) => (
              <div 
                key={index} 
                className={`resenias-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button className="resenias-btn" onClick={() => moveCarousel(1)}>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
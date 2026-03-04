'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto cuesta la primera consulta?',
      answer: 'La primera consulta es sin cargo. Evaluamos su caso y le explicamos las opciones disponibles sin compromiso alguno.',
    },
    {
      question: '¿Cómo puedo comunicarme con el estudio?',
      answer: 'Puede escribirnos por WhatsApp al (011) 4372-8257 o visitarnos en persona en Av. de Mayo 777, Piso 8, Buenos Aires. También puede enviarnos un email a contacto@estudiomolinawagner.com.',
    },
    {
      question: '¿Trabajan con casos de alta complejidad?',
      answer: 'Absolutamente. Molina Wagner & Asociados cuenta con más de dos décadas de trayectoria en litigios de alto perfil. Nuestro equipo de abogados especializados garantiza cobertura integral en Derecho Laboral, Civil, Previsional, Inmobiliario y Reclamos Salariales.',
    },
    {
      question: '¿Cuánto tiempo demora un proceso legal?',
      answer: 'El plazo depende del tipo de caso y de la jurisdicción. En la primera consulta evaluamos la situación particular y le explicamos de manera clara cada etapa del proceso y los plazos estimados.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs" id="faqs" style={{ backgroundColor: '#141414' }}>
      <div className="container">
        <div className="faqs-header">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Preguntas Frecuentes</div>
          <h2 className="section-title" style={{ color: '#fff' }}>Resolvemos sus <em>dudas</em></h2>
        </div>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
                style={{ color: '#fff' }}
              >
                <h4 style={{ color: '#fff' }}>{faq.question}</h4>
                <div className="faq-icon" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                  <Plus size={14} />
                </div>
              </button>
              <div className="faq-answer">
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
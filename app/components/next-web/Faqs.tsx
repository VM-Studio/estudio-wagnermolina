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
      answer: 'Puede escribirnos por WhatsApp al +54 9 3515 186325 o visitarnos en persona en Blvr. Chacabuco 187, 1b, Córdoba. También nos encontramos en Instagram como @abogado.fili.',
    },
    {
      question: '¿Trabajan con casos de alta complejidad?',
      answer: 'Absolutamente. El Dr. Augusto Filí tiene una trayectoria probada en litigios de alto perfil, estableciendo precedentes legales significativos. Además cuenta con una red de especialistas asociados que garantiza cobertura integral en cualquier rama del derecho.',
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
    <section className="faqs" id="faqs">
      <div className="container">
        <div className="faqs-header">
          <div className="section-label">Preguntas Frecuentes</div>
          <h2 className="section-title">Resolvemos sus <em>dudas</em></h2>
        </div>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
              >
                <h4>{faq.question}</h4>
                <div className="faq-icon">
                  <Plus size={14} />
                </div>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';

export default function FAQDanos() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto cuesta la consulta inicial?',
      answer: 'La primera consulta es gratuita. Evaluamos tu caso, te decimos si tenés derecho a reclamar y te explicamos cómo funciona todo sin compromiso.'
    },
    {
      question: '¿Qué significa "trabajar a resultados"?',
      answer: 'Significa que cobramos cuando vos cobrás. Solo pedimos adelantos mínimos para gastos administrativos. Nuestros honorarios principales se descuentan de la indemnización que obtengas.'
    },
    {
      question: '¿Cuánto puedo obtener de indemnización?',
      answer: 'Depende del caso, pero en promedio obtenemos montos que duplican o triplican las ofertas iniciales de aseguradoras o responsables. Con nuestros peritos calculamos todos los rubros: daño físico, psicológico, lucro cesante, gastos médicos y más.'
    },
    {
      question: '¿Cuánto tiempo demora el proceso?',
      answer: 'El 95% de nuestros casos se cierran en etapa de negociación y mediación, lo cual es mucho más rápido que un juicio. Los tiempos varían según la complejidad, pero siempre buscamos la resolución más rápida posible.'
    },
    {
      question: '¿Qué pasa si mi caso tiene que ir a juicio?',
      answer: 'Solo el 5% de nuestros casos llegan a juicio. Si es necesario, te acompañamos hasta el final. Tenemos más de 20 años de experiencia litigando casos de daños graves.'
    },
    {
      question: '¿Qué documentación necesito para empezar?',
      answer: 'Depende del tipo de daño, pero generalmente: documentos de identidad, informes médicos, facturas de gastos, fotos o pruebas del incidente. En la primera consulta te decimos exactamente qué necesitamos.'
    },
    {
      question: '¿Atienden casos de otras provincias?',
      answer: 'Sí. Si tu caso debe tramitarse en Córdoba o podemos asistirte desde acá, trabajamos sin importar dónde vivas. Gran parte del proceso es online.'
    },
    {
      question: '¿Qué tipos de daños atienden?',
      answer: 'Negligencia médica, productos defectuosos, accidentes por culpa de terceros, estafas bancarias, cláusulas abusivas, defectos en autopistas, servicios defectuosos que causaron daños graves, entre otros.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <span className="text-[10px] sm:text-xs font-bold text-blue-800 uppercase tracking-[0.2em] block mb-3">
            Preguntas Frecuentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            ¿Tenés dudas?
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden border transition-all duration-300 ${
                openIndex === index
                  ? 'border-blue-300 shadow-md'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  {faq.question}
                </span>
                <span className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-blue-800 text-white rotate-0'
                    : 'bg-slate-100 text-gray-500'
                }`}>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
             
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-5 pb-4">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
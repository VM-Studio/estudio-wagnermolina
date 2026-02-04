'use client';

import { 
  Scale, 
  TrendingUp, 
  Clock, 
  Shield, 
  Calculator, 
  Handshake 
} from 'lucide-react';

export default function BeneficiosDanos() {
  const beneficios = [
    {
      icon: TrendingUp,
      title: "Duplicamos o triplicamos tu indemnización",
      description: "No aceptes la primera oferta. Sabemos negociar para que obtengas lo que realmente te corresponde por los daños sufridos."
    },
    {
      icon: Clock,
      title: "95% de casos sin ir a juicio",
      description: "Cerramos la mayoría de los casos en etapa de negociación y mediación. Más rápido, menos estrés, mejores resultados."
    },
    {
      icon: Calculator,
      title: "Peritos propios para calcular tus daños",
      description: "Calculamos correctamente todos los rubros: daño físico, psicológico, lucro cesante, gastos médicos y más. Nada queda afuera."
    },
    {
      icon: Handshake,
      title: "Trabajamos a resultados",
      description: "Adelantos mínimos. Cobramos cuando vos cobrás. Así de simple. Tu caso es nuestro compromiso."
    },
    {
      icon: Shield,
      title: "+20 años defendiendo víctimas",
      description: "Experiencia real en casos complejos: mala praxis, productos defectuosos, accidentes graves, negligencia empresarial."
    },
    {
      icon: Scale,
      title: "Hacemos respetar tus derechos",
      description: "Que te traten de igual a igual frente a empresas, aseguradoras y responsables. Respaldo de un estudio con solvencia."
    }
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <span className="text-[10px] sm:text-xs font-bold text-blue-800 uppercase tracking-[0.2em] block mb-3">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Lo que hacemos diferente
          </h2>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {beneficios.map((beneficio, index) => {
            const IconComponent = beneficio.icon;
            return (
              <div 
                key={index}
                className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
              >
                {/* Icono */}
                <div className="shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-blue-50 rounded-lg group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-300">
                    <IconComponent 
                      size={32} 
                      className="text-blue-800" 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 leading-tight">
                    {beneficio.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {beneficio.description}
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
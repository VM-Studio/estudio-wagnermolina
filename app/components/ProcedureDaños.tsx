'use client';

export default function ProcedureDanos() {
  const steps = [
    {
      number: "1",
      title: "Contanos qué te pasó",
      description: "Por WhatsApp o llamada. Evaluamos tu caso sin compromiso y te decimos si tenés derecho a reclamar."
    },
    {
      number: "2",
      title: "Calculamos tus daños",
      description: "Con nuestros peritos determinamos el monto real de tu indemnización. Todos los rubros, nada queda afuera."
    },
    {
      number: "3",
      title: "Negociamos por vos",
      description: "Enfrentamos a los responsables, aseguradoras o empresas. El 95% de los casos los cerramos sin ir a juicio."
    },
    {
      number: "4",
      title: "Cobrás tu indemnización",
      description: "Obtenemos montos que duplican o triplican las ofertas iniciales. Vos cobrás, nosotros cobramos."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <span className="text-[10px] sm:text-xs font-bold text-blue-800 uppercase tracking-[0.2em] block mb-3">
            Proceso Simple
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            ¿Cómo funciona?
          </h2>
        </div>

        {/* Timeline horizontal */}
        <div className="relative">
          {/* Línea conectora - solo desktop */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-5">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {/* Número */}
                <div className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 z-10 mb-4">
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                </div>

                {/* Contenido */}
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';
import Image from 'next/image';
import Tribunales from '@/public/tribunales.png';

export default function CasesDanos() {
  const stats = [
    {
      value: "95%",
      label: "cierre pre-judicial"
    },
    {
      value: "2-3x",
      label: "más indemnización"
    },
    {
      value: "+20",
      label: "años de experiencia"
    }
  ];

  const tiposDanos = [
    "Negligencia médica y mala praxis",
    "Productos defectuosos (electrónicos, vehículos, medicamentos)",
    "Accidentes por negligencia de terceros",
    "Estafas bancarias y cláusulas abusivas",
    "Financiaciones abusivas de constructoras",
    "Defectos en autopistas concesionadas",
    "Servicios defectuosos con daños graves",
    "Adulteración de historia clínica"
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-12 bg-slate-900">
      <div className="max-w-6xl mx-auto">
       
        {/* Grid: Imagen + Contenido */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-14 md:mb-16">
         
          {/* Imagen del estudio */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={Tribunales}
                alt="Estudio Augusto Filí y Asociados"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <span className="text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-[0.2em] block mb-3">
              Sobre el Estudio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 sm:mb-6">
              Especialistas en<br className="hidden sm:block" /> obtener indemnizaciones
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                El Dr. Augusto Filí y su equipo nos especializamos en <strong className="text-white">defender víctimas de daños graves</strong>. Cuando sufrís por culpa de otros, merecés una indemnización justa, no la primera oferta que te tiren.
              </p>
             
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                <strong className="text-white">Trabajamos a resultados</strong>. Adelantos mínimos porque entendemos que después de sufrir un daño, lo último que necesitás es más gastos.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Nuestro equipo incluye peritos para calcular <strong className="text-white">todos los rubros de tu indemnización</strong>: daño físico, psicológico, lucro cesante, gastos médicos, daño moral y más.
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5493515186325?text=Hola,%20sufrí%20un%20daño%20grave%20y%20quiero%20consultar%20mi%20caso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 rounded-sm"
              >
                Consultar mi caso
              </a>
             
              <Link
                href="#faq"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 border border-slate-600 text-slate-300 text-sm font-bold hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all duration-300 rounded-sm"
              >
                Ver preguntas frecuentes
              </Link>
            </div>
          </div>
        </div>

        {/* Tipos de daños que atendemos */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-6">
            Casos que atendemos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {tiposDanos.map((tipo, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 py-3 px-4 rounded-lg border border-slate-700/50 text-center"
              >
                <span className="text-xs sm:text-sm text-slate-300">
                  {tipo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-slate-800/50 py-5 sm:py-6 px-4 rounded-lg border border-slate-700/50">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
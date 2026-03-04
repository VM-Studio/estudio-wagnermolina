import { Users, Scale, Briefcase, Home, BadgeDollarSign } from 'lucide-react';

export default function Especialidades() {
  const especialidades = [
    {
      icon: Briefcase,
      title: 'Derecho Laboral',
      description: 'Representación legal integral para trabajadores y empleadores en todas las instancias.',
      items: [
        { bold: 'Parte Actora:', text: 'Defensa de los derechos del trabajador.' },
        { bold: 'Parte Demandada:', text: 'Asesoramiento a empresas y empleadores.' },
        { bold: 'Jurisdicción:', text: 'Caba y Prov. Bs. As.' },
      ],
    },
    {
      icon: Scale,
      title: 'Derecho Civil',
      description: 'Soluciones legales efectivas para conflictos civiles y patrimoniales.',
      items: [
        { bold: 'Accidentes de tránsito:', text: 'Reclamos por daños y perjuicios.' },
        { bold: 'Contratos:', text: 'Redacción, revisión y ejecución.' },
        { bold: 'Sucesiones:', text: 'Gestión integral de herencias.' },
        { bold: 'Ejec. Alquileres:', text: 'Cobro de deudas por alquileres.' },
        { bold: 'Desalojos:', text: 'Procedimientos de desalojo.' },
      ],
    },
    {
      icon: Users,
      title: 'Derecho Previsional',
      description: 'Asesoramiento especializado en jubilaciones y pensiones.',
      items: [
        { bold: 'Jubilaciones:', text: 'Trámites y reclamos jubilatorios.' },
        { bold: 'Pensión por fallecimiento:', text: 'Gestión de pensiones derivadas.' },
        { bold: 'Retiro por Invalidez:', text: 'Asesoramiento en retiros por incapacidad.' },
      ],
    },
    {
      icon: Home,
      title: 'Asesoramiento Inmobiliario',
      description: 'Servicios legales completos para operaciones inmobiliarias.',
      items: [
        { bold: 'Compra - Venta:', text: 'Operaciones de compraventa de inmuebles.' },
        { bold: 'Alquileres:', text: 'Contratos de locación.' },
        { bold: 'Propiedades y Locales:', text: 'Asesoramiento integral.' },
        { bold: 'Terrenos - Cocheras:', text: 'Operaciones especializadas.' },
        { bold: 'Tasaciones:', text: 'Valuación de propiedades.' },
        { bold: 'Consorcios:', text: 'Asesoramiento para consorcios.' },
      ],
    },
    {
      icon: BadgeDollarSign,
      title: 'Reclamos Salariales',
      description: 'Defensa de derechos salariales para personal de fuerzas de seguridad.',
      items: [
        { bold: 'Diferencias salariales:', text: 'Reclamos por diferencia salarial de personal activo, retirado y pensionado.' },
        { bold: 'Fuerzas:', text: 'FFAA - GN - PNA - SPF.' },
      ],
    },
  ];

  return (
    <section className="especialidades" id="especialidades">
      <div className="container">
        <div className="especialidades-header">
          <div className="section-label">Servicios</div>
          <h2 className="section-title">Áreas de <em>Práctica</em></h2>
          <p className="especialidades-sub">Asesoramiento legal integral en diversas áreas del derecho</p>
        </div>
        <div className="especialidades-grid">
          {especialidades.map((esp, index) => {
            const IconComponent = esp.icon;
            return (
              <div key={index} className="especialidad-card">
                <div className="especialidad-card-icon">
                  <IconComponent size={26} strokeWidth={1.5} />
                </div>
                <h3>{esp.title}</h3>
                <p className="especialidad-desc-main">{esp.description}</p>
                <ul className="especialidad-list">
                  {esp.items.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.bold}</strong> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
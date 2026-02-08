import { Users, Scale, Briefcase } from 'lucide-react';

export default function Especialidades() {
  const especialidades = [
    {
      icon: Users,
      title: 'Derecho Sucesorio y Familia',
      description: 'Elaboramos estrategias sensibles y efectivas para asuntos personales y patrimoniales que requieren un manejo legal cuidadoso.',
      items: [
        { bold: 'Sucesiones y Herencias:', text: 'Gestión integral de Declaratoria de Herederos, Tracto Abreviado y manejo de conflictos para una distribución eficiente.' },
        { bold: 'Divorcios y Acuerdos:', text: 'Asesoría en procesos de divorcio, redacción y negociación de Acuerdos Prenupciales.' },
      ],
    },
    {
      icon: Scale,
      title: 'Indemnizaciones y Daños',
      description: 'Defendemos sus derechos para obtener la compensación justa que le corresponde por los perjuicios sufridos.',
      items: [
        { bold: 'Accidentes de Tránsito:', text: 'Reclamos y litigios por daños y lesiones derivados de siniestros viales.' },
        { bold: 'Mala Praxis Médica:', text: 'Representación legal en casos de negligencia profesional en el ámbito de la salud.' },
      ],
    },
    {
      icon: Briefcase,
      title: 'Derecho Laboral',
      description: 'Protegemos los derechos de trabajadores y empleadores con un enfoque equilibrado y resolución efectiva.',
      items: [
        { bold: 'Despidos y Reclamos:', text: 'Asesoramiento y representación en despidos con y sin justa causa.' },
        { bold: 'Irregularidades:', text: 'Casos de empleo sin registrar (trabajo "en negro").' },
        { bold: 'Contratación:', text: 'Redacción y revisión de contratos individuales.' },
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
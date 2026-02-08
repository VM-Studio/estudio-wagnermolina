import { Scale, Users, Handshake } from 'lucide-react';

export default function Caracteriza() {
  const items = [
    {
      icon: Scale,
      title: 'Liderazgo en Casos Complejos',
      description: 'Trayectoria probada en litigios de alto perfil, estableciendo precedentes legales significativos en la jurisprudencia cordobesa.',
    },
    {
      icon: Users,
      title: 'Red de Especialistas',
      description: 'Más de dos décadas de colaboración con profesionales en diversas ramas jurídicas, garantizando máxima precisión en cada área.',
    },
    {
      icon: Handshake,
      title: 'Compromiso y Accesibilidad',
      description: 'La excelencia legal al alcance de todos. Estamos listos para aplicar nuestra experiencia a su favor, guiándole a través de todo el proceso.',
    },
  ];

  return (
    <section className="caracteriza">
      <div className="container">
        <div className="caracteriza-header">
          <div className="section-label">Propuesta de valor</div>
          <h2 className="section-title">Qué nos <em>caracteriza</em></h2>
        </div>
        <div className="caracteriza-grid">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="caracteriza-item">
                <div className="caracteriza-icon">
                  <IconComponent size={22} strokeWidth={1.5} style={{ color: 'var(--gold)' }} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
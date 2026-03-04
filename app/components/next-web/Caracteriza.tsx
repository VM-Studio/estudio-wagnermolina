import Image from 'next/image';

export default function Caracteriza() {
  const directores = [
    {
      nombre: 'Dr. Rodolfo',
      apellido: 'Molina',
      descripcion: 'Titular y fundador de Molina-Wagner & Asociados. Abogado graduado de la Universidad Católica Argentina (1991). Se desempeñó durante diez años en el Fuero Civil y de Familia del Poder Judicial de la Nación. Fue presidente de Racing Club de Avellaneda (2008-2011).',
      imagen: '/molina.png',
    },
    {
      nombre: 'Dr. Otto',
      apellido: 'Wagner',
      descripcion: 'Titular y fundador de Molina-Wagner & Asociados. Abogado por la Universidad Católica Argentina (1991), fue apoderado y patrocinante contratado en la empresa Ferrocarriles Argentinos entre los años 1991 y 1993. Desde entonces, ha ejercido su profesión en diversas ramas del Derecho como representante y patrocinante.',
      imagen: '/wagner.png',
    },
  ];

  const asociados = [
    {
      nombre: 'Dr. Alejandro',
      apellido: 'Sciotti',
      descripcion: 'Abogado graduado de la Universidad de Buenos Aires (2007). Especialista en Derecho Previsional, Comercial, Laboral y Civil, ha ejercido como patrocinante en centenares de causas tramitadas ante el Fuero de Seguridad Social.',
      imagen: '/sciotti.png',
    },
    {
      nombre: 'Dr. Santiago',
      apellido: 'Stegnar',
      descripcion: 'Abogado por la Universidad de Buenos Aires 1999, con posgrado en Derecho de la Seguridad Social (Universidad Católica Argentina), 2001. Se ha desempeñado como docente, y también como computista, supervisor, coordinador y jefe de Legales en la ANSES.',
      imagen: '/stengar.png',
    },
    {
      nombre: 'Dr. Nicolás',
      apellido: 'Monteverde',
      descripcion: 'Abogado por la Universidad de Buenos Aires (2011), especializado en Derecho Privado. Ha ejercido funciones de procuración, asesoramiento personal y tramitación de litigios judiciales en los fueros Comercial, Laboral, Contencioso Administrativo y Seguridad Social.',
      imagen: '/monteverde.png',
    },
    {
      nombre: 'Dr. Alejandro',
      apellido: 'Radicci',
      descripcion: 'Abogado por la Universidad de Buenos Aires (1988). Especialista en Derecho Laboral, representa tanto partes demandantes como demandadas en el ámbito de la CABA y la Provincia de Buenos Aires. En este último, también realiza gestiones de sucesión.',
      imagen: '/ridacci.png',
    },
  ];

  return (
    <section className="caracteriza">
      <div className="container">
        <div className="caracteriza-header">
          <div className="section-label">Nuestro equipo</div>
          <h2 className="section-title">¿Quiénes nos <em>caracterizan?</em></h2>
        </div>
        
        {/* Directores */}
        <div style={{ display: 'flex', gap: '5rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto' }}>
          {directores.map((director, index) => (
            <div key={index} className="caracteriza-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem',
              flex: '1 1 420px',
              maxWidth: '500px'
            }}>
              <div style={{ flex: '1', textAlign: 'left' }}>
                <h3 style={{ marginBottom: '0.75rem', textAlign: 'left' }}>
                  {director.nombre} <strong>{director.apellido}</strong>
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'left' }}>{director.descripcion}</p>
              </div>
              <div style={{ 
                width: '170px', 
                height: '170px',
                flexShrink: 0,
                overflow: 'hidden'
              }}>
                <Image 
                  src={director.imagen} 
                  alt={`${director.nombre} ${director.apellido}`}
                  width={170}
                  height={170}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Asociados */}
        <div style={{ marginTop: '4rem' }}>
          <h3 className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}><em>Asociados</em></h3>
          <div className="asociados-grid">
            {asociados.map((asociado, index) => (
              <div key={index} className="caracteriza-item asociado-card">
                <div style={{ 
                  width: '150px', 
                  height: '150px',
                  overflow: 'hidden',
                  marginBottom: '1rem'
                }}>
                  <Image 
                    src={asociado.imagen} 
                    alt={`${asociado.nombre} ${asociado.apellido}`}
                    width={150}
                    height={150}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>
                  {asociado.nombre} <strong>{asociado.apellido}</strong>
                </h3>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.5', textAlign: 'left' }}>{asociado.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
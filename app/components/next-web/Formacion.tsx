export default function Formacion() {
  const formaciones = [
    { titulo: 'Diplomatura en Derecho de Daños', institucion: 'Universidad Siglo 21 — Dir. Dr. Pizarro – Márquez (2007)' },
    { titulo: 'Curso de Profundización en Daños', institucion: 'Universidad Católica de Córdoba — Dir. Dr. Moiset Espanes (2007)' },
    { titulo: 'Diplomatura en Medidas Cautelares', institucion: 'Universidad Siglo 21' },
    { titulo: 'Diplomatura en Derecho Procesal del Trabajo', institucion: 'Asociación Argentina del Trabajo y la Seguridad Social (Filial Córdoba)' },
    { titulo: 'Seminario sobre Juicio de Desalojo y Tutelas Anticipadas', institucion: 'Desalojo Inmediato' },
    { titulo: 'Diplomatura en Estrategia Procesal y Éxito Probatorio', institucion: 'Universidad Nacional de Córdoba — Docentes especializados' },
    { titulo: 'Antecedentes y Examen de Secretario Legal y Técnico', institucion: 'Comisiones Médicas de la SRT' },
    { titulo: 'Diplomatura en Derecho de Daños (2014)', institucion: 'El Club del Derecho — Dr. Rodolfo Zavala de González' },
    { titulo: 'Diplomatura en Sucesiones', institucion: 'Colegio de Abogados' },
  ];

  return (
    <section className="formacion" id="formacion">
      <div className="container">
        <div className="formacion-header">
          <div className="section-label">Trayectoria académica</div>
          <h2 className="section-title">Formación <em>Académica</em></h2>
        </div>
        <p className="formacion-author">del Dr. Augusto Filí</p>
        <div className="formacion-timeline">
          {formaciones.map((item, index) => (
            <div key={index} className="formacion-item">
              <h4>{item.titulo}</h4>
              <p>{item.institucion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-visual">
        <div className="sobre-visual-img"></div>
        <div className="sobre-visual-accent"></div>
        <div className="sobre-visual-stat">
          <div className="num">10.000+</div>
          <div className="label">Clientes representados</div>
        </div>
      </div>
      <div className="sobre-content">
        <div className="section-label">Sobre Nosotros</div>
        <h2 className="section-title">
          Molina Wagner<br /><em>& Asociados</em>
        </h2>
        <p className="sobre-intro">
          Formado por un equipo de abogados altamente calificado, el estudio jurídico Molina Wagner & Asociados 
          brinda una atención integral, abarcadora de las áreas específicas de la vida personal y empresarial de sus clientes.
        </p>
        <div className="sobre-text">
          <p>
            Con más de dos décadas de trayectoria y más de 10.000 personas representadas, respaldamos 
            la eficacia y honestidad de nuestros servicios, cuya central prioridad es la satisfacción del cliente.
          </p>
          <p>
            Nuestro compromiso se fundamenta en valores sólidos que guían cada aspecto de nuestra práctica profesional: 
            <strong> experiencia y honestidad</strong> como pilares de confianza, <strong>tradición y vanguardia</strong> para 
            combinar el conocimiento consolidado con las herramientas más actuales del derecho.
          </p>
          <p>
            Garantizamos <strong>confidencialidad y profesionalidad</strong> en cada caso que tomamos, 
            porque entendemos que detrás de cada expediente hay una historia personal que merece el máximo respeto. 
            Nuestra meta es simple: su <strong>atención y satisfacción</strong> completa.
          </p>
        </div>
      </div>
    </section>
  );
}
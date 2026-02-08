import Image from 'next/image';

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-visual">
        <div className="sobre-visual-img"></div>
        <div className="sobre-visual-accent"></div>
        <div className="sobre-visual-stat">
          <div className="num">20+</div>
          <div className="label">Años de trayectoria</div>
        </div>
      </div>
      <div className="sobre-content">
        <div className="section-label">Sobre Nosotros</div>
        <h2 className="section-title">
          Experiencia en alta complejidad<br />y <em>gran litigación</em>
        </h2>
        <p className="sobre-intro">
          Ofrecemos un servicio legal integral que combina la experiencia en alta complejidad 
          y la gran litigación con un compromiso inquebrantable y atención personalizada para cada cliente.
        </p>
        <div className="sobre-text">
          <p>
            Con más de 20 años de trayectoria y solvencia profesional, el Dr. Augusto Filí ha 
            consolidado un modelo de atención jurídica basado en la excelencia y la especialización estratégica.
          </p>
          <p>
            Entendiendo que el derecho actual exige abordajes integrales, el Dr. Filí se encuentra 
            asociado desde hace más de dos décadas con profesionales especialistas en diversas ramas jurídicas. 
            Esta red de colaboración técnica permite brindar un servicio de máxima precisión en cada área, 
            garantizando respuestas sólidas y personalizadas para cada caso.
          </p>
          <p>
            A lo largo de su carrera ha mantenido un profundo compromiso con la formación continua, 
            capacitándose en instituciones de primer nivel a través de diversas diplomaturas que 
            fortalecen una práctica profesional de vanguardia y alto desempeño.
          </p>
        </div>
      </div>
    </section>
  );
}
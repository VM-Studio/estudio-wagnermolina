'use client';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-textlogo">
          <em>Molina Wagner</em> <span className="amp">&</span> Asociados
        </div>
        <div className="hero-sub">Estudio de Abogados</div>
        <p className="hero-tagline">
          La tranquilidad de estar <span className="highlight">bien asesorado</span>
        </p>
        <a 
          href="https://wa.me/541143728257" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-hero"
        >
          Consulte Ahora
        </a>
      </div>
    </section>
  );
}
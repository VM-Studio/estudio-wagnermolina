'use client';

import { trackWhatsAppConversion } from "../GoogleAdsTracking";


export default function Hero() {
  const handleWhatsAppClick = () => {
    trackWhatsAppConversion();
  };

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-textlogo">
          <em>Filí</em> <span className="amp">&</span> Asociados
        </div>
        <div className="hero-sub">Abogados · Córdoba</div>
        <p className="hero-tagline">
          Su justicia, <span className="highlight">nuestra prioridad</span>
        </p>
        <a 
          href="https://wa.me/5493515186325" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-hero"
          onClick={handleWhatsAppClick}
        >
          Consulte Ahora
        </a>
      </div>
    </section>
  );
}
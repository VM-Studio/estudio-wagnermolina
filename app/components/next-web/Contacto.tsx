'use client';

import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="container">
        <div className="contacto-grid">
          <div className="contacto-info">
            <div className="section-label">Contacto</div>
            <h2 className="section-title">
              Entendemos que su caso<br />es el más <em>importante</em>
            </h2>
            <p className="contacto-desc">
              La excelencia legal al alcance de todos. Estamos listos para aplicar 
              nuestra experiencia a su favor.
            </p>
            
            <div className="contacto-detail">
              <div className="contacto-detail-icon">
                <MapPin size={16} style={{ color: 'var(--gold)' }} />
              </div>
              <div>
                <h4>Dirección</h4>
                <p>Lavalle 1605. Piso 4 Of. 8<br />C1048AAM Ciudad Autónoma de Buenos Aires</p>
              </div>
            </div>
            
            <div className="contacto-detail">
              <div className="contacto-detail-icon">
                <Phone size={16} style={{ color: 'var(--gold)' }} />
              </div>
              <div>
                <h4>Teléfono</h4>
                <p>
                  <a 
                    href="tel:+541143728257"
                  >
                    (011) 4372-8257 / 4371-3248
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contacto-detail">
              <div className="contacto-detail-icon">
                <Mail size={16} style={{ color: 'var(--gold)' }} />
              </div>
              <div>
                <h4>Correo Electrónico</h4>
                <p>
                  <a 
                    href="mailto:contacto@estudiomolinawagner.com"
                  >
                    contacto@estudiomolinawagner.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
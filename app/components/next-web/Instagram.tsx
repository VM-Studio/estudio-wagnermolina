import { Instagram as InstagramIcon } from 'lucide-react';

export default function Instagram() {
  return (
    <section className="instagram" id="instagram">
      <div className="container">
        <div className="instagram-header">
          <div className="section-label">Redes Sociales</div>
          <h2 className="section-title">Síguenos en <em>Instagram</em></h2>
        </div>
        <div className="instagram-grid">
          {/* Los embeds de Instagram se pueden agregar aquí */}
          <div className="instagram-embed-wrap">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/abogado.fili/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '99.375%'
              }}
            />
          </div>
          <div className="instagram-embed-wrap">
            {/* Embed adicional */}
          </div>
          <div className="instagram-embed-wrap">
            {/* Embed adicional */}
          </div>
        </div>
        <div className="instagram-cta">
          <a 
            href="https://www.instagram.com/abogado.fili/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <InstagramIcon size={16} />
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
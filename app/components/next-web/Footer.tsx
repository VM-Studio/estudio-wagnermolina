import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="#" className="footer-logo">
            <span><em>Filí</em> <span className="ampersand">&</span> Asociados</span>
            <span className="sub">Abogados</span>
          </Link>
          <p>
            Servicio legal integral basado en la excelencia y la especialización estratégica. 
            Más de 20 años de trayectoria profesional en Córdoba.
          </p>
        </div>
        <div className="footer-col">
          <h4>Secciones</h4>
          <ul>
            <li><Link href="#especialidades">Especialidades</Link></li>
            <li><Link href="#sobre">Sobre Nosotros</Link></li>
            <li><Link href="#formacion">Formación</Link></li>
            <li><Link href="#prensa">Casos en la Prensa</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contenido</h4>
          <ul>
            <li><Link href="#videos">Streaming</Link></li>
            <li><Link href="#instagram">Instagram</Link></li>
            <li><Link href="#resenias">Reseñas</Link></li>
            <li><Link href="#faqs">FAQs</Link></li>
            <li><Link href="#contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Filí y Asociados · <br />
          Desarrollado por{' '}
          <a 
            href="https://instagram.com/sageedev" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)' }}
          >
            @sageeDev
          </a>
        </p>
        <div className="footer-social">
          <a 
            href="https://www.instagram.com/abogado.fili/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Instagram size={18} />
          </a>
          <a 
            href="https://x.com/filiaugustoarg" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
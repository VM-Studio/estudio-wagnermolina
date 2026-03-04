import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="#" className="footer-logo">
            <span><em>Molina Wagner</em> <span className="ampersand">&</span> Asociados</span>
            <span className="sub">Abogados</span>
          </Link>
          <p>
            Servicio legal integral basado en la excelencia y la especialización estratégica.
          </p>
        </div>
        <div className="footer-col">
          <h4>Secciones</h4>
          <ul>
            <li><Link href="#especialidades">Especialidades</Link></li>
            <li><Link href="#sobre">Sobre Nosotros</Link></li>
            <li><Link href="#prensa">Casos en la Prensa</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contenido</h4>
          <ul>
            <li><Link href="#faqs">FAQs</Link></li>
            <li><Link href="#contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Molina Wagner y Asociados
        </p>
      </div>
    </footer>
  );
}
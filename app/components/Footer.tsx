import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          
          {/* Brand Column - Logo centrado en mobile */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="#" className="nav-logo mb-4">
              <span><em>Molina Wagner</em> <span className="ampersand">&</span> Asociados</span>
              <span className="sub">Abogados</span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xs text-center md:text-left">
              Servicio legal integral basado en la excelencia y la especialización estratégica.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5" style={{ color: 'var(--gold)' }}>
              Navegación
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-sm font-medium text-gray-300 hover:text-[#e9a459] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="text-sm font-medium text-gray-300 hover:text-[#e9a459] transition-colors">
                  Especialidades
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-sm font-medium text-gray-300 hover:text-[#e9a459] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-sm font-medium text-gray-300 hover:text-[#e9a459] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5" style={{ color: 'var(--gold)' }}>
              Contacto
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="tel:+541143728257" className="text-sm font-bold text-white hover:text-[#e9a459] transition-colors">
                  (011) 4372-8257 / 4371-3248
                </a>
              </li>
              <li>
                <a href="mailto:contacto@estudiomolinawagner.com" className="text-sm font-medium text-gray-300 hover:text-[#e9a459] transition-colors">
                  contacto@estudiomolinawagner.com
                </a>
              </li>
              <li className="text-sm font-medium text-gray-400">
                Lavalle 1605. Piso 4 Of. 8<br />
                Ciudad Autónoma de Buenos Aires
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <p className="text-xs sm:text-sm font-medium text-gray-500 text-center">
            © {new Date().getFullYear()} <span className="font-bold text-gray-400">Molina Wagner & Asociados</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
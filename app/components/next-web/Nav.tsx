'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileNav = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <Link href="#" className="nav-logo">
          <span><em>Molina Wagner</em> <span className="ampersand">&</span> Asociados</span>
          <span className="sub">Abogados</span>
        </Link>
        <ul className="nav-links">
          <li><Link href="#especialidades">Especialidades</Link></li>
          <li><Link href="#sobre">Nosotros</Link></li>
          <li><Link href="#faqs">Preguntas</Link></li>
          <li><Link href="#contacto">Contacto</Link></li>
        </ul>
        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link href="#especialidades" onClick={closeMobileNav}>Especialidades</Link>
        <Link href="#sobre" onClick={closeMobileNav}>Nosotros</Link>
        <Link href="#faqs" onClick={closeMobileNav}>Preguntas</Link>
        <Link href="#contacto" onClick={closeMobileNav}>Contacto</Link>
      </div>
    </>
  );
}
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const section = document.getElementById('pedidos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Aguarda a rolagem iniciar/terminar e foca no primeiro campo (input)
      setTimeout(() => {
        const firstInput = section.querySelector('input') as HTMLElement;
        if (firstInput) {
          firstInput.focus({ preventScroll: true });
        }
      }, 800);
    }
  };

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'A Neide', href: '#sobre' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
           {/* Signature Logo */}
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-signature font-bold text-brand-chocolate transform group-hover:scale-105 transition-transform">
              Neide Borges
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-pink font-display font-medium text-center -mt-1">
              Confeitaria Artesanal
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 font-medium hover:text-brand-pink transition-colors text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#pedidos" 
            onClick={handleOrderClick}
            className="bg-brand-pink hover:bg-rose-500 text-white px-6 py-2.5 rounded-full font-bold shadow-md shadow-brand-pink/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" /> Encomendar
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-brand-chocolate"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#pedidos" 
            className="bg-brand-pink text-white text-center py-3 rounded-xl font-bold mt-2"
            onClick={handleOrderClick}
          >
            Fazer Encomenda
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-chocolate text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
                <span className="font-signature text-4xl text-brand-pinkLight">Neide Borges</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-pinkLight/70 font-display mt-1">Confeitaria Artesanal</p>
            </div>
            <p className="text-white/80 max-w-xs">
              Transformando ingredientes simples em momentos inesquecíveis. Bolos caseiros feitos com amor e tradição.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.instagram.com/neideborges.confeitaria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-colors"
                aria-label="Instagram da Neide Borges"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-pinkLight">Acesso Rápido</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#inicio" className="hover:text-brand-pink transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-brand-pink transition-colors">A Neide</a></li>
              <li><a href="#galeria" className="hover:text-brand-pink transition-colors">Galeria</a></li>
              <li><a href="#pedidos" className="hover:text-brand-pink transition-colors">Faça seu Pedido</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-pinkLight">Contato</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-pink mt-1" />
                <span>(11) 99999-9999<br /><span className="text-xs opacity-70">Fale direto com a Neide</span></span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-pink mt-1" />
                <span>Rua das Confeitarias, 123<br />Bairro Jardins, São Paulo - SP</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-pink mt-1" />
                <span>Seg - Sáb: 09h às 18h<br />Dom: Encomendas antecipadas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Neide Borges Confeitaria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
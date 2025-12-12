import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative w-full min-h-[90vh] flex items-center pt-24 pb-20 bg-brand-cream overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 bg-brand-pinkLight text-brand-chocolate text-sm font-bold rounded-full mb-2 shadow-sm">
            👩‍🍳 Mãos que transformam açúcar em afeto
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-brand-chocolate leading-tight">
            Bolos feitos por <br />
            <span className="font-signature text-brand-pink text-6xl md:text-7xl lg:text-8xl block mt-2">Neide Borges</span>
          </h1>
          <p className="text-lg text-slate-600 md:max-w-lg mx-auto md:mx-0 font-medium">
            Cada fatia conta uma história. Traga o verdadeiro sabor caseiro para suas celebrações com receitas exclusivas de família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
            <a 
              href="#pedidos" 
              className="px-8 py-4 bg-brand-pink hover:bg-rose-500 text-white font-bold rounded-full shadow-lg shadow-rose-300/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Fazer Pedido <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#galeria" 
              className="px-8 py-4 bg-white border-2 border-brand-chocolate/20 text-brand-chocolate font-bold rounded-full hover:bg-brand-chocolate hover:text-white transition-all"
            >
              Ver Bolos
            </a>
          </div>
        </div>

        <div className="relative group mt-8 md:mt-0">
          <div className="absolute inset-0 bg-brand-pink rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <img 
            src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop" 
            srcSet="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=400&auto=format&fit=crop&fm=webp 400w,
                    https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop&fm=webp 800w,
                    https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop&fm=webp 1000w"
            sizes="(max-width: 768px) 100vw, 450px"
            alt="Bolo decorado artesanal feito por Neide Borges" 
            className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 object-cover aspect-[4/5]"
            loading="eager"
            width="400"
            height="500"
          />
          {/* Float Badge - Adjusted position higher and smoother animation */}
          <div className="absolute bottom-6 -right-2 md:right-10 bg-white p-4 rounded-2xl shadow-xl animate-float">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎂</span>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Mais pedido</p>
                <p className="font-bold text-brand-chocolate">Bolo de Festa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
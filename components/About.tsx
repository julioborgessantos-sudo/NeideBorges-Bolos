import React from 'react';
import { ChefHat, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -top-4 -left-4 w-full h-full border-4 border-brand-pink/30 rounded-3xl"></div>
             {/* Changed image to hands working/decorating to imply the personal touch */}
             <img 
               src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop" 
               alt="Neide Borges finalizando um bolo" 
               className="relative rounded-3xl shadow-lg w-full object-cover h-[500px]"
             />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-brand-pink font-bold tracking-wider uppercase text-sm">Quem Sou Eu</span>
            <h2 className="text-4xl font-display font-bold text-brand-chocolate">
              Cozinhando com a alma, servindo com o coração
            </h2>
            <div className="text-slate-600 leading-relaxed text-lg space-y-4">
              <p>
                Olá! Sou a <strong>Neide Borges</strong>. Minha jornada com a confeitaria começou na cozinha da minha mãe, onde o cheiro de bolo assando era o sinal de que a família logo estaria reunida.
              </p>
              <p>
                O que começou como um hobby para os aniversários dos netos se transformou em uma paixão profissional. Hoje, dedico meus dias a criar bolos que não são apenas bonitos, mas que trazem aquele gostinho nostálgico de "feito em casa".
              </p>
              <p>
                Aqui na minha cozinha, não entram pré-misturas industriais. Cada massa é batida com paciência, cada recheio é apurado no ponto certo e cada decoração leva um pedacinho do meu carinho por essa arte.
              </p>
            </div>

            <div className="pt-6">
                <span className="font-signature text-5xl text-brand-pink opacity-80 rotate-[-5deg] block">Neide Borges</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="flex flex-col items-center text-center p-4 bg-brand-cream rounded-2xl border border-brand-chocolate/5">
                <ChefHat className="w-8 h-8 text-brand-chocolate mb-2" />
                <span className="font-bold text-brand-chocolate text-sm">100% Artesanal</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-brand-cream rounded-2xl border border-brand-chocolate/5">
                <Award className="w-8 h-8 text-brand-chocolate mb-2" />
                <span className="font-bold text-brand-chocolate text-sm">Receitas de Família</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-brand-cream rounded-2xl border border-brand-chocolate/5">
                <Heart className="w-8 h-8 text-brand-pink mb-2" />
                <span className="font-bold text-brand-chocolate text-sm">Feito por mim</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
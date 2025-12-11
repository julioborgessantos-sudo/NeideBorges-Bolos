import React from 'react';
import { Wheat, Smile, Leaf, Truck, DollarSign, PenTool } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: <Leaf className="w-8 h-8" />, title: "Ingredientes Frescos", desc: "Frutas selecionadas no dia e produtos de primeira linha." },
    { icon: <Wheat className="w-8 h-8" />, title: "Massas Fofinhas", desc: "Aquela massa caseira que derrete na boca, feita no dia." },
    { icon: <Smile className="w-8 h-8" />, title: "Recheios Cremosos", desc: "Sem economia no recheio! Camadas generosas e saborosas." },
    { icon: <DollarSign className="w-8 h-8" />, title: "Preço Justo", desc: "Qualidade de confeitaria fina com preço de quem faz em casa." },
    { icon: <Truck className="w-8 h-8" />, title: "Entrega Agendada", desc: "Receba no conforto da sua casa no horário combinado." },
    { icon: <PenTool className="w-8 h-8" />, title: "Personalização", desc: "Escolha massa, recheio e decoração do seu jeito." },
  ];

  return (
    <section className="py-20 bg-brand-chocolate text-white relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold">Por que escolher a Doce Delícia?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all border border-white/10 hover:border-white/30 group">
                        <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
                        <p className="text-brand-pinkLight/80">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Features;

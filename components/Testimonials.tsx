import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-pink font-bold tracking-wider uppercase text-sm">Depoimentos</span>
          <h2 className="text-4xl font-display font-bold text-brand-chocolate mt-2">O que dizem nossos clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="flex flex-col h-full bg-brand-cream/30 p-8 rounded-3xl relative hover:bg-brand-cream/60 transition-colors">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-pink/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-pink p-1 bg-white"
                />
                <div>
                  <h4 className="font-bold text-brand-chocolate">{t.name}</h4>
                  <div className="flex text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-current' : 'text-slate-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 italic leading-relaxed flex-grow">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
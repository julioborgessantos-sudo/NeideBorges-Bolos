import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  // Helper to generate WebP optimized URL for different widths
  const getOptimizedUrl = (url: string, width: number) => {
    return url.replace(/&w=\d+/, `&w=${width}&fm=webp`);
  };

  return (
    <section id="galeria" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-pink font-bold tracking-wider uppercase text-sm">Nosso Portfólio</span>
          <h2 className="text-4xl font-display font-bold text-brand-chocolate mt-2">Nossas Criações</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Um pouquinho do que já saiu do nosso forno. Cada detalhe é pensado para encantar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  srcSet={`${getOptimizedUrl(item.image, 400)} 400w, ${getOptimizedUrl(item.image, 800)} 800w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-pinkLight text-sm font-bold uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </span>
                <h3 className="text-white text-2xl font-display font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-chocolate font-bold border-b-2 border-brand-pink pb-1 hover:text-brand-pink transition-colors"
          >
            <Instagram className="w-5 h-5" /> Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
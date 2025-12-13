import { FillingOption, GalleryItem, Testimonial } from './types';

export const PRICE_PER_KG = 45.00;
export const WHATSAPP_NUMBER = "5519991661916";

export const FILLINGS: FillingOption[] = [
  { id: 'prestigio', name: 'Prestígio' },
  { id: 'dois_amores', name: 'Dois Amores' },
  { id: 'beijinho', name: 'Beijinho' },
  { id: 'brigadeiro', name: 'Brigadeiro Tradicional' },
  { id: 'ninho_nutella', name: 'Ninho com Nutella', isPremium: true },
  { id: 'morango_chantilly', name: 'Morango com Chantilly' },
  { id: 'doce_leite', name: 'Doce de Leite Suave' },
  { id: 'coco_cremoso', name: 'Coco Cremoso' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: 'Aniversário',
    title: 'Bolo de Morango Clássico',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Temáticos',
    title: 'Chocolate Supremo',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Naked Cake',
    title: 'Naked Cake de Frutas',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Infantil',
    title: 'Colorido Festa',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'Casamento',
    title: 'Wedding Elegance',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'Especiais',
    title: 'Red Velvet',
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=800&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "O melhor bolo que já comi! A massa é super fofinha e o recheio de Ninho com Nutella é divino. Super recomendo!"
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    text: "Encomendei para o aniversário da minha filha e foi um sucesso. Chegou no horário e a decoração estava impecável."
  },
  {
    id: 3,
    name: "Fernanda Lima",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    rating: 4,
    text: "Delicioso e com preço justo. O atendimento pelo WhatsApp foi muito rápido e atencioso. Virei cliente fiel!"
  }
];
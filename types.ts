export enum CakeDough {
  WHITE = 'Massa Branca',
  CHOCOLATE = 'Massa de Chocolate',
  RED_VELVET = 'Red Velvet'
}

export interface FillingOption {
  id: string;
  name: string;
  isPremium?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
}

export interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

export interface OrderState {
  dough: CakeDough;
  fillings: string[];
  weight: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  notes: string;
}

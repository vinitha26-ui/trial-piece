import { Product } from '../model/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 'aloe-gel',
    name: 'Pure Aloe Vera Gel',
    description: '100% aloe, cold-pressed, no additives',
    image: 'assets/products/aloe-gel.jpg',
    basePriceINR: 249,
    category: 'Skincare',
    certifications: ['FSSAI']
  },
  {
    id: 'moringa-powder',
    name: 'Moringa Leaf Powder',
    description: 'Sun-dried, stone-ground moringa leaves',
    image: 'assets/products/moringa.jpg',
    basePriceINR: 199,
    category: 'Nutrition',
    certifications: ['FSSAI']
  }
];
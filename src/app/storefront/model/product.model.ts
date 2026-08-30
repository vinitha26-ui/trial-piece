export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  basePriceINR: number;
  category: string;
  certifications?: string[];
}
export interface Product {
    id: number;
    image: string;
    gallery: string[];
    name: string;
    description: string;
    rating: number;
    link: string;
    like: number;
    liked: boolean;
    categoryId: number;
  }
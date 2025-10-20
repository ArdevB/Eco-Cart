export interface Product {
  name: string;
  price: number;
  brand: string | null;
  category: string;
  createdAt: Date;
  stock: number;
  description: string;
  size: string[];
  imageUrls: string[] | [];
  createdBy: string | null;
}

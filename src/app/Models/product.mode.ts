export interface IProduct {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
  quantity?: number; // Hacerlo opcional para evitar errores
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description?: string; // Agregar 'description' como propiedad opcional
}

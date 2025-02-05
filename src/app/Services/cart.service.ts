import { Injectable } from '@angular/core';
import { IProduct } from '../Models/product.mode';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];  // Lista de productos en el carrito

  // Agregar producto al carrito
  addToCart(product: IProduct): void {
    this.cart.push(product);
  }

  // Obtener productos en el carrito
  getCartItems(): IProduct[] {
    return this.cart;
  }

  // Limpiar el carrito
  clearCart(): void {
    this.cart = [];
  }

  // Actualizar el carrito
  updateCart(cartItems: IProduct[]): void {
    this.cart = cartItems;
  }
}

// cart.service.ts - Servicio de Carrito Mejorado
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/product.mode';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];  // Lista de productos en el carrito

  constructor() {
    this.loadCart();  // Cargar carrito desde localStorage
  }

  // Agregar producto al carrito o actualizar cantidad si ya existe
  addToCart(product: IProduct, quantity: number): void {
    if (quantity > 3) {
      quantity = 3; // Asegurarse de que no se exceda el límite de 3
    }

    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = existingProduct.quantity ? existingProduct.quantity + quantity : quantity;
      if (existingProduct.quantity > 3) {
        existingProduct.quantity = 3; // Límite máximo de 3
      }
    } else {
      this.cart.push({ ...product, quantity });
    }
    this.saveCart();
  }

  // Obtener productos en el carrito
  getCartItems(): IProduct[] {
    return this.cart;
  }

  // Eliminar producto del carrito
  removeItem(productId: number): void {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
  }

  // Vaciar el carrito
  clearCart(): void {
    this.cart = [];
    localStorage.removeItem('cart');
  }

  // Modificar cantidad de productos en el carrito
  updateQuantity(productId: number, quantity: number): void {
    const product = this.cart.find(item => item.id === productId);
    if (product) {
      product.quantity = quantity;
      if (quantity <= 0) {
        this.removeItem(productId);
      }
      this.saveCart();  // Guardar cambios
    }
  }

  // Calcular el total del carrito
  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0); // Usar 1 si quantity es undefined
  }

  // Guardar carrito en localStorage
  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Cargar carrito desde localStorage
  private loadCart(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }
}

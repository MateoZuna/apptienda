import { Component } from '@angular/core';
import { IProduct } from '../../Models/product.mode';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../Services/cart.service';  // Importamos el servicio CartService

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: IProduct[] = [];

  constructor(private router: Router, private cartService: CartService) {
    // Obtener los productos del carrito al cargar el componente
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartService.updateCart(this.cartItems);  // Actualizamos el carrito después de eliminar un producto
  }

  clearCart() {
    this.cartItems = [];
    this.cartService.clearCart();  // Limpiar carrito en el servicio
  }

  gotoHome() {
    this.router.navigate(['/product-list']);
  }
}

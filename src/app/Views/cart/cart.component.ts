import { Component } from '@angular/core';
import { IProduct } from '../../Models/product.mode';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../Services/cart.service';
import { InvoiceService } from '../../Services/invoice.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: IProduct[] = [];

  constructor(
    private router: Router,
    private cartService: CartService,
    private invoiceService: InvoiceService
  ) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(productId: number) {
    this.cartService.removeItem(productId);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  gotoHome() {
    this.router.navigate(['/product-list']);
  }

  updateQuantity(item: IProduct, event: Event) {
    const input = event.target as HTMLInputElement;
    const quantity = Number(input.value);
    if (quantity > 0) {
      this.cartService.updateQuantity(item.id, quantity);
      this.cartItems = this.cartService.getCartItems();
    }
  }

  get total(): number {
    return this.cartService.getTotal();
  }

  // Método para generar la factura en PDF
  generateInvoice() {
    this.invoiceService.generatePDFInvoice();  // Generar el PDF aquí
  }
}

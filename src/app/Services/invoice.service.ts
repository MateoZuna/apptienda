import { Injectable } from '@angular/core';
import { IProduct } from '../Models/product.mode';
import { CartService } from './cart.service';
import { jsPDF } from 'jspdf';  // Importación correcta

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private cartService: CartService) { }

  // Método para generar la factura en texto
  generateInvoice(cartItems: IProduct[], total: number): string {
    let invoice = 'Factura\n\n';
    invoice += '---------------------------------\n';
    cartItems.forEach(item => {
      invoice += `${item.title} - $${item.price} x ${item.quantity}\n`;
    });
    invoice += '---------------------------------\n';
    invoice += `Total: $${total.toFixed(2)}\n`;
    invoice += '---------------------------------\n';
    return invoice;
  }

  // Método para generar factura en PDF
  generatePDFInvoice(): void {
    const cartItems: IProduct[] = this.cartService.getCartItems();
    const doc = new jsPDF();

    doc.text('Factura', 10, 10);
    let y = 20;
    cartItems.forEach(item => {
      doc.text(`${item.title} - $${item.price} x ${item.quantity}`, 10, y);
      y += 10;
    });
    doc.text(`Total: $${this.cartService.getTotal().toFixed(2)}`, 10, y + 10);
    doc.save('factura.pdf');
  }
}

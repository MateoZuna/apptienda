import { Component, Input } from '@angular/core';
import { IProduct } from '../../Models/product.mode'; // Cambiado 'book' por 'product'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true, // Standalone component
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() item!: IProduct; // Cambiado 'book' por 'product'

  constructor(private route: Router) { }

  navigateToID() {
    this.route.navigate(['products', this.item.id]); // Cambiado 'books' por 'products'
  }
}

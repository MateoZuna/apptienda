import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../Models/product.mode'; 
import { ProductItemComponent } from '../../Components/product-item/product-item.component'; 
import { NgFor } from '@angular/common'; 
import { ProductService } from '../../Services/product.service'; 

@Component({
  selector: 'app-products-list',
  imports: [ProductItemComponent, NgFor], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
})
export class ProductsListComponent {
  private productService = inject(ProductService);
  private router = inject(Router);

  listaProductos: IProduct[] = this.productService.getProducts();

  goToCart() {
    this.router.navigate(['/cart']);
  }
}

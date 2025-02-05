import { Component, inject, } from '@angular/core';
import { Router, RouterModule } from '@angular/router';  // Importa RouterModule aquí
import { IProduct } from '../../Models/product.mode';
import { ProductItemComponent } from '../../Components/product-item/product-item.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../../Services/product.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-products-list',
  imports: [ProductItemComponent, NgFor, FormsModule, RouterModule], // Agregar RouterModule aquí
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
})
export class ProductsListComponent {
  private productService = inject(ProductService);
  private router = inject(Router);

  listaProductos: IProduct[] = this.productService.getProducts();
  searchId: string = ''; // Almacenará el ID de búsqueda

  // Método para redirigir al carrito
  goToCart() {
    this.router.navigate(['/cart']);
  }

  // Método para buscar un producto por ID
  searchProduct() {
    const foundProduct = this.listaProductos.find(product => product.id === Number(this.searchId));

    if (foundProduct) {
      // Redirige a la ruta de detalle del producto
      this.router.navigate(['/product-details', foundProduct.id]);
    } else {
      // Redirige a la ruta 'not-found' si no se encuentra el producto
      this.router.navigate(['/not-found', this.searchId]);
    }
  }
  
  goToAddProduct() {
    this.router.navigate(['/add-product']);
  }
}

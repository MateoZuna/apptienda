import { Component, inject } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  standalone: true,
  imports: [FormsModule]  // Añade FormsModule aquí
})
export class AddProductComponent {
  newProduct = {
    id: 0,
    title: '',
    price: 0,
    imageUrl: ''
  };

  private productService = inject(ProductService);
  private router = inject(Router);

  addProduct() {
    this.newProduct.id = this.productService.getNewProductId(); // Asigna un ID único
    this.productService.addProduct(this.newProduct); // Llama al servicio para añadir el producto

    // Redirige al listado de productos
    this.router.navigate(['/']);
  }
}

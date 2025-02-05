import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Models/product.mode'; // Interfaz para el modelo de datos del producto
import { ProductService } from '../../Services/product.service'; // Servicio para obtener los productos
import { CartService } from '../../Services/cart.service';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegurarnos de que estos módulos están importados
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailComponent {
  productSelected!: IProduct;
  quantity: number = 1; // Cantidad inicial

  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      const product = this.productService.getProductById(Number(id));

      if (!product) {
        console.log('Product not found');
        this.route.navigate(['not-found', id]);
      } else {
        this.productSelected = product;
      }
    });
  }

  gotoHome(): void {
    this.route.navigate(['']);
  }

  addToCart(): void {
    // Asegurarse de no añadir más de 3 productos
    if (this.quantity > 0 && this.quantity <= 3) {
      this.cartService.addToCart(this.productSelected, this.quantity);
      this.gotoHome();
    } else {
      alert('Solo puedes añadir hasta 3 productos.');
    }
  }
}

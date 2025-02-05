import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Models/product.mode'; // Interfaz para el modelo de datos del producto
import { ProductService } from '../../Services/product.service'; // Servicio para obtener los productos
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product-detail', // Nombre del selector del componente
  templateUrl: './product-details.component.html', // Archivo HTML para la plantilla
  styleUrls: ['./product-details.component.css'], // Archivo CSS para los estilos
  standalone: true, // Indica que este componente es independiente
})
export class ProductDetailComponent {
  // Propiedad para almacenar el producto seleccionado
  productSelected!: IProduct;

  // Servicios inyectados para manejar rutas y datos
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  constructor() {
    // Subscríbete a los parámetros de la ruta activa
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id']; // Obtiene el ID del parámetro de ruta

      // Busca el producto con el ID proporcionado
      const product = this.productService.getProductById(Number(id));

      if (!product) {
        // Si no se encuentra el producto, redirige a la página "not-found"
        console.log('Product not found');
        this.route.navigate(['not-found', id]);
      } else {
        // Si se encuentra el producto, almacénalo en productSelected
        this.productSelected = product;
      }
    });
  }

  // Método para regresar a la página principal
  gotoHome(): void {
    this.route.navigate(['']);
  }

  // Método para añadir el producto al carrito
  addToCart(): void {
    this.cartService.addToCart(this.productSelected);
    this.gotoHome(); // Redirigir después de añadir al carrito
  }
}

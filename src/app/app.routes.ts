import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Views/product-list/product-list.component').then(m => m.ProductsListComponent),
  },
  {
    path: 'product-details/:id',
    loadComponent: () => import('./Views/product-details/product-details.component').then(m => m.ProductDetailComponent),
  },
  {
    path: 'not-found/:id',
    loadComponent: () => import('./Views/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./Views/cart/cart.component').then(m => m.CartComponent),
  },
  {
    path: 'add-product',
    loadComponent: () => import('./Views/add-product/add-product.component').then(m => m.AddProductComponent),  // Agregar esta ruta
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

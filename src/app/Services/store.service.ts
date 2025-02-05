// src/app/Services/store.service.ts
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/product.mode';

@Injectable({
  providedIn: 'root', // Esto hace que el servicio sea global y accesible desde cualquier parte de la aplicación.
})
export class StoreService {
  private inventory: IProduct[] = [];

  constructor() {
    this.loadInventory(); // Cargar inventario cuando se inicializa el servicio.
  }

  // Obtener todos los productos del inventario
  getInventory(): IProduct[] {
    return this.inventory;
  }

  // Cargar inventario desde localStorage o cualquier fuente persistente (como una API)
  private loadInventory(): void {
    const savedInventory = localStorage.getItem('inventory');
    if (savedInventory) {
      this.inventory = JSON.parse(savedInventory);
    } else {
      this.inventory = []; // Si no hay inventario en localStorage, inicializamos con un arreglo vacío
    }
  }

  // Actualizar el inventario (puede venir de una API o algún otro lugar)
  updateInventory(products: IProduct[]): void {
    this.inventory = products;
    localStorage.setItem('inventory', JSON.stringify(this.inventory)); // Guardar el inventario actualizado en localStorage
  }
}

// src/app/Views/inventory/inventory.component.ts
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../Services/store.service';
import { IProduct } from '../../Models/product.mode';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventory: IProduct[] = [];

  constructor(private storeService: StoreService, private cartService: CartService) {}

  ngOnInit(): void {
    this.inventory = this.storeService.getInventory(); // Obtener productos del inventario
  }

  addToCart(item: IProduct): void {
    this.cartService.addToCart(item); // Llamamos al servicio de carrito para añadir el producto
  }
}

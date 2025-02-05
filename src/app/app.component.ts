import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from './Views/product-list/product-list.component'; // Asegurarse de que esté importado correctamente

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsListComponent], // Asegurarse de que esté importado correctamente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
}

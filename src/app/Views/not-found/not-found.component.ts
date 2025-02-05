import { Component, inject } from '@angular/core'; // Importación de utilidades de Angular.
import { ActivatedRoute, Router } from '@angular/router'; // Manejo de rutas dinámicas.

@Component({
  selector: 'app-not-found', // Selector del componente.
  templateUrl: './not-found.component.html', // Ruta de la plantilla HTML.
  styleUrls: ['./not-found.component.css'], // Ruta del archivo de estilos.
  standalone: true, // Indica que este componente es independiente.
})
export class NotFoundComponent {
  // Almacena el ID que no fue encontrado.
  id: number = 0;

  // Servicios de navegación y rutas inyectados.
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    // Subscríbete a los parámetros de la ruta activa.
    this.activatedRoute.params.subscribe((params) => {
      this.id = Number(params['id']); // Almacena el ID proporcionado.
    });
  }

  // Método para regresar a la página principal.
  gotoHome(): void {
    this.route.navigate(['']);
  }
}

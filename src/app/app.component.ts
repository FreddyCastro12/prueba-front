import { Component, OnInit } from '@angular/core';

/**
 * Componente raiz de la aplicacion
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  /**
   * Metodo que se ejecuta cada vez que se inicia la página
   */
  ngOnInit(): void {
  }
}

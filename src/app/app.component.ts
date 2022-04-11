import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'capacitacion-componentes';
  
  verAlumnos: boolean = true;
  maximoAlumnos = 7;
  
  confirmarEnvio(parametro: string) {
    alert('Va a enviar las notas a ' + parametro);
  }
}

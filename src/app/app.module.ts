import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosListadoComponent } from './alumnos-listado/alumnos-listado.component';
import { MontoAlumnoPipe } from './monto-alumno/monto-alumno.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListadoComponent,
    MontoAlumnoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

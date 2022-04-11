import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosListadoComponent } from './alumnos-listado/alumnos-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

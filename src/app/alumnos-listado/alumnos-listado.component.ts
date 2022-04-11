import { Component, Input, Output, EventEmitter, OnChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-alumnos-listado',
  templateUrl: './alumnos-listado.component.html',
  styleUrls: ['./alumnos-listado.component.scss']
})
export class AlumnosListadoComponent implements OnChanges, OnInit, OnDestroy {
  
  @Input() maximoAlumnos: number = 5;
  @Output() enviarNotas: EventEmitter<string> = new EventEmitter();
  
  valorMontoAlumno = 100;

  constructor() { 
    console.log('constructor');
  }
  
  ngOnChanges(changes: any): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}

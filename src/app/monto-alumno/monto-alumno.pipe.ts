import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'montoAlumno'
})
export class MontoAlumnoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown { //50 => S/. 50
    return 'S/.' + value;
  }

}

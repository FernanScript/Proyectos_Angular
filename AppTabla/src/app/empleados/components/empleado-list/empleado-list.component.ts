import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personas } from 'src/app/interface/personas';

@Component({
  selector: 'empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {

  index = 1;

  @Input()
  listPersonas : Personas[] = [
    {
      id : this.index++,
      nombre : 'Fernando',
      apellido : 'Trejos',
      sexo : 'Masculino',
      salario : 12000
    },
    {
      id : this.index++,
      nombre : 'Alexandra',
      apellido : 'Escobar',
      sexo : 'Femenino',
      salario : 10000
    },
    {
      id : this.index++,
      nombre : 'Jose',
      apellido : 'Sandoval',
      sexo : 'Masculino',
      salario : 9000
    },
    {
      id : this.index++,
      nombre : 'Arturo',
      apellido : 'Vazquez',
      sexo : 'Masculino',
      salario : 9000
    },
    {
      id : this.index++,
      nombre : 'Monica',
      apellido : 'Aguilar',
      sexo : 'Femenino',
      salario : 11000
    }
  ];

  // @Output()
  // emitirSexo : EventEmitter<string> = new EventEmitter();

  // emitirMensaje(sexo : string) {
  //   this.emitirSexo.emit(sexo);
  // }
}

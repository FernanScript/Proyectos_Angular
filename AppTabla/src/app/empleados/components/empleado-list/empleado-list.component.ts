import { Component } from '@angular/core';
import { Personas } from 'src/app/empleados/interface/personas';
import { personasService } from '../../services/personas.service';

@Component({
  selector: 'empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {

  radioSelect = 'todos';

  index = 1;

  constructor( private peopleService : personasService ) {}

  get listPersonas():Personas[] {
    return this.peopleService.getAllPersonas();
  }

  changeType(radio:string):void {
    this.radioSelect = radio;
  }

}

import { Component, Output, EventEmitter } from '@angular/core';
import { Personas } from 'src/app/empleados/interface/personas';
import { personasService } from 'src/app/empleados/services/personas.service';

@Component({
  selector: 'count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent {

  radioSelect = 'todos';

  @Output()
  radioChange = new EventEmitter<string>();

  constructor( private personaService : personasService ) {}

  get persona():Personas[] {
    return this.personaService.getAllPersonas();
  }

  get sexoPersonaF():Personas[] {
    return this.personaService.getFemenino();
  }

  get sexoPersonaM():Personas[] {
    return this.personaService.getMasculino();
  }

  changeRadioButton(): void {
    this.radioChange.emit(this.radioSelect);
  }

}

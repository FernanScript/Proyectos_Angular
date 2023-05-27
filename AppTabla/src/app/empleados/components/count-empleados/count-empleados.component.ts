import { Component, Input } from '@angular/core';
import { Personas } from 'src/app/interface/personas';
import { personasService } from 'src/app/services/personas.service';

@Component({
  selector: 'count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent {

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

}

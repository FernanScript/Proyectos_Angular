import { Injectable } from '@angular/core';
import { Personas } from '../interface/personas';

@Injectable({providedIn: 'root'})
export class personasService {

  index = 1;

  constructor() { }

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


  getFemenino():Personas[] {
    return this.listPersonas.filter( persona => persona.sexo === 'Femenino' );
  }

  getMasculino():Personas[] {
    return this.listPersonas.filter( persona => persona.sexo === 'Masculino' );
  }

  getAllPersonas():Personas[] {
    return this.listPersonas;
  }

}

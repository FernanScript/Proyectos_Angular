import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { CountEmpleadosComponent } from './components/count-empleados/count-empleados.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmpleadoListComponent,
    CountEmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    EmpleadoListComponent,
    CountEmpleadosComponent
  ]
})
export class EmpleadosModule { }

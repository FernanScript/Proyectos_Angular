import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'form-citas',
  templateUrl: './form-citas.component.html',
  styleUrls: ['./form-citas.component.css']
})
export class FormCitasComponent {
  public name = '';
  public date = '';
  public hour = '';
  public symptoms = '';
  @Input() formInvalid = false;
  @Output() submitCita = new EventEmitter();

  public addCita():void {
    if(this.name === '' || this.date === '' || this.hour === '' || this.symptoms === '') {
      this.formInvalid = true;
      return;
    }

    this.formInvalid = false;
    const cita = {
      name: this.name,
      date: this.date,
      hour: this.hour,
      symptoms: this.symptoms
    };
    this.submitCita.emit(cita);
    this.resetForm();
  }

  private resetForm():void {
    this.name = '';
    this.date = '';
    this.hour = '';
    this.symptoms = '';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas:any[] = [];

  public addCita(cita:[]) {
    console.log('soy el padre');
    console.log(cita);
    this.listCitas.push(cita);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01-bases';

  theme = 'Curso Angular';
  counter = 10;

  BtnNumber(value : number) : void {
    this.counter += value;
  }

  resetNumber() : void {
    this.counter = 10;
  }



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template : `
  <h3>Counter: {{counter}}</h3>

<button (click)="BtnNumber(1)">+</button>
<button (click)="resetNumber()">RESET</button>
<button (click)="BtnNumber(-1)">-</button>
  `
})
export class CounterComponent {


  counter = 10;

  BtnNumber(value : number) : void {
    this.counter += value;
  }

  resetNumber() : void {
    this.counter = 10;
  }
}

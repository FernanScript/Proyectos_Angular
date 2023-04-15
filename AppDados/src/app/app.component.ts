import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppDados';
  dadosLeft = '../assets/imagenes/1.png';
  dadosRight = '../assets/imagenes/5.png';
  num1 ?: number;
  num2 ?: number;

  TirarDados(): void{
    this.num1 = Math.round(Math.random() * 5) + 1;
    this.num2 = Math.round(Math.random() * 5) + 1;
    this.dadosLeft = '../assets/imagenes/'+ this.num1 + '.png';
    this.dadosRight = '../assets/imagenes/'+ this.num2 + '.png';
  }
}

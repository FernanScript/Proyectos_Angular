import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'masculino';

  constructor(private router: Router){}

  cambiarAltura(event: any){
    this.altura = event.target.value;
  }

  masculino(){
    this.sexo = 'masculino';
  }
  femenino(){
    this.sexo = 'femenino';
  }

  CalcularIMC(){
    const IMC = this.peso / Math.pow(this.altura/100, 2)
    this.router.navigate(['/resultado', IMC.toFixed(1)]);
  }

}
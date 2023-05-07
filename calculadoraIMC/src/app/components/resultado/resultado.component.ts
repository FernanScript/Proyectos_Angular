import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  imc : number;
  resultado : string;
  interpretacion : string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.imc = +route.snapshot.paramMap.get('valor')!; // hace un parseInt
  }

  ngOnInit(): void{
    this.getResultado();
  }

  getResultado(){
    if(this.imc >= 25){
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer más ejercicio';
    } else if(this.imc >= 18.5){
      this.resultado = 'Peso normal';
      this.interpretacion = 'Tienes un peso corporal normal. ¡Manténgase así!';
    }else {
      this.resultado = 'Bajo peso';
      this.interpretacion = 'Tienes un peso corporal debajo de lo normal. Intente aumentar su dieta';
    }
  }
}

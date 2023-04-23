import { Component } from '@angular/core';
import { Monedas } from 'src/app/Models/monedas';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {

  cantidad = 0;
  total = 0;
  quiero = 'EUR';
  tengo = 'USD';

  listaMonedas : Monedas[]=[
    {monedas:'USD'},
    {monedas:'EUR'},
    {monedas:'GBP'}
  ];

  convertirMonedas(){
    switch(this.tengo){
      case 'USD' :
        if(this.quiero === 'USD'){
          this.total = this.cantidad
        } else if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.91;
        } else if(this.quiero === 'GBP'){
          this.total = this.cantidad * 0.80;
        }
        break;
      case 'EUR' :
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.10
        } else if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        } else if(this.quiero === 'GBP'){
          this.total = this.cantidad * 0.88;
        }
        break;
      case 'GBP' :
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.24
        } else if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.13;
        } else if(this.quiero === 'GBP'){
          this.total = this.cantidad;
        }
        break;
    }
  }


}

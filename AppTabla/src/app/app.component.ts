import { Component } from '@angular/core';
import { personasService } from './services/personas.service';
import { Personas } from './interface/personas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppTabla';

  constructor ( private personasService:personasService ) {}


}

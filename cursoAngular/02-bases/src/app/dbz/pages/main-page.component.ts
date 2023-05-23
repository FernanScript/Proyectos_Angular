import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor( private dbzService : DbzService ) {}

  get character():Character[] {
    return [...this.dbzService.characters];
  }

  deleteCharacter(id:string):void {
    this.dbzService.deleteCharacterById(id);
  }

  addNewCharacter(character:Character):void {
    this.dbzService.addCharacter(character);
  }
}
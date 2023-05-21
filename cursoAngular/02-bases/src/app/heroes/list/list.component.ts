import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listHero:string[] = ['Spiderman','Ironman','Black Panther','Hulk','Thor','Aquaman'];
  deleteHero?:string;

  removeLastHero():void {
    this.deleteHero = this.listHero.pop();
  }
}

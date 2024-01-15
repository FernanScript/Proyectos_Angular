import { Component } from '@angular/core';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './not-page-found.component.html',
  styleUrls: ['./not-page-found.component.scss']
})
export class NotPageFoundComponent {
  public year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }
}

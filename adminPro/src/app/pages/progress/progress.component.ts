import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  public percentage1 = 25;
  public percentage2 = 50;

  get getPercentage1(): string {
    return `${this.percentage1}%`;
  }

  get getPercentage2(): string {
    return `${this.percentage2}%`;
  }
}

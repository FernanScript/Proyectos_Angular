import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  public percentage = 50;

  public operation(sign: string): void {
    switch (sign) {
      case '-':
        if (this.percentage === 0) {
          return;
        } else {
          this.percentage--;
        }
        break;

      case '+':
        if (this.percentage === 100) {
          return;
        } else {
          this.percentage++;
        }
        break;

      default:
        break;
    }
  }
}

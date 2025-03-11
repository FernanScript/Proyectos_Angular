import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.scss'
})
export class IncrementComponent implements OnInit {
  @Input('value') public percentage = 50;
  @Input() public btnClass = 'btn-success';

  @Output('value') public changePercentage = new EventEmitter<number>;

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  public operation(sign: string): void {
    switch (sign) {
      case '-':
        if (this.percentage === 0) {
          this.changePercentage.emit(0);
          return;
        } else {
          this.percentage -= 5;
          this.changePercentage.emit(this.percentage);
        }
        break;

      case '+':
        if (this.percentage === 100) {
          this.changePercentage.emit(100);
          return;
        } else {
          this.percentage += 5;
          this.changePercentage.emit(this.percentage);
        }
        break;

      default:
        break;
    }
  }

  public onChange(newValue: number): void {
    if (newValue >= 100) {
      this.percentage = 100;
    } else if (newValue <= 0) {
      this.percentage = 0;
    } else {
      this.percentage = newValue;
    }
    this.changePercentage.emit(this.percentage);
  }
}

import { Component } from '@angular/core';
import { Chart, ChartData, ChartType, registerables } from 'chart.js';

// Chart.register(...registerables);

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {
  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}

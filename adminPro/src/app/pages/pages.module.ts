import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    NotPageFoundComponent,
    PagesComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    NotPageFoundComponent,
    PagesComponent,
    ProgressComponent,
  ]
})
export class PagesModule { }

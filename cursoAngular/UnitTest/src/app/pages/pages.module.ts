
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NavModule } from '../nav/nav.module';
import { ReduceTextPipe } from './reduce-text/reduce-text.pipe';
import { ConfirmationDialogModule } from '../dialogs/confirmation-dialog/confirmation-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NavModule,
    PagesRoutingModule,
    MatDialogModule,
    ConfirmationDialogModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    CartComponent,
    ReduceTextPipe,
  ],
  exports: [
    PagesComponent,
  ]
})
export class PagesModule { }


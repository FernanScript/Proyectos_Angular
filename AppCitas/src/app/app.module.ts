import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormCitasComponent } from './AppCitas/form-citas/form-citas.component';
import { RegistroCitasComponent } from './AppCitas/registro-citas/registro-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCitasComponent,
    RegistroCitasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

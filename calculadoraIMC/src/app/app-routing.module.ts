import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'resultado/:valor', component: ResultadoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

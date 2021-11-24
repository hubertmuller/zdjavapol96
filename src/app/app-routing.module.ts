import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BladComponent } from './blad/blad.component';
import { FormularzComponent } from './formularz/formularz.component';
import { ListaComponent } from './lista/lista.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { StopkaComponent } from './stopka/stopka.component';

const routes: Routes = [
  { path: 'lista', component: ListaComponent},
  { path: 'dodaj', component: FormularzComponent},
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: '**', component: BladComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

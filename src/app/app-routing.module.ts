import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BladComponent } from './blad/blad.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { StopkaComponent } from './stopka/stopka.component';

const routes: Routes = [
  { path: 'stopka', component: StopkaComponent},
  { path: 'naglowek', component: NaglowekComponent},
  { path: '', redirectTo: '/naglowek', pathMatch: 'full' },
  { path: '**', component: BladComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

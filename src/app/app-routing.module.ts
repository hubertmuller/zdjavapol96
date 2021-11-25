import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BladComponent } from './blad/blad.component';
import { DeleteComponent } from './delete/delete.component';
import { FormularzComponent } from './formularz/formularz.component';
import { ListaComponent } from './lista/lista.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { StopkaComponent } from './stopka/stopka.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'lista', component: ListaComponent},
  { path: 'dodaj', component: FormularzComponent},
  { path: 'update/:id', component: UpdateComponent},
  { path: 'delete/:id', component: DeleteComponent},
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: '**', component: BladComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

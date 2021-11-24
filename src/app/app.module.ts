import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { StopkaComponent } from './stopka/stopka.component';
import { BladComponent } from './blad/blad.component';
import { ListaComponent } from './lista/lista.component';
import { FormularzComponent } from './formularz/formularz.component';

@NgModule({
  declarations: [
    AppComponent,
    NaglowekComponent,
    StopkaComponent,
    BladComponent,
    ListaComponent,
    FormularzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

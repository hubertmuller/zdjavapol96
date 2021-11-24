import { Injectable } from '@angular/core';

export interface Czlowiek {
  id: number;
  imie: string;
  nazwisko: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  loadLudzie(): Czlowiek[] {
    return [ 
      {id: 1, imie: 'Adam', nazwisko: 'Nowak'}, 
      {id: 2, imie: 'Tomasz', nazwisko: 'Kowalski'},
      {id: 3, imie: 'Jan', nazwisko: 'Kowalski'}
    ];
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Czlowiek {
  id: number;
  imie: string;
  nazwisko: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  loadLudzie(): Observable<Czlowiek[]> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.get<Czlowiek[]>(
      'http://localhost:3200', 
      {headers: myHeaders}
    );
    
    /*return [ 
      {id: 1, imie: 'Adam', nazwisko: 'Nowak'}, 
      {id: 2, imie: 'Tomasz', nazwisko: 'Kowalski'},
      {id: 3, imie: 'Jan', nazwisko: 'Kowalski'}
    ];*/
  }

  constructor(private http:HttpClient) { 

  }
}

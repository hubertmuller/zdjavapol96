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

  constructor(private http: HttpClient) {}

  loadLudzie(): Observable<Czlowiek[]> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.get<Czlowiek[]>(
      'http://localhost:3200', 
      {headers: myHeaders}
    );
  }

  deleteCzlowiek(id: number): Observable<any> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.delete<any>(
      'http://localhost:3200/czlowiek/' + id,
      {headers: myHeaders}
    );
  }


}

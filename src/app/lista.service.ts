import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';


export interface Czlowiek {
  id?: number;
  imie: string;
  nazwisko: string;
  plec: string;
  komentarze: string;
  typ: string;
  zyczenia: {
    a: boolean;
    b: boolean;
  }
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
      environment.endpointUrl + '/lista', 
      {headers: myHeaders}
    );
  }

  deleteCzlowiek(id: number): Observable<any> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.delete<any>(
      environment.endpointUrl + '/czlowiek/' + id,
      {headers: myHeaders}
    );
  }

  zapiszCzlowiek(czlowiek: Czlowiek): Observable<any> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.post<any>(
      environment.endpointUrl + '/czlowiek',
      czlowiek,
      {headers: myHeaders}
    );
  }


}

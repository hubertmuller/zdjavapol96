import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KalkulatorService {
  private vat = 0.22;

  constructor() { }

  obliczVat(kwota: number): number {
    return kwota * this.vat;

  }
}

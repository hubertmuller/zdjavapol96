import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KalkulatorService } from '../kalkulator.service';

@Component({
  selector: 'app-naglowek',
  templateUrl: './naglowek.component.html',
  styleUrls: ['./naglowek.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NaglowekComponent implements OnInit {

  public imie: string;
  private kalkulator: KalkulatorService;

  //constructor(private kalkulator: KalkulatorService) { 
  constructor(kalkulator: KalkulatorService) { 
    let nazwisko = 'Adam';
    this.kalkulator = kalkulator;
    this.imie = `${nazwisko} (vat=${kalkulator.obliczVat(100)})`;
  }

  ngOnInit(): void {
  }

}

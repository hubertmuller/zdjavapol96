import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListaService, Czlowiek } from '../lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

  public ludzie: Czlowiek[];

  constructor(private listaService: ListaService) { 
    this.ludzie = [];
  }

  ngOnInit(): void {
    console.log('ngoninit');
    this.ludzie = this.listaService.loadLudzie();
  }

  ngOnDestroy(): void {
    console.log('ngondestroy');
  }

}

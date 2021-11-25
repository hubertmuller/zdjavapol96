import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListaService, Czlowiek } from '../lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

  public ludzie: Czlowiek[] | null;
  private listaSub: Subscription;

  constructor(private listaService: ListaService) {
    console.log('constructor');
    this.ludzie = null;
    this.listaSub = this.listaService.loadLudzie().subscribe((ludzie) => {
      this.ludzie = ludzie;
    });
  }

  ngOnInit(): void {
    console.log('ngoninit');

  }

  ngOnDestroy(): void {
    this.listaSub.unsubscribe();
    console.log('ngondestroy');
  }

}

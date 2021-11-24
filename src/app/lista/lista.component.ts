import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListaService, Czlowiek } from '../lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

  public ludzie: Czlowiek[] | null;

  constructor(private listaService: ListaService) { 
    this.ludzie = null;
  }

  ngOnInit(): void {
    console.log('ngoninit');
    this.listaService.loadLudzie().subscribe( (ludzie) => {
      this.ludzie = ludzie;
    } 

    )
  }

  ngOnDestroy(): void {
    console.log('ngondestroy');
  }

}

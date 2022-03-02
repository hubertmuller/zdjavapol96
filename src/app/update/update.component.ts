import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularzComponent } from '../formularz/formularz.component';
import { Czlowiek, ListaService } from '../lista.service';

@Component({
  selector: 'app-update',
  templateUrl: './../formularz/formularz.component.html',
  styleUrls: ['./../formularz/formularz.component.scss']
})
export class UpdateComponent extends FormularzComponent implements OnInit {

  // uwaga ten komponent dziedziczy i uzywa templatow komponentu formularz (Celowo aby nie powtarzeac kodu)
  override addMode = false;
  czlowiekId = 0;

  public override zapisz(): void {
      //nadpisujemy metode z klasy bazowej.
      //tym razem aktualizujemy wiec uzyjemy id

      //zwroccie uwage na podobienstwo metody zapisz w bazowej i tej klasie
      //tu mozliwa jest optymalizacja ilosci kodu
      const forma: { [p: string]: AbstractControl } = this.forma.controls;

      const czlowiek: Czlowiek = {
        id: this.czlowiekId,
        imie: forma['imie'].value,
        nazwisko: forma['nazwisko'].value,
        komentarze: forma['komentarze'].value,
        plec: forma['plec'].value,
        typ: forma['typ'].value,
        zyczenia: {
          a: forma['zyczenia'].value.a,
          b: forma['zyczenia'].value.b
        }
      }
  
      this.listaService.updateCzlowiek(czlowiek).subscribe( (_) => {
        console.log('udalo sie zapisac');
        this.router.navigate(['/']);
      }
      )
  }

  constructor (listaService: ListaService,
    router: Router,
    private route: ActivatedRoute) {
      //zawolanie klasy bazowej
      super(listaService, router);

      //subskrypcja na parametr
      this.route.params.subscribe(
        (params) => {
          //gdy mamy subskrypcja pobieramy id
          this.czlowiekId = params['id'];
          //...i ladujemy definicje czlowieka o zadanym id
          this.listaService.loadCzlowiek(this.czlowiekId).subscribe( (czlowiek) => {
            //gdy zaladujemy dane czlowieka, dodajemy zaladowane dane do pol formy:
            this.forma.controls['imie'].setValue(czlowiek.imie);
            this.forma.controls['nazwisko'].setValue(czlowiek.nazwisko);
            this.forma.controls['komentarze'].setValue(czlowiek.komentarze);
            this.forma.controls['plec'].setValue(czlowiek.plec);
            //zwroccie uwage jak w select w template zdefiniowalem wartosci dla typ - one sa tam stringami w ekstra pojedynczych cudzyslowach
            this.forma.controls['typ'].setValue(czlowiek.typ);
            this.forma.controls['zyczenia'].setValue(czlowiek.zyczenia);
          });
        }
      )

  }

}

import { Component, OnInit } from '@angular/core';
import { FormularzComponent } from '../formularz/formularz.component';

@Component({
  selector: 'app-update',
  templateUrl: './../formularz/formularz.component.html',
  styleUrls: ['./../formularz/formularz.component.scss']
})
export class UpdateComponent extends FormularzComponent implements OnInit {

  // uwaga ten komponent dziedziczy i uzywa templatow komponentu formularz (Celowo aby nie powtarzeac kodu)
  override addMode = false;

  public override zapisz(): void {
      //nadpisujemy metode z klasy bazowej.
      //tym razem aktualizujemy wiec uzyjemy id
      
  }

}

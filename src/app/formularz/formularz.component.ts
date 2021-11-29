import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit {

  public forma: FormGroup = new FormGroup ( 
    {
        imie: new FormControl( 'Jan', {
          validators: [Validators.minLength(2), Validators.required],
          updateOn: "change"
        }),
        nazwisko: new FormControl( 'Kowalski', {
          validators: [Validators.minLength(2), Validators.maxLength(30), Validators.required],
          updateOn: "change"
        }),
        plec: new FormControl('', {
          validators: [Validators.required],
          updateOn: "blur"
        }),
        zyczenia: new FormGroup({
          a: new FormControl(true),
          b: new FormControl(false)
        }
        )
    }
  );

  constructor() { 

  }

  ngOnInit(): void {
  }

}

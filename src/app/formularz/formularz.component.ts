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
          validators: [Validators.minLength(2)],
          updateOn: "blur"
        }),
        nazwisko: new FormControl( 'Jan', {
          validators: [Validators.minLength(2), Validators.maxLength(30)],
          updateOn: "change"
        })
    }
  );

  constructor() { 

  }

  ngOnInit(): void {
  }

}

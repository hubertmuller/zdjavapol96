import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Czlowiek, ListaService } from '../lista.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit, OnDestroy {

  private imieSub: Subscription;

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
        plec: new FormControl(null, {
          validators: [Validators.required],
          updateOn: "change"
        }),
        zyczenia: new FormGroup({
          a: new FormControl(true),
          b: new FormControl(false)
        }
        ),
        typ: new FormControl(null, Validators.required),
        komentarze: new FormControl("", Validators.maxLength(120))
    }
  );

  constructor(private listaService: ListaService,
    private router: Router) { 
    this.imieSub = this.forma.controls['imie'].valueChanges.subscribe( (value) => {
      if (value === "jan") {
        this.forma.controls['plec'].setValue('m');
      } else if (value === 'ala') {
        this.forma.controls['plec'].setValue('k');
      } 
    })
  }

  ngOnInit(): void {

  }

  public kasuj(): void {
    this.forma.controls['imie'].setValue('');
    this.forma.controls['nazwisko'].setValue('');
  } 

  public zapisz(): void {
    const forma: { [p: string]: AbstractControl } = this.forma.controls;

    const czlowiek: Czlowiek = {
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

    this.listaService.zapiszCzlowiek(czlowiek).subscribe( (_) => {
      console.log('udalo sie zapisac');
      this.router.navigate(['/']);
    }
    )

  }

  ngOnDestroy(): void {
    this.imieSub.unsubscribe();
  }
}

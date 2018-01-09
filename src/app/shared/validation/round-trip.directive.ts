import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: 'form[roundTrip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundTripDirective,
      multi: true
    }
  ]
})
export class RoundTripDirective implements Validator{
  constructor() { }

  validate(c: AbstractControl): object {

    let formGroup = c as FormGroup;

    let from = formGroup.controls['from'];
    let to = formGroup.controls['to'];

    if (!from || !to) {
      return { }
    }

    if (from.value !== to.value) {
      return { }
    }

    return {
      roundTrip: true
    }

  }

}

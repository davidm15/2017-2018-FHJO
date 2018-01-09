import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]', // <input city>
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true
    }
  ]
})
export class CityValidatorDirective implements Validator{

  @Input() city: string[];

  constructor() { }

  validate(c: AbstractControl): object {

    let currentCity = c.value;
    let allowed = this.city;

    if(allowed.indexOf(currentCity) > -1) {
      return {};
    }

    return {
      city: {
        allowed: allowed,
        current: currentCity,
        reason: 42,
        tryAgin: 2020
      }
    }

  }

}

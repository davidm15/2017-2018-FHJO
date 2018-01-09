import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FlightService } from '../../flight-booking/flight-search/flight.service';

@Directive({
  selector: 'input[asyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityValidatorDirective,
      multi: true
    }
  ]
})
export class AsyncCityValidatorDirective implements  AsyncValidator {

  constructor(private flightService: FlightService) {

  }

  validate(c: AbstractControl): Observable<object> {

    let city = c.value;

    return this.flightService.find(city, '').map(
      flights => {
        if (flights.length > 0) return {};
        return { asyncCity: true };
      }
    );

  }




}

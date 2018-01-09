import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';
import { CityValidatorDirective } from '../validation/city-validator.directive';
import { RoundTripDirective } from '../validation/round-trip.directive';
import { AsyncCityValidatorDirective } from '../validation/async-city-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe, CityValidatorDirective, RoundTripDirective, AsyncCityValidatorDirective
  ],
  exports: [
    CityPipe, CityValidatorDirective, RoundTripDirective, AsyncCityValidatorDirective
  ]
})
export class SharedModule { }

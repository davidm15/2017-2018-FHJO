import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { CityPipe } from './shared/pipes/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { CityValidatorDirective } from './shared/validation/city-validator.directive';
import { RoundTripDirective } from './shared/validation/round-trip.directive';
import { AsyncCityValidatorDirective } from './shared/validation/async-city-validator.directive';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlightBookingModule,
    RouterModule.forRoot(APP_ROUTES),
    OAuthModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent,
    BasketComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    //FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


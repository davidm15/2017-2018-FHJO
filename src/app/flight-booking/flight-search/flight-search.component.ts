import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  };

  constructor(private flightService: FlightService) {
    console.debug('FlightSearchComponent bekommt FlightService', flightService);
  }

  ngOnInit() {
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

  search(): void {
    this.flightService
        .find(this.from, this.to)
        .subscribe(
          (flights) => { this.flights = flights; },
          (err) => { console.error('Error loading flights', err); }
        );
  }
}

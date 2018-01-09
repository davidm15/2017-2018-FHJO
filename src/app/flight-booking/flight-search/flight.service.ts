
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class FlightService {

  constructor(
    private httpClient: HttpClient,
    private oauthService: OAuthService

  ) {
    console.debug('FlightService bekommt HttpClient');
  }

  find(from: string, to: string): Observable<Flight[]> {

    let url = 'http://www.angular.at/api/flight';

    let params = new HttpParams()
      .set('from', from)
      .set('to', to);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', this.oauthService.authorizationHeader());



    return this.httpClient.get<Flight[]>(url, { params, headers });
  }

}

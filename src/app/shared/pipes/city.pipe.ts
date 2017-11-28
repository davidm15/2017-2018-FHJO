import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: any, fmt: any): any {
    let long, short;

    switch(value) {
      case 'Graz':
        long = 'Flughafen Graz Thalerhof';
        short = 'GRZ';
        break;
      case 'Hamburg':
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        short = 'HAM';
        break;
      default:
        short = long = value;
    }

    if (fmt ==='short') return short;
    return long;
  }

}

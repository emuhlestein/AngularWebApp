import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EarthquakeResolved } from './earthquake';
import { EarthquakeService } from './earthquake.service';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeResolver implements Resolve<EarthquakeResolved> {

  constructor(private earthquakeService: EarthquakeService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<EarthquakeResolved> {

    return this.earthquakeService.getEarthquakes(6, 7, '2014-01-01', '2016-01-02')
      .pipe(
        map(earthquakes => ({ earthquakes: earthquakes })),
        catchError(error => {
          const message = `Error getting earthquake data: ${error}`;
          console.log(message);
          return of({ earthquakes: null, error: message });
        })
      )
  }
}

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

    const minMag = +route.paramMap.get('minMag');
    const maxMag = +route.paramMap.get('maxMag');
    const startDate = route.paramMap.get('startDate');
    const endDate = route.paramMap.get('endDate');

    console.log('In EarthquakeResolver', startDate, endDate);

    return this.earthquakeService.getEarthquakes(minMag, maxMag, startDate, endDate)
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

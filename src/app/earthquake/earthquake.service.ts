import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Earthquake } from './earthquake'
import { EarthquakeData } from './earthquakedata'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs/operators';
import { SearchParams } from './search-params';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {

  private earthquakeSubject = new BehaviorSubject<Earthquake[]>([]);
  earthquakes$ = this.earthquakeSubject.asObservable();

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe) { }

  onSearchOld(minMag: number, maxMag: number, stateDate: string, endDate: string) {
    console.log('opnSearch');
    maxMag = maxMag + 0.999;
    const url = this.createUrl(minMag, maxMag, stateDate, endDate);
    this.http.get<EarthquakeData>(url).subscribe(response => {
      let earthquakes = new Array<Earthquake>();
      for (let index in response.features) {
        let props = response.features[index].properties;
        let earthquake = {
          location: props.place,
          magnitude: props.mag,
          date: this.getFormattedDate(props.time),
          url: props.url,
          info: ''
        };
        earthquakes[index] = earthquake;
      }
      // this.earthquakes.next(earthquakes);
    });
  }

  getEarthquakes(minMag: number, maxMag: number, stateDate: string, endDate: string): Observable<Earthquake[]> {
    console.log('getEarthquakes');
    maxMag = maxMag + 0.999;

    const url = this.createUrl(minMag, maxMag, stateDate, endDate);
    return this.http.get<EarthquakeData>(url)
      .pipe(
        map(data => data.features.map(feature => ({
          location: feature.properties.place,
          magnitude: feature.properties.mag,
          date: this.getFormattedDate(feature.properties.time),
          url: feature.properties.url,
          info: ''
        }) as Earthquake))
      );
  }

  onSearch(minMag: number, maxMag: number, stateDate: string, endDate: string) {
    console.log('onSearch');
    maxMag = maxMag + 0.999;

    const url = this.createUrl(minMag, maxMag, stateDate, endDate);
    const data$ = this.http.get<EarthquakeData>(url)
      .pipe(
        map(data => data.features.map(feature => ({
          location: feature.properties.place,
          magnitude: feature.properties.mag,
          date: this.getFormattedDate(feature.properties.time),
          url: feature.properties.url,
          info: ''
        }) as Earthquake))
      );

    data$.subscribe(data => {
      this.earthquakeSubject.next(data);
    });
  }

  getFormattedDate(numSeconds: number): string {
    var date = new Date(numSeconds);
    return this.datePipe.transform(date, "MM-dd-yyyy");
  }

  private createUrl(minMag: number, maxMag: number, stateDate: string, endDate: string) {
    const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?';
    const format = 'format=geojson';
    let url = `${baseUrl}${format}`;
    url = `${url}&starttime=${stateDate}&endtime=${endDate}`;
    url = `${url}&minmagnitude=${minMag}`;
    url = `${url}&maxmagnitude=${maxMag}`;
    return url;
  }
}

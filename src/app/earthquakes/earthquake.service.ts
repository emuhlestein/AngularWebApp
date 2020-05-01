import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Earthquake } from './earthquake'
import { EarthquakeData } from './earthquakedata'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { ProgressBarService } from '../progressbar/progressbar.service';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class EarthquakeService {

  private earthquakeSubject = new BehaviorSubject<Earthquake[]>([]);
  earthquakes$ = this.earthquakeSubject.asObservable();

  constructor(
    private progressBarService: ProgressBarService,
    private http: HttpClient,
    private datePipe: DatePipe) { }

  onSearchOld(minMag: number, maxMag: number, stateDate: string, endDate: string) {
    console.log('opnSearch');
    maxMag = maxMag + 0.999;
    const url = this.createUrl(minMag, maxMag, stateDate, endDate);
    this.progressBarService.startProgressBar();
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
      this.progressBarService.stopProgressBar();
      // this.earthquakes.next(earthquakes);
    });
  }

  getEarthquakes(minMag: number, maxMag: number, stateDate: string, endDate: string): Observable<Earthquake[]> {

    maxMag = maxMag + 0.999;

    const url = this.createUrl(minMag, maxMag, stateDate, endDate);
    this.progressBarService.startProgressBar();
    return this.http.get<EarthquakeData>(url)
      .pipe(
        tap(stuff => console.log('stuff', stuff)),
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

    maxMag = maxMag + 0.999;

    const url = this.createUrl(minMag, maxMag, stateDate, endDate);
    this.progressBarService.startProgressBar();
    const data$ = this.http.get<EarthquakeData>(url)
      .pipe(
        tap(stuff => console.log('stuff', stuff)),
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

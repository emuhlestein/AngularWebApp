import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Earthquake } from './earthquake'
import { EarthquakeData } from './earthquakedata'
import { BehaviorSubject, Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { ProgressBarService } from './progressbar/progressbar.service';

@Injectable()
export class EarthquakeService {

  private earthquakes: Subject<Earthquake[]> = new BehaviorSubject<Earthquake[]>(null);

  constructor(
    private progressBarService: ProgressBarService,
    private http: HttpClient,
    private datePipe: DatePipe) { }

  getEarthquakes(): Subject<Earthquake[]> {
    return this.earthquakes;
  }

  onSearch(minMag: number, maxMag: number, stateDate: string, endDate: string) {
    console.log('opnSearch');
    maxMag = maxMag + 0.999;
    let baseUrl: string = 'https://earthquake.usgs.gov/fdsnws/event/1/query?';
    let format: string = 'format=geojson';
    let url: string = `${baseUrl}${format}`;
    url = `${url}&starttime=${stateDate}&endtime=${endDate}`;
    url = `${url}&minmagnitude=${minMag}`;
    url = `${url}&maxmagnitude=${maxMag}`;
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
      this.earthquakes.next(earthquakes);
    });
  }

  getFormattedDate(numSeconds: number): string {
    var date = new Date(numSeconds);
    return this.datePipe.transform(date, "MM-dd-yyyy");
  }
}

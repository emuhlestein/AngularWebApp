import { EventEmitter, Injectable, Output } from '@angular/core';
import { Earthquake } from './earthquake'
import { EarthquakeData } from './earthquakedata'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { MessageService } from './message.service'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {
  minMagnitude = 6;
  maxMagnitude = 8;
  @Output() earthquakes: EventEmitter<Event> = new EventEmitter();
  @Output() search: EventEmitter<Event> = new EventEmitter();

  constructor(private messageService: MessageService, private http: HttpClient) { }

  onSearch() {
    this.search.emit();
  }     

  getEarthquakes() {
    let baseUrl: string = 'https://earthquake.usgs.gov/fdsnws/event/1/query?';
    let format: string = 'format=geojson';
    let url: string = `${baseUrl}${format}`;
    url = `${url}&starttime=2014-01-01&endtime=2016-01-02`;
    url = `${url}&minmagnitude=${this.minMagnitude}`;
    url = `${url}&maxmagnitude=${this.maxMagnitude}`;
   
    console.log(`Searching: ${url}`);
    return this.http.get<EarthquakeData>(url);
  }

  setMinMagnitude(minMagnitude) {
    this.minMagnitude = minMagnitude;
  }

  setMaxMagnitude(maxMagnitude) {
    this.maxMagnitude = maxMagnitude;
  }
}

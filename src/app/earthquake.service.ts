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

  getEarthquakesOld() {
    // TODO: send message _after_ fetching the earthquakes
    this.messageService.add('EarthquakeService: fetched earthquakes')
    let list: Array<Earthquake> = new Array()
    let earthquake = new Earthquake(7, "New York")
    list.push(earthquake)
    earthquake = new Earthquake(7.2, "California")
    list.push(earthquake)
    earthquake = new Earthquake(8.2, "Salt Lake City")
    list.push(earthquake)
    //return of(list)
    let obs: Observable<string> = new Observable<string>();
    let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2016-01-02&minmagnitude=6';
    return this.http.get<EarthquakeData>(url);
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

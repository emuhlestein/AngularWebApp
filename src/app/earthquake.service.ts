import { Injectable } from '@angular/core';
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

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getEarthquakes() {
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
}

import { Injectable } from '@angular/core';
import { Earthquake } from './earthquake'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getEarthquakes(): Observable<Earthquake[]> {
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
    return this.http.get<Earthquake[]>("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2016-01-02&minmagnitude=6");
  }
}

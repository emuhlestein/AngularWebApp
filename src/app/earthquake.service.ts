import { Injectable } from '@angular/core';
import { Earthquake } from './earthquake'

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {

  constructor() { }

  getEarthquakes(): Array<Earthquake> {
    let list: Array<Earthquake> = new Array()
    let earthquake = new Earthquake(7, "New York")
    list.push(earthquake)
    earthquake = new Earthquake(7.2, "California")
    list.push(earthquake)
    earthquake = new Earthquake(8.2, "Salt Lake City")
    list.push(earthquake)
    return list
  }
}

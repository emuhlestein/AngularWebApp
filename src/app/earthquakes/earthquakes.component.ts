import { Component, OnInit } from '@angular/core';
import { Earthquake } from '../earthquake'
import { EarthquakeService } from '../earthquake.service';

@Component({
  selector: 'app-earthquakes',
  templateUrl: './earthquakes.component.html',
  styleUrls: ['./earthquakes.component.css']
})
export class EarthquakesComponent implements OnInit {

  earthquake: Earthquake = new Earthquake(8.0, 'New York');
  earthquakes: Earthquake[];

  constructor(private earthquakeService: EarthquakeService) { }

  ngOnInit() {
    this.getEarthquakes();
  }

  getEarthquakes(): void {
    this.earthquakeService.getEarthquakes().subscribe(earthquakes => console.log(earthquakes))
  }
}

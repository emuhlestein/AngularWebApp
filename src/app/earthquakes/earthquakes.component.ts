import { Component, OnInit } from '@angular/core';
import { Earthquake } from '../earthquake'
import { EarthquakeData } from '../earthquakedata'
import { Feature } from '../earthquakedata'
import { EarthquakeService } from '../earthquake.service';

@Component({
  selector: 'app-earthquakes',
  templateUrl: './earthquakes.component.html',
  styleUrls: ['./earthquakes.component.css']
})
export class EarthquakesComponent implements OnInit {

  earthquake: Earthquake = new Earthquake(8.0, 'New York');
  earthquakes: Feature[];

  constructor(private earthquakeService: EarthquakeService) { }

  ngOnInit() {
    this.getEarthquakes();
  }

  getEarthquakes(): void {
    this.earthquakeService.getEarthquakes().subscribe(response => {
      //console.log(response);
      this.earthquakes = response.features;
    });
  }
}

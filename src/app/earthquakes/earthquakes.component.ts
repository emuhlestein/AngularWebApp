import { Component, OnInit } from '@angular/core';
import { Earthquake } from '../earthquake'
import { Feature } from '../earthquakedata'
import { EarthquakeService } from '../earthquake.service';
import { PromiseType } from 'protractor/built/plugins';
import { fillProperties } from '@angular/core/src/util/property';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-earthquakes',
  templateUrl: './earthquakes.component.html',
  styleUrls: ['./earthquakes.component.css']
})
export class EarthquakesComponent implements OnInit {

  earthquakes: Earthquake[];
  cols: any[];
  rowData: Earthquake;

  constructor(private earthquakeService: EarthquakeService) { }

  ngOnInit() {
    this.getEarthquakes();
    // this.earthquakeService.search.subscribe(event => {
    //   this.getEarthquakes();
    // });

    this.cols = [
      {field: 'location', header: 'Location', type: 'string', width: '30%'},
      {field: 'magnitude', header: 'Magnitude', type: 'number', width: '10%'},
      {field: 'url', header: 'More', type: 'string', width: '60%'}
    ];   
  }

  getEarthquakes(): void {
    this.earthquakeService.getEarthquakes().subscribe(response => {
      console.log(response);
      this.earthquakes = new Array<Earthquake>();
      for(let index in response.features) {
        let props = response.features[index].properties;
        let earthquake = {
          location: props.place,
          magnitude: props.mag,
          url: props.url
        };
        console.log(earthquake.url);
        this.earthquakes[index] = earthquake;
      }
    });
  }
}

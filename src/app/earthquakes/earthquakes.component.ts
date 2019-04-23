import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
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

  pageSize: number = 16;
  earthquakes: Earthquake[];
  cols: any[];
  rowData: Earthquake;

  constructor(
    private earthquakeService: EarthquakeService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.getEarthquakes();
    // this.earthquakeService.search.subscribe(event => {
    //   this.getEarthquakes();
    // });

    this.cols = [
      {field: 'location', header: 'Location', type: 'string', width: '30%'},
      {field: 'magnitude', header: 'Magnitude', type: 'number', width: '15%'},
      {field: 'date', header: 'Date', type: 'number', width: '15%'},
      {field: 'url', header: 'More', type: 'string', width: '40%'}
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
          date: this.getFormattedDate(props.time),
          url: props.url
        };
        console.log(earthquake.url);
        this.earthquakes[index] = earthquake;
      }
    });
  }

  getFormattedDate(numSeconds: number): string {
    var date = new Date(numSeconds);
    return this.datePipe.transform(date, "MM-dd-yyyy")
  }
}

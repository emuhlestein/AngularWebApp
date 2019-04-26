import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Earthquake } from '../earthquake'
import { EarthquakeService } from '../earthquake.service';

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
    this.earthquakeService.onSearch(6, 7, '2014-01-01', '2016-01-02');
    this.earthquakeService.getEarthquakes().subscribe(result => {
      this.earthquakes = result;
    });

    this.cols = [
      {field: 'location', header: 'Location', type: 'string', width: '30%'},
      {field: 'magnitude', header: 'Magnitude', type: 'number', width: '15%'},
      {field: 'date', header: 'Date', type: 'number', width: '15%'},
      {field: 'url', header: 'More', type: 'string', width: '40%'}
    ];   
  }

  getFormattedDate(numSeconds: number): string {
    var date = new Date(numSeconds);
    return this.datePipe.transform(date, "MM-dd-yyyy");
  }
}

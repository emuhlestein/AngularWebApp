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
  loading = false;

  constructor(
    private earthquakeService: EarthquakeService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.loading = true;
    this.earthquakeService.onSearch(6, 7, '2014-01-01', '2016-01-02');
    this.earthquakeService.getEarthquakes().subscribe(result => {
      this.loading = false;
      this.earthquakes = result;
    });

    this.cols = [
      {field: 'location', header: 'Location', type: 'string', width: '30%'},
      {field: 'magnitude', header: 'Magnitude', type: 'number', width: '25%'},
      {field: 'date', header: 'Date', type: 'date', width: '25%'},
      {field: 'url', header: 'More Info', type: 'string', width: '20%'}
    ];   
  }

  getFormattedDate(numSeconds: number): string {
    var date = new Date(numSeconds);
    return this.datePipe.transform(date, "MM-dd-yyyy");
  }

  customSort(event) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
          result = -1;
      else if (value1 != null && value2 == null)
          result = 1;
      else if (value1 == null && value2 == null) {
          result = 0;
      } else if (event.field === 'date') {
        let date1 = new Date(value1).getTime();
        let date2 = new Date(value2).getTime();
        result = (date1 < date2) ? -1 : (date1 > date2) ? 1 : 0;
     }
      else if (typeof value1 === 'string' && typeof value2 === 'string') {
        result = value1.localeCompare(value2);
      } else {
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
      }

      return (event.order * result);
    });
  }

}

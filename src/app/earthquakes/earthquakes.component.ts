import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Earthquake } from '../earthquake'
import { EarthquakeService } from '../earthquake.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-earthquakes',
  templateUrl: './earthquakes.component.html',
  styleUrls: ['./earthquakes.component.scss']
})
export class EarthquakesComponent implements OnInit {

  pageSize: number = 10;
  earthquakes = new MatTableDataSource<Earthquake>();
  displayedColumns: string[] = ['location', 'magnitude', 'date', 'url'];
  cols: any[];
  rowData: Earthquake;
  loading = false;
  length = 0;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private earthquakeService: EarthquakeService,
    private datePipe: DatePipe) { }

  ngOnInit() {

    this.earthquakes.paginator = this.paginator;
    this.loading = true;
    this.earthquakeService.onSearch(6, 7, '2014-01-01', '2016-01-02');
    this.earthquakeService.earthquakes$.subscribe(result => {
      this.loading = false;
      this.length = result ? result.length : 0;
      this.paginator.length = this.length;
      this.paginator.pageSize = this.pageSize;
      this.paginator.pageIndex = 0;
      this.earthquakes = new MatTableDataSource<Earthquake>(result);
    });

    this.cols = [
      { field: 'location', header: 'Location', type: 'string' },
      { field: 'magnitude', header: 'Magnitude', type: 'number' },
      { field: 'date', header: 'Date', type: 'date' },
      { field: 'url', header: 'More Info', type: 'string' }
    ];
  }

  onPageEvent($event) {
    console.log($event);
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

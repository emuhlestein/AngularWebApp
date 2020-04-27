import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import { EarthquakeService } from '../earthquake.service';
import { Earthquake } from '../earthquake';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<Earthquake>;
  tempPaginator: MatPaginator;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['location', 'magnitude', 'date', 'info'];

  constructor(private earthquakeService: EarthquakeService) { }
  ngOnInit(): void {
    this.earthquakeService.getEarthquakes().subscribe(earthquakes => {
      this.dataSource = new MatTableDataSource<Earthquake>(earthquakes);
      this.dataSource.paginator = this.paginator;
    });
    this.earthquakeService.onSearch(6, 7, '2014-01-01', '2016-01-02');

  }

  ngAfterViewInit() {
    this.tempPaginator = this.paginator;
  }

  moreInfo(element) {
    console.log(element);
  }
}

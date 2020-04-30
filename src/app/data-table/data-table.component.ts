import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import { EarthquakeService } from '../earthquake.service';
import { Earthquake, EarthquakesResolved } from '../earthquake';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: DataTableDataSource;
  tempPaginator: MatPaginator;
  tempSort: MatSort;
  resolvedData: EarthquakesResolved;
  ds: MatTableDataSource<Earthquake>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['location', 'magnitude', 'date', 'info'];

  constructor(
    private route: ActivatedRoute,
    private earthquakeService: EarthquakeService) {
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.resolvedData = this.route.snapshot.data['resolvedEarthquakeData'];
    this.dataSource = new DataTableDataSource(this.resolvedData.earthquakes);
    //this.ds = new MatTableDataSource<Earthquake>(this.resolvedData.earthquakes);
    // console.log(this.paginator);


    // console.log('Resolved Data', resolvedData.earthquakes);

    // this.earthquakeService.earthquakes$.subscribe(earthquakes => {
    //   console.log('Got the quakes', earthquakes)
    //   this.dataSource = new MatTableDataSource<Earthquake>(earthquakes);
    //   this.dataSource.paginator = this.tempPaginator;
    //   this.dataSource.sort = this.tempSort;
    // });
    // this.earthquakeService.onSearch(6, 7, '2014-01-01', '2016-01-02');

  }

  ngAfterViewInit() {
    // this.ds.paginator = this.paginator;
    // this.paginator.length = this.resolvedData.earthquakes.length;
    // console.log('ngAfterViewInit', this.dataSource.data.length);

    // reset the paginator after sorting
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    // merge(this.paginator.page)
    //   .pipe(
    //     tap(() => this.display())
    //   ).subscribe();
    // this.dataSource.pageQuakes();

    // this.dataSource = new DataTableDataSource(this.paginator, this.sort, this.earthquakeService);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => console.log('Paginating')),
        tap(() => this.dataSource.pageQuakes(
          this.paginator.pageIndex, this.paginator.pageSize,
          this.sort.active, this.sort.direction))
      ).subscribe();
  }

  display() {
    console.log('Page Event', this.paginator.pageIndex, this.paginator.pageSize);
  }

  moreInfo(element) {
    console.log(element);
  }
}

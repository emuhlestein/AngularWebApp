import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EarthquakeDataSource } from './earthquake-datasource';
import { EarthquakeService } from './earthquake.service';
import { Earthquake, EarthquakeResolved } from './earthquake';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './earthquake.component.html',
  styleUrls: ['./earthquake.component.scss']
})
export class EarthquakeComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: EarthquakeDataSource;
  tempPaginator: MatPaginator;
  tempSort: MatSort;
  resolvedData: EarthquakeResolved;
  ds: MatTableDataSource<Earthquake>;
  quakeCount: QuakeCount[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['location', 'magnitude', 'date', 'info'];

  filter;

  constructor(
    private route: ActivatedRoute,
    private earthquakeService: EarthquakeService) {
  }

  ngOnInit(): void {
    this.resolvedData = this.route.snapshot.data['resolvedEarthquakeData'];
    this.dataSource = new EarthquakeDataSource(this.resolvedData.earthquakes);

    let quakeCountMap: { [key: string]: number } = {};

    for (let quake of this.resolvedData.earthquakes) {
      let mag = Math.trunc(quake.magnitude).toString();
      if (quakeCountMap[mag]) {
        quakeCountMap[mag]++;
      } else {
        quakeCountMap[mag] = 1;
      }
    }

    this.quakeCount = Object.entries(quakeCountMap).map(i => this.mapQuake(i));

    // this.quakeCount = Object.entries(quakeCountMap);


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

  mapQuake(quake) {
    const mag = quake[0];
    const count = quake[1];
    const color = mag === "7" ? "#ff0000" : "#ffff00";
    return ({ magnitude: mag, count: count, color: color });
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

    // this.dataSource = new EarthquakeDataSource(this.paginator, this.sort, this.earthquakeService);

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

export interface QuakeCount {
  magnitude: string;
  count: number;
  color: string;
}

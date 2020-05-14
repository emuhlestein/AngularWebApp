import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EarthquakeDataSource } from './earthquake-datasource';
import { EarthquakeService } from './earthquake.service';
import { Earthquake, EarthquakeResolved } from './earthquake';
import { merge, Subject } from 'rxjs';
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
  colors = new Map();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['location', 'magnitude', 'date', 'info'];

  private filterSubject = new Subject<string>();

  _filter = '';
  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.filterSubject.next(value);
  }

  constructor(
    private route: ActivatedRoute,
    private earthquakeService: EarthquakeService) {
  }

  ngOnInit(): void {
    this.initColors();

    this.resolvedData = this.route.snapshot.data['resolvedEarthquakeData'];
    this.dataSource = new EarthquakeDataSource(this.resolvedData.earthquakes);

    this.colorizeQuake();
  }

  mapQuake(quake) {

    console.log(quake);
    const mag = quake[0];
    const count = quake[1];

    let color;
    if (+mag <= 4) {
      color = this.colors.get(4);
    } else if (+mag >= 10) {
      color = this.colors.get(10);
    } else {
      color = this.colors.get(+mag);
    }

    return ({ magnitude: mag, count: count, color: color });
  }

  ngAfterViewInit() {

    if (this.resolvedData.earthquakes) {
      merge(this.sort.sortChange, this.paginator.page, this.filterSubject.asObservable())
        .pipe(
          tap(() => console.log('Paginating')),
          tap(() => this.countQuakes())).subscribe();
    }
  }

  display() {
    console.log('Page Event', this.paginator.pageIndex, this.paginator.pageSize);
  }

  moreInfo(element) {
    console.log(element);
  }

  haveData() {
    return this.dataSource.data;
  }

  private countQuakes() {
    this.dataSource.pageQuakes(
      this.paginator.pageIndex, this.paginator.pageSize,
      this.sort.active, this.sort.direction, this.filter);
    this.colorizeQuakes(this.dataSource.data);
  }

  private colorizeQuakes(earthquakes) {
    let quakeCountMap: { [key: string]: number } = {};

    if (earthquakes) {
      for (let quake of earthquakes) {
        let mag = Math.trunc(quake.magnitude).toString();
        if (quakeCountMap[mag]) {
          quakeCountMap[mag]++;
        } else {
          quakeCountMap[mag] = 1;
        }
      }

      this.quakeCount = Object.entries(quakeCountMap).map(i => this.mapQuake(i));
    }
  }

  private colorizeQuake() {
    let quakeCountMap: { [key: string]: number } = {};

    if (this.resolvedData.earthquakes) {
      for (let quake of this.resolvedData.earthquakes) {
        let mag = Math.trunc(quake.magnitude).toString();
        if (quakeCountMap[mag]) {
          quakeCountMap[mag]++;
        } else {
          quakeCountMap[mag] = 1;
        }
      }

      this.quakeCount = Object.entries(quakeCountMap).map(i => this.mapQuake(i));
    }
  }

  private initColors() {
    this.colors.set(4, '#00ff40');
    this.colors.set(5, '#80ff00');
    this.colors.set(6, '#ffff00');
    this.colors.set(7, '#ff8000');
    this.colors.set(8, '#ff0040');
    this.colors.set(9, '#ff00ff');
    this.colors.set(10, '#4000ff');
  }
}

export interface QuakeCount {
  magnitude: string;
  count: number;
  color: string;
}

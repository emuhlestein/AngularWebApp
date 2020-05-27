import { AfterViewInit, Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EarthquakeDataSource } from '../../earthquake-datasource';
import { EarthquakeService } from '../../earthquake.service';
import { Earthquake, EarthquakeResolved } from '../../earthquake';
import { merge, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatDialog } from "@angular/material";
import { EarthquakeSearchComponent } from '../earthquake-search/earthquake-search.component';
import { SearchParams } from '../../search-params';
import { SessionDataService, START_DATE_KEY, END_DATE_KEY, MIN_MAG_KEY, MAX_MAG_KEY } from 'src/app/session-data-service';

@Component({
  templateUrl: './earthquake.component.html',
  styleUrls: ['./earthquake.component.scss'],
  encapsulation: ViewEncapsulation.None
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
    private sessionDataService: SessionDataService,
    private earthquakeService: EarthquakeService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {

    this.earthquakeService.earthquakes$.subscribe(earthquakes => {
      if (earthquakes) {
        this.dataSource = new EarthquakeDataSource(earthquakes);
        this.colorizeQuakes(this.dataSource.data);
      } else {
        this.dataSource = null;
      }
    });
    this.initColors();

    const startDate = this.sessionDataService.getItem(START_DATE_KEY);
    const endDate = this.sessionDataService.getItem(END_DATE_KEY);
    const minMag = this.sessionDataService.getItem(MIN_MAG_KEY);
    const maxMag = this.sessionDataService.getItem(MAX_MAG_KEY);
    this.earthquakeService.onSearch(minMag, maxMag, startDate, endDate);
  }

  mapQuake(quake) {
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

    if (this.dataSource && this.dataSource.data) {
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
    return this.dataSource && this.dataSource.data;
  }

  onFilterClear() {
    this.filter = "";
  }

  onSearch() {
    let dialogRef = this.dialog.open(EarthquakeSearchComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let sp = result as SearchParams;
        this.earthquakeService.onSearch(sp.minMag, sp.maxMag, sp.startDate, sp.endDate);
      }
    });
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

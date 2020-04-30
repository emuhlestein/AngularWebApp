import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map, tap } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject, of } from 'rxjs';
import { EarthquakeService } from '../earthquake.service';
import { Earthquake } from '../earthquake';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  location: string;
  magnitude: string;
  date: string;
  url: string;
}

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<Earthquake> {
  data: Earthquake[] = [];

  private earthquakeSubject = new BehaviorSubject<Earthquake[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  private sort: MatSort;

  paginator: MatPaginator;

  constructor(private earthquake: Earthquake[]) {
    super();
    this.data = earthquake;
    const quakes = this.getPagedData(this.data, 1, 10);
    this.earthquakeSubject.next(quakes);
  }


  // constructor(private paginator: MatPaginator, private sort: MatSort,
  //   private earthquakeService: EarthquakeService, ) {
  //   super();
  // }

  // loadQuakes(): Observable<Earthquake[]> {
  //   this.earthquakeService.onSearch(6, 7, '2014-01-01', '2016-01-02');
  //   this.earthquakes$ = this.earthquakeService.earthquakes$; // this is all the quakes
  //   return this.earthquakeService.earthquakes$
  //     .pipe(
  //       tap(result => this.data = result)
  //     );
  //   // this.earthquakeService.earthquakes$.subscribe(result => {
  //   //   this.data = result;
  //   // });
  // }

  pageQuakes(pageIndex: number, pageSize: number, sortColumn: string, sortDirection: string) {
    console.log('Sort Column', sortColumn);
    console.log('Sort Direction', sortDirection);
    const quakes = this.getPagedData(this.getSortedData(this.data, sortColumn, sortDirection), pageIndex, pageSize);
    this.earthquakeSubject.next(quakes);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Earthquake[]> {
    // console.log('connect', this.data);
    return this.earthquakeSubject.asObservable();

    // // Combine everything that affects the rendered data into one update
    // // stream for the data-table to consume.
    // const dataMutations = [
    //   observableOf(this.data),
    //   this.paginator.page,
    //   this.sort.sortChange
    // ];

    // // Set the paginator's length
    // this.paginator.length = this.data.length;

    // return merge(...dataMutations).pipe(map(() => {
    //   return this.getPagedData(this.getSortedData([...this.data]));
    // }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
    this.earthquakeSubject.complete();
    this.loadingSubject.complete();
  }

  loadEarthquakes() {

  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getPagedData(data: Earthquake[]) {
  //   const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  //   return data.splice(startIndex, this.paginator.pageSize);
  // }

  private getPagedData(data: Earthquake[], pageIndex: number, pageSize: number) {
    const startIndex = pageIndex * pageSize;
    return data.slice(startIndex, pageSize * (1 + pageIndex));
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Earthquake[], sortColumn: string, sortDirection: string) {
    if (!sortColumn || sortDirection === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = sortDirection === 'asc';
      switch (sortColumn) {
        case 'location': return compare(a.location, b.location, isAsc);
        case 'magnitude': return compare(+a.magnitude, +b.magnitude, isAsc);
        case 'date': return compare(+a.date, +b.date, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

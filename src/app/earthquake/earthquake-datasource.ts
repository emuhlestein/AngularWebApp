import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { Earthquake } from '../earthquake/earthquake';

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EarthquakeDataSource extends DataSource<Earthquake> {
  data: Earthquake[] = [];

  private earthquakeSubject = new BehaviorSubject<Earthquake[]>([]);

  constructor(private earthquakes: Earthquake[]) {
    super();
    this.data = this.earthquakes;
    const quakes = this.getPagedData(this.data, 1, 10);
    this.earthquakeSubject.next(quakes);
  }

  pageQuakes(pageIndex: number, pageSize: number, sortColumn: string, sortDirection: string, filter: string) {
    this.data = this.earthquakes;
    if (filter) {
      this.data = this.earthquakes.filter(quake =>
        quake.location.toLocaleUpperCase().includes(filter.toLocaleUpperCase()))
    }
    const quakes = this.getPagedData(this.getSortedData(this.data, sortColumn, sortDirection), pageIndex, pageSize);
    this.earthquakeSubject.next(quakes);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Earthquake[]> {
    return this.earthquakeSubject.asObservable();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
    this.earthquakeSubject.complete();
  }

  private getPagedData(data: Earthquake[], pageIndex: number, pageSize: number) {
    if (data) {
      const startIndex = pageIndex * pageSize;
      return data.slice(startIndex, pageSize * (1 + pageIndex));
    } else {
      return [];
    }
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
        case 'date': return compare(new Date(a.date), new Date(b.date), isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

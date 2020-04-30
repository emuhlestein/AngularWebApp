import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { JunkDataTableDataSource } from './junk-data-table-datasource';

@Component({
  selector: 'app-junk-data-table',
  templateUrl: './junk-data-table.component.html',
  styleUrls: ['./junk-data-table.component.scss']
})
export class JunkDataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: JunkDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit() {
    this.dataSource = new JunkDataTableDataSource(this.paginator, this.sort);
  }
}

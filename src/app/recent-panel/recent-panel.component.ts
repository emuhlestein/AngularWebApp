import { Component, OnInit } from '@angular/core';
import { Earthquake } from '../earthquakes/earthquake'
import { EarthquakeService } from '../earthquakes/earthquake.service';

@Component({
  selector: 'app-recent-panel',
  templateUrl: './recent-panel.component.html',
  styleUrls: ['./recent-panel.component.css']
})
export class RecentQuakesComponent implements OnInit {

  pageSize: number = 16;
  earthquakes: Earthquake[];
  cols: any[];
  rowData: Earthquake;

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'location', header: 'Location', type: 'string', width: '30%' },
      { field: 'magnitude', header: 'Magnitude', type: 'number', width: '25%' },
      { field: 'date', header: 'Date', type: 'date', width: '25%' },
      { field: 'url', header: 'More Info', type: 'string', width: '20%' }
    ];
  }

}

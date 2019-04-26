import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EarthquakeService } from '../earthquake.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {
  public minMagnitudeLabel = "Minimum Magnitude";
  public maxMagnitudeLabel = "Maximum Magnitude";
  public minMagnitudeValue = 6;
  public maxMagnitudeValue = 8;
  public minMagnitudeLimit = 6;
  public maxMagnitudeLimit = 10;
  @Output() public childEvent = new EventEmitter();
  public calendarStartLabel = "Start Date";
  public calendarStopLabel = "Stop Date";
  public startDateValue;
  public stopDateValue;

  constructor(
    private earthquakeService: EarthquakeService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.startDateValue = new Date('04/17/2019');
  }

  search() {
    this.earthquakeService.onSearch(
      this.minMagnitudeValue,
      this.maxMagnitudeValue,
      this.formatDate(this.startDateValue),
      this.formatDate(this.stopDateValue));
  }

  private formatDate(date: Date): string {
    return this.datePipe.transform(date, "yyyy-MM-dd")
  }

  onStartDateChanged($event) {
    this.startDateValue = $event;
  }

  onStopDateChanged($event) {
    this.stopDateValue = $event;
  }

  onMinMagChanged($event) {
    this.minMagnitudeValue = $event;
  }

  onMaxMagChanged($event) {
    this.maxMagnitudeValue = $event;
  }
}

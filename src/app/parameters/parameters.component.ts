import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EarthquakeService } from '../earthquake.service';
import { SessionDataService, START_DATE_KEY, STOP_DATE_KEY } from '../session-data-service';

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
    private datePipe: DatePipe,
    private sessionDataService: SessionDataService) { }

  ngOnInit() {
    this.startDateValue = new Date(this.sessionDataService.getSessionData(START_DATE_KEY));
    this.stopDateValue = new Date(this.sessionDataService.getSessionData(STOP_DATE_KEY));
    console.log('After');
    console.log(this.startDateValue);
    console.log(this.stopDateValue);
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

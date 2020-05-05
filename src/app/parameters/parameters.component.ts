import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EarthquakeService } from '../earthquake/earthquake.service';
import { SessionDataService, START_DATE_KEY, END_DATE_KEY, MIN_MAG_KEY, MAX_MAG_KEY } from '../session-data-service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Message } from '../common/message';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css'],
  encapsulation: ViewEncapsulation.None
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
  public calendarEndLabel = "End Date";
  public startDateValue;
  public endDateValue;
  rejectVisible: boolean = false;
  msg: string;
  errorMessage = '';
  magValues = ['5', '6', '7', '8', '9', '10'];

  constructor(
    private earthquakeService: EarthquakeService,
    private datePipe: DatePipe,
    private sessionDataService: SessionDataService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.startDateValue = new Date(this.sessionDataService.getItem(START_DATE_KEY));
    this.endDateValue = new Date(this.sessionDataService.getItem(END_DATE_KEY));
    this.minMagnitudeValue = this.sessionDataService.getItem(MIN_MAG_KEY);
    this.maxMagnitudeValue = this.sessionDataService.getItem(MAX_MAG_KEY);
  }

  search() {
    console.log(this.minMagnitudeValue, this.maxMagnitudeValue);
    if (+this.minMagnitudeValue > +this.maxMagnitudeValue) {
      console.log('HERE');
      this.errorMessage = 'Maximum magnitude must be greater than';// or equal to Minimum magnitude.';
      return;
    } else {

    }

    this.errorMessage = '';
    this.earthquakeService.onSearch(
      this.minMagnitudeValue,
      this.maxMagnitudeValue,
      this.formatDate(this.startDateValue),
      this.formatDate(this.endDateValue));
  }

  close() {
    this.errorMessage = '';
  }

  private formatDate(date: Date): string {
    return this.datePipe.transform(date, "yyyy-MM-dd")
  }

  onStartDateChanged($event) {
    if ($event.value.getTime() > this.endDateValue.getTime()) {
      $event.value = this.endDateValue;
      this.startDateValue = this.endDateValue;
      this.errorMessage = 'Stop date must be greater than or equal to start date.';
    } else {
      this.startDateValue = $event.value;
    }
    this.sessionDataService.setItem(START_DATE_KEY, this.startDateValue);
  }

  onEndDateChanged($event) {
    if ($event.value.getTime() < this.startDateValue.getTime()) {
      $event.value = this.startDateValue;
      this.endDateValue = this.startDateValue;
      this.errorMessage = 'Stop date must be greater than or equal to start date.';
    } else {
      this.endDateValue = $event.value;
    }
    this.sessionDataService.setItem(END_DATE_KEY, this.endDateValue);
  }

  onMinMagChanged($event) {
    if ($event.value > this.maxMagnitudeValue) {
      $event.value = this.maxMagnitudeValue;
      this.minMagnitudeValue = this.maxMagnitudeValue;
      this.errorMessage = 'Maximum magnitude must be greater than';// or equal to Minimum magnitude.';
    } else {
      this.minMagnitudeValue = $event.value;
    }
    this.sessionDataService.setItem(MIN_MAG_KEY, this.minMagnitudeValue);
  }

  onMaxMagChanged($event) {
    if ($event.value < this.minMagnitudeValue) {
      $event.value = this.minMagnitudeValue;
      this.maxMagnitudeValue = this.minMagnitudeValue;
      this.errorMessage = 'Maximum magnitude must be greater than or equal to Minimum magnitude.';
    } else {
      this.maxMagnitudeValue = $event.value;
    }
    this.sessionDataService.setItem(MAX_MAG_KEY, this.maxMagnitudeValue);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EarthquakeService } from '../earthquake.service';
import { SessionDataService, START_DATE_KEY, STOP_DATE_KEY, MIN_MAG_KEY, MAX_MAG_KEY } from '../session-data-service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Message } from '../common/message';

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
  rejectVisible: boolean = false;
  msg: string;

  constructor(
    private earthquakeService: EarthquakeService,
    private datePipe: DatePipe,
    private sessionDataService: SessionDataService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.startDateValue = new Date(this.sessionDataService.getItem(START_DATE_KEY));
    this.stopDateValue = new Date(this.sessionDataService.getItem(STOP_DATE_KEY));
    this.minMagnitudeValue = this.sessionDataService.getItem(MIN_MAG_KEY);
    this.maxMagnitudeValue = this.sessionDataService.getItem(MAX_MAG_KEY);
  }

  search() {
   
    if(this.minMagnitudeValue > this.maxMagnitudeValue) {
      this.showDialog('Maximum magnitude must be greater than or equal to Minimum magnitude.');
    } else {

    }
    // this.earthquakeService.onSearch(
    //   this.minMagnitudeValue,
    //   this.maxMagnitudeValue,
    //   this.formatDate(this.startDateValue),
    //   this.formatDate(this.stopDateValue));
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
    if($event.value > this.maxMagnitudeValue) {
      $event.value = this.maxMagnitudeValue;
      this.minMagnitudeValue = this.maxMagnitudeValue;
      this.showDialog('Maximum magnitude must be greater than or equal to Minimum magnitude.');
    } else {
      this.minMagnitudeValue = $event.value;
    }
    this.sessionDataService.setItem(MIN_MAG_KEY, this.minMagnitudeValue);
  }

  onMaxMagChanged($event) {
    if($event.value < this.minMagnitudeValue) {
      $event.value = this.minMagnitudeValue;
      this.maxMagnitudeValue = this.minMagnitudeValue;
      this.showDialog('Maximum magnitude must be greater than or equal to Minimum magnitude.');
    } else {
      this.maxMagnitudeValue = $event.value;
    }
    this.sessionDataService.setItem(MAX_MAG_KEY, this.maxMagnitudeValue);
  }

  showDialog(message) {
    this.confirmationService.confirm({
      message: message,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          console.log("HERE!!!!!")
      },
  });
  }
}

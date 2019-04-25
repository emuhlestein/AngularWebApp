import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() value: Date;
  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() public label;
  @Output() public dataChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
   
  }

  onSelect(value: any) {
    this.dataChangeEvent.emit(value);
  }
}

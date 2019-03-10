import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() public label;
  @Input() public value;
  @Output() public childEvent = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

  onChange(value: any) {
    this.childEvent.emit(value);
    console.log("In onChange() " + value);
  }

}

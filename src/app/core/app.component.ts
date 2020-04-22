import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SessionDataService } from '../session-data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ed\'s Web Site';
  date3: Date;

  constructor(
    private sessionDataService: SessionDataService,
    private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.sessionDataService.init();
  }

  handleClick() {
    console.log("In click listener: " + this.date3.toLocaleDateString())
  }
}

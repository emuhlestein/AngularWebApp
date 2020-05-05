import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SessionDataService } from '../session-data-service';
import { Router } from '@angular/router';
import { slideInAnimation } from '../app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Ed\'s Web Site';
  date3: Date;

  constructor(
    private sessionDataService: SessionDataService,
    private router: Router,
    private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.sessionDataService.init();
    // this.router.navigate(['/earthquakes']);
  }

  handleClick() {
    console.log("In click listener: " + this.date3.toLocaleDateString())
  }
}

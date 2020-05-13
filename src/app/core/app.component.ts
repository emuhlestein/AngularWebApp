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

  constructor(
    private sessionDataService: SessionDataService) {
  }

  ngOnInit() {
    this.sessionDataService.init();
  }
}

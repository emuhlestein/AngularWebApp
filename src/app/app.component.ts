import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { SessionDataService } from './session-data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ed\'s Web Site';
  date3: Date;
 
  constructor(private sessionDataService: SessionDataService) {
  }

  ngOnInit() {
    if(window.localStorage) {
      console.log('Local storage is supported');
      let test = localStorage.getItem('TEST');
      if(!test) {
        localStorage.setItem('TEST', 'yep, this works');
      } else {
        console.log(test);
      }

      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(key, value);
        this.sessionDataService.putSessionData(key, value);
      }
    }
  }

  handleClick() {
    console.log("In click listener: " + this.date3.toLocaleDateString())
  }
}

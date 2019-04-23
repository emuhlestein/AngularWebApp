import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ed\'s Web Site';
  date3: Date;
 
  constructor() {
  }

  ngOnInit() {
   
  }

  handleClick() {
    console.log("In click listener")
  }
}

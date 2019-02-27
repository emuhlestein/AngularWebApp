import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { EarthquakeService } from './earthquake.service';
import { Earthquake } from './earthquake'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ed\'s Web Site';
  earthquakes: Earthquake[];

  constructor(private service: EarthquakeService) {
  }

  getEarthquakes(): void {
    this.earthquakes = this.service.getEarthquakes();
  }

  ngOnInit() {
    this.getEarthquakes();
  }

  handleClick() {
    console.log("In click listener")
  }
}

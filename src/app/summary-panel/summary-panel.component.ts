import { Component, OnInit, OnDestroy } from '@angular/core';
import { EarthquakeService } from '../earthquake.service';
import { Earthquake } from '../earthquake';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-summary-panel',
  templateUrl: './summary-panel.component.html',
  styleUrls: ['./summary-panel.component.css']
})
export class SummaryPanelComponent implements OnInit, OnDestroy {
  private magDetails: MagnitudeDetails;
  subscription: Subscription;
  earthquakes: Earthquake[];
  quakes: MagnitudeDetails[] = [];
  earthquakeMap: Map<number, number> = new Map<number, number>();

  constructor(private earthquakeService: EarthquakeService) { }

  ngOnInit() {
    this.subscription = this.earthquakeService.getEarthquakes().subscribe( result => {
     
      if(result == null) {
        console.log('result is null');
        return;
      }
      this.quakes = [];
      this.earthquakeMap.clear();
      this.earthquakes = result;
      console.log('Count: ' + this.earthquakes.length);
      this.earthquakes.forEach(quake => {
        let mag = Math.trunc(quake.magnitude);
        let count = this.earthquakeMap.get(mag);
        if(count == null) {
          this.earthquakeMap.set(mag, 1);
        } else {
          count++;
          this.earthquakeMap.set(mag, count);
        }
      });
      Array.from(this.earthquakeMap.keys()).forEach(key => {
        let quakes: MagnitudeDetails = {
          label: String(key),
          count: this.earthquakeMap.get(key)
        };
        this.quakes.push(quakes);
      });
    });
  }

  ngOnDestroy() {
    if(this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }
}

interface MagnitudeDetails {
  label: string,
  count: number   
}

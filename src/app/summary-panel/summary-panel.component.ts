import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
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
  @Output() public magnitudeSelected = new EventEmitter();

  constructor(private earthquakeService: EarthquakeService) { }

  ngOnInit() {
    this.subscription = this.earthquakeService.earthquakes$.subscribe(result => {

      if (result == null) {
        return;
      }
      this.quakes = [];
      this.earthquakeMap.clear();
      this.earthquakes = result;
      this.earthquakes.forEach(quake => {
        let mag = Math.trunc(quake.magnitude);
        let count = this.earthquakeMap.get(mag);
        if (count == null) {
          this.earthquakeMap.set(mag, 1);
        } else {
          count++;
          this.earthquakeMap.set(mag, count);
        }
      });
      Array.from(this.earthquakeMap.keys()).forEach(key => {
        let quakes: MagnitudeDetails = {
          magnitude: String(key),
          count: this.earthquakeMap.get(key),
          selected: true
        };
        this.quakes.push(quakes);
      });
    });
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  onSelect(quake: MagnitudeDetails) {
    quake.selected = !quake.selected;
    this.magnitudeSelected.emit({ magnitude: quake.magnitude, selected: quake.selected });
  }
}

interface MagnitudeDetails {
  magnitude: string,
  count: number,
  selected: boolean
}

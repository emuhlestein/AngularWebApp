import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EarthquakeService } from '../earthquake.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {
  public minMagnitudeLabel = "Minimum Magnitude";
  public maxMagnitudeLabel = "Maximum Magnitude";
  public minMagnitudeValue = 6;
  public maxMagnitudeValue = 8;
  public minMagnitudeLimit = 6;
  public maxMagnitudeLimit = 10;
  @Output() public childEvent = new EventEmitter();

  constructor(private earthquakeService: EarthquakeService) { }

  ngOnInit() {
  }

  search() {
    //this.childEvent.emit();
    console.log(this.minMagnitudeValue + " " + this.maxMagnitudeValue);
    this.earthquakeService.setMinMagnitude(String(this.minMagnitudeValue));
    this.earthquakeService.setMaxMagnitude(String(this.maxMagnitudeValue));
    this.earthquakeService.onSearch();
  }
}

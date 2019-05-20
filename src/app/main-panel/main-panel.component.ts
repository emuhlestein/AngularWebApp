import { Component, OnInit } from '@angular/core';
import { MagnitudeSelectedService } from '../magnitude-selected.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  constructor(private magnitudeSelectedService: MagnitudeSelectedService) { }

  ngOnInit() {
  }

  onSelectMagnitude(event) {
    console.log('Parent: ' + event.magnitude + '   ' + event.selected);
    this.magnitudeSelectedService.setSelected({magnitude: event.magnitude, selected: event.selected});
  }

}

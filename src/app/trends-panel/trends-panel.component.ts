import { Component, OnInit } from '@angular/core';
import { EarthquakeService } from '../earthquakes/earthquake.service';
import { Earthquake } from '../earthquakes/earthquake';
import { Subscription } from 'rxjs';
import { MagnitudeSelectedService } from '../magnitude-selected.service';

@Component({
  selector: 'app-trends-panel',
  templateUrl: './trends-panel.component.html',
  styleUrls: ['./trends-panel.component.css']
})
export class TrendsPanelComponent implements OnInit {
  subscription: Subscription;
  data: any;
  selected = new Map<number, boolean>();
  earthquakes: Earthquake[];
  width = 600;
  height = 300;

  colors = new Map<number, string>();

  constructor(private earthquakeService: EarthquakeService,
    private magnitudeSelectedService: MagnitudeSelectedService) {

    this.colors.set(6, '#FC6644');
    this.colors.set(7, '#f03863');
    this.colors.set(8, '#a03823');
    this.colors.set(9, '#a11Af0');
    this.colors.set(10, '#511A80');
    Array.from(this.colors.keys()).forEach(key => {
      this.selected.set(key, true);
    });
  }

  ngOnInit() {

    this.magnitudeSelectedService.getSelected().subscribe(result => {
      if (result) {
        console.log(result);
        this.selected.set(+result.magnitude, result.selected);
        this.update();
      }
    });
    this.subscription = this.earthquakeService.earthquakes$.subscribe(earthquakes => {

      if (earthquakes == null) {
        return;
      }
      this.earthquakes = earthquakes;
      this.update();
    });
  }

  update() {
    let magMap;
    let earthquakeMap = new Map<number, Map<string, number>>();
    let decadeSet = new Set<string>();
    this.earthquakes.forEach(quake => {
      let year = new Date(quake.date).getFullYear();
      let syear = year.toString();
      let decade = syear.substr(0, 3) + '0';
      decadeSet.add(decade);
      let mag = Math.trunc(quake.magnitude);
      magMap = earthquakeMap.get(mag);

      if (magMap) {
        let count = magMap.get(decade);
        if (count) {
          count++;
          magMap.set(decade, count);
        } else {
          magMap.set(decade, 1);
        }
      } else {
        magMap = new Map<string, number>();
        magMap.set(decade, 1);
        earthquakeMap.set(mag, magMap);
      }
    })

    let labels = Array.from(decadeSet).sort();
    let datasets = [];
    let mags = [];

    // extract data sets
    Array.from(earthquakeMap.keys()).forEach(key => {
      let selected = this.selected.get(key);
      if (selected) {
        let magMap = earthquakeMap.get(key);
        mags.push(key);

        let dataset = [];
        labels.forEach(label => {
          // get quake count for specified decade
          dataset.push(magMap.get(label));
        });

        datasets.push(dataset);
      }
    });


    this.data = {
      labels: labels,
      datasets: []
    }

    let index = 0;
    mags.forEach(mag => {
      let color = this.colors.get(mag);
      let dset = {
        label: 'Magnitude ' + mag,
        backgroundColor: color,
        borderColor: '#1E88E5',
        data: datasets[index]
      }
      this.data.datasets.push(dset);
      index++;
    });

  }
}

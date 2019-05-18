import { Component, OnInit } from '@angular/core';
import { EarthquakeService } from '../earthquake.service';
import { Earthquake } from '../earthquake';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trends-panel',
  templateUrl: './trends-panel.component.html',
  styleUrls: ['./trends-panel.component.css']
})
export class TrendsPanelComponent implements OnInit {
  subscription: Subscription;
  data: any;

  colors = new Map<number, string>();

  constructor(private earthquakeService: EarthquakeService) {
    this.colors.set(6, '#FC6644');
    this.colors.set(7, '#f03863');
    this.colors.set(8, '#a03823');
    this.colors.set(9, '#a11Af0');
    this.colors.set(10, '#511A80');
   }

  ngOnInit() {
    this.subscription = this.earthquakeService.getEarthquakes().subscribe( earthquakes => {
     
      if(earthquakes == null) {
        return;
      }
      let magMap;
      let earthquakeMap = new Map<number, Map<string, number>>();
      let decadeSet = new Set<string>();
      earthquakes.forEach(quake => {
        let year = new Date(quake.date).getFullYear();
        let syear = year.toString();
        let decade = syear.substr(0, 3) + '0';
        decadeSet.add(decade);
        let mag = Math.trunc(quake.magnitude);
        magMap = earthquakeMap.get(mag);

        if(magMap) {
          let count = magMap.get(decade);
          if(count) {
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
        let magMap = earthquakeMap.get(key);
        mags.push(key);

        let index = 0;
        let dataset = [];
        labels.forEach(label => {
          // get quake count for specified decade
          //console.log(key + '  '  + label + '   ' + magMap.get(label));
          dataset.push(magMap.get(label));
        });

        datasets.push(dataset);
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
    });
  }
}

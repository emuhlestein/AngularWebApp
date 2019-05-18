import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trends-panel',
  templateUrl: './trends-panel.component.html',
  styleUrls: ['./trends-panel.component.css']
})
export class TrendsPanelComponent implements OnInit {

  data: any;

  constructor() {
    // let decades = [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];
    // let dataset1 = [10, 45, 23, 34, 45, 76, 45, 75, 8, 56, 22, 44, 55];
    // let dataset2 = [20, 54, 20, 40, 50, 80, 60, 54, 15, 34, 65, 98, 78];
    // let label1 = 'Magnitude 7';
    // let label2 = 'Magnitude 6';
    // let backgroundColor1: '#FF0000';
    // let borderColor1: '#1E88E5';
    // let backgroundColor2: '#9CCC65';
    // let borderColor2: '#7CB342';
    // this.data = {
    //   labels: decades,
    //   datasets: [
    //     {
    //       label: label1,
    //       backgroundColor: backgroundColor1,
    //       borderColor: borderColor1,
    //       data: dataset1
    //     },
    //     {
    //       label: label2,
    //       backgroundColor: backgroundColor2,
    //       borderColor: borderColor2,
    //       data: dataset2
    //     }
    //   ]
    // }

    // this.data.datasets[0].backgroundColor = '#FF0000';
    // this.data.datasets[1].backgroundColor = '#00FF00';
    // this.data = {
    //   labels: [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020],
    //   datasets: [
    //     {
    //       label: "Magnitude 7",
    //       backgroundColor: '#42A5F5',
    //       borderColor: '#1E88E5',
    //       data: [10, 45, 23, 34, 45, 76, 45, 75, 8, 56, 22, 44, 55 ]
    //     }
    //   ]
    // }
   }

  ngOnInit() {
    let decades = [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];
    let dataset1 = [10, 45, 23, 34, 45, 76, 45, 75, 8, 56, 22, 44, 55];
    let dataset2 = [20, 54, 20, 40, 50, 80, 60, 54, 15, 34, 65, 98, 78];
    let label1 = 'Magnitude 7';
    let label2 = 'Magnitude 6';
    let backgroundColor1 = '#FF0000';
    let borderColor1 = '#1E88E5';
    let backgroundColor2 = '#9CCC65';
    let borderColor2 = '#7CB342';
    this.data = {
      labels: decades,
      datasets: [
        {
          label: label1,
          backgroundColor: backgroundColor1,
          borderColor: borderColor1,
          data: dataset1
        },
        {
          label: label2,
          backgroundColor: backgroundColor2,
          borderColor: borderColor2,
          data: dataset2
        }
      ]
    }

    let dataset = {
      label: label1,
      backgroundColor: backgroundColor1,
      borderColor: borderColor1,
      data: dataset1
    }

    let dataset3 = {
      label: label2,
      backgroundColor: backgroundColor2,
      borderColor: borderColor2,
      data: dataset2
    }

    this.data = {
      labels: decades,
      datasets: []
    }

    this.data.datasets.push(dataset);
    this.data.datasets.push(dataset3);
  }

}

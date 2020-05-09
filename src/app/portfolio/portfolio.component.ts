import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, stagger, animateChild, style, animate } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(60, animateChild()))
      ])
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('0.350s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

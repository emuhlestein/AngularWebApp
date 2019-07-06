import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from './progressbar.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressBarComponent implements OnInit {
  active = true;
  constructor(private progressBarService: ProgressBarService) { }

  ngOnInit() {
    this.progressBarService.getProgressBar().subscribe(result => {
      this.active = result;
    });
  }
}

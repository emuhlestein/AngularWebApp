import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { SearchParams } from 'src/app/earthquake/search-params';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewProjectComponent implements OnInit {
  startProjectDateLabel = "Start Date";
  numSprintsLabel = "Number of Sprints";
  sprintLengthLabel = "Sprint Length in weeks";
  startDateValue;
  numSprintsValue;
  sprintLengthValue;

  constructor(private datePipe: DatePipe,
    public dialogRef: MatDialogRef<NewProjectComponent>) { }

  ngOnInit() {
  }

  onCreateProject() {
    this.dialogRef.close();
    // this.dialogRef.close(new SearchParams(
    //   this.minMagnitudeValue, this.maxMagnitudeValue,
    //   this.formatDate(this.startDateValue));
  }

  onCancel() {
    this.dialogRef.close();
  }

  private formatDate(date: Date): string {
    return this.datePipe.transform(date, "yyyy-MM-dd")
  }

}

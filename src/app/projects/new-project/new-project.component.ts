import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { SearchParams } from 'src/app/earthquake/search-params';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProjectParams } from '../project-params';

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
  numSprintsValue = "1";
  sprintLengthValue = "1";
  minStartDate = new Date();


  newProjectForm: FormGroup;

  constructor(private datePipe: DatePipe,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<NewProjectComponent>) { }


  ngOnInit() {
    this.startDateValue = this.formatDate(new Date());
    console.log(this.startDateValue);
    this.newProjectForm = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(3)]],
      description: '',
      sprintLength: '1',
      numSprints: '1',
      startDate: [{ value: this.startDateValue, disabled: true }]
    });
  }

  hasError = (formControl: string, errorName: string) => {
    return this.newProjectForm.get(formControl).hasError(errorName);
    // return this.newProjectForm.controls[controlName].hasError(errorName);
  }

  getErrorMessage(formControl: string, errorName: string) {
    const x = this.newProjectForm.get(formControl);
    if (this.hasError(formControl, errorName) && errorName === 'required') {
      return 'You must enter a value';
    }
    if (this.hasError(formControl, errorName) && errorName === 'minlength') {
      const requiredLength = this.newProjectForm.get(formControl).getError(errorName)['requiredLength'];
      return `You must enter at least ${requiredLength} characters`;
    }

    // if (this.name.hasError('required')) {
    //   return 'You must enter a value';
    // }

    // if (this.description.hasError('required')) {
    //   return 'You must enter a value';
    // }

    // return this.name.hasError('name') ? 'Project name cannot be blank' : '';
  }

  createProject() {
    console.log(this.newProjectForm.get('projectName').value);
    console.log(this.newProjectForm.get('description').value);
    console.log(this.newProjectForm.get('sprintLength').value);
    console.log(this.newProjectForm.get('numSprints').value);
    console.log(this.newProjectForm.get('startDate').value);
    // if (this.name.hasError('required')) {
    //   return 'You must enter a value';
    // }

    // if (this.description.hasError('required')) {
    //   return 'You must enter a value';
    // }


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

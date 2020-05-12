import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EarthquakeComponent } from './earthquake.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: EarthquakeComponent
      }
    ])
  ],
  declarations: [
    EarthquakeComponent
  ]
})
export class EarthquakeModule { }

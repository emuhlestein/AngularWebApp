import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarthquakeComponent } from './earthquake.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';

@NgModule({
  imports: [
    CommonModule,
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

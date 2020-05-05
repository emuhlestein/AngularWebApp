import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarthquakeSearchComponent } from './earthquake-search.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: EarthquakeSearchComponent
      }
    ])
  ],
  declarations: [
    EarthquakeSearchComponent
  ]
})
export class EarthquakeSearchModule { }

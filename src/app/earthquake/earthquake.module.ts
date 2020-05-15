import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { EarthquakeComponent } from './components/earthquake/earthquake.component';
import { EarthquakeSearchComponent } from './components/earthquake-search/earthquake-search.component';

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
    EarthquakeComponent,
    EarthquakeSearchComponent
  ],
  entryComponents: [
    EarthquakeSearchComponent
  ]
})
export class EarthquakeModule { }

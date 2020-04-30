import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';
import { EarthquakeGuard } from './earthquakes/earthquake.guard';
import { EarthquakesResolver } from './earthquakes/earthquakes-resolver.service';
import { ParametersComponent } from './parameters/parameters.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'earthquakes',
        canActivate: [EarthquakeGuard],
        resolve: { resolvedEarthquakeData: EarthquakesResolver },
        component: DataTableComponent
      },
      {
        path: 'search',
        component: ParametersComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

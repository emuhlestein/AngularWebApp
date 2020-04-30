import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';
import { EarthquakeGuard } from './earthquakes/earthquake.guard';
import { EarthquakesResolver } from './earthquakes/earthquakes-resolver.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'earthquakes',
        canActivate: [EarthquakeGuard],
        resolve: { resolvedEarthquakeData: EarthquakesResolver },
        component: DataTableComponent
      }])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

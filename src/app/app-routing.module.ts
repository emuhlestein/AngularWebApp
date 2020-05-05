import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EarthquakeGuard } from './earthquake/earthquake.guard';
import { EarthquakeResolver } from './earthquake/earthquake-resolver.service';
import { EarthquakeSearchComponent } from './earthquake-search/earthquake-search.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'contact', component: PageNotFoundComponent
      },
      {
        path: 'about', component: PageNotFoundComponent
      },
      {
        path: 'earthquakes',
        canActivate: [EarthquakeGuard],
        loadChildren: () => import('./earthquake/earthquake.module').then(m => m.EarthquakeModule),
        resolve: { resolvedEarthquakeData: EarthquakeResolver }
      },
      {
        path: 'search',
        component: EarthquakeSearchComponent
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

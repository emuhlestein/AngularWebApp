import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EarthquakeGuard } from './earthquake/earthquake.guard';
import { EarthquakeResolver } from './earthquake/earthquake-resolver.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'resume',
        loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
      },
      {
        path: 'earthquakes',
        canActivate: [EarthquakeGuard],
        loadChildren: () => import('./earthquake/earthquake.module').then(m => m.EarthquakeModule),
        resolve: { resolvedEarthquakeData: EarthquakeResolver }
      },
      {
        path: 'search',
        loadChildren: () => import('./earthquake-search/earthquake-search.module').then(m => m.EarthquakeSearchModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

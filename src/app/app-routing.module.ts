import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
        loadChildren: () => import('./earthquake/earthquake.module').then(m => m.EarthquakeModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      {
        path: 'angularprojects',
        loadChildren: () => import('./angular-projects/angular-projects.module').then(m => m.AngularProjectsModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

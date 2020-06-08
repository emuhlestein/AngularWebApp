import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { FormsModule } from '@angular/forms';
import { AngularProjectsComponent } from './angular-projects.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: AngularProjectsComponent
      }
    ])
  ],
  declarations: [
    AngularProjectsComponent
  ]
})
export class AngularProjectsModule { }

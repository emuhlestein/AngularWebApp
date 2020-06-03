import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects.component';
import { NewProjectComponent } from './new-project/new-project.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectsComponent
      }
    ])
  ],
  declarations: [
    ProjectsComponent,
    NewProjectComponent
  ],
  entryComponents: [
    NewProjectComponent
  ]
})
export class ProjectsModule { }

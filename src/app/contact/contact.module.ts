import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent
      }
    ])
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }

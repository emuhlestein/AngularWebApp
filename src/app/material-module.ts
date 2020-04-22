import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const modules = [
  MatCardModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSortModule,
  MatTableModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }

import { Component, OnInit } from '@angular/core';
import { NewProjectComponent } from './new-project/new-project.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onNewProject() {
    let dialogRef = this.dialog.open(NewProjectComponent, {
      width: '450px',
      panelClass: 'new-project-dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // get parameters from result
      }
    });
  }

}

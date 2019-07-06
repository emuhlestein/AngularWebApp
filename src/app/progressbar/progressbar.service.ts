import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'
import { ACTIVE_INDEX } from '@angular/core/src/render3/interfaces/container';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  private active: Subject<boolean> = new BehaviorSubject<boolean>(false);
  startProgressBar() {
    this.active.next(true);
  }

  getProgressBar(): Subject<boolean> {
    return this.active
  }
  
  stopProgressBar() {
    this.active.next(false);
  }
}
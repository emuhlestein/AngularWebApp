import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'

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

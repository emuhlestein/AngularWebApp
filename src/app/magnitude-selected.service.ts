import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MagnitudeSelectedService {

  private selected: Subject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  getSelected(): Subject<any> {
    return this.selected;
  }

  setSelected(selected) {
    this.selected.next(selected);
  }
}

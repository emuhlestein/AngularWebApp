import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

export const START_DATE_KEY: string = 'start_date';
export const END_DATE_KEY: string = 'stop_date';
export const MIN_MAG_KEY: string = 'min_mag';
export const MAX_MAG_KEY: string = 'max_mag';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {
  constructor(private datePipe: DatePipe) { }

  init() {
    let startDate = this.getItem(START_DATE_KEY);
    let stopDate = this.getItem(END_DATE_KEY);
    if (startDate === null || stopDate === null) {
      this.setItem(START_DATE_KEY, this.formatDate(new Date()));
      this.setItem(END_DATE_KEY, this.formatDate(new Date()));
    }
  }

  setItem(key: string, data: any) {
    if (data && data !== null) {
      let value = JSON.stringify(data);
      localStorage.setItem(key, value);
    }
  }

  getItem(key: string): any {
    const data = localStorage.getItem(key);
    if (data && data !== null) {
      return JSON.parse(data);
    }
    return null;
  }

  // TODO make a utility function
  private formatDate(date: Date): string {
    return this.datePipe.transform(date, "yyyy-MM-dd")
  }
}

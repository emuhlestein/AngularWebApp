import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

export const START_DATE_KEY: string = 'start_date';
export const STOP_DATE_KEY: string = 'stop_date';

@Injectable()
export class SessionDataService {
    private sessionMap = new Map<string, any>();

    constructor(private datePipe: DatePipe) {}

    init() {
        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            this.sessionMap.set(key, value);
        }

        let startDate = this.sessionMap.get(START_DATE_KEY);
        let stopDate = this.sessionMap.get(STOP_DATE_KEY);
        if(startDate == undefined || stopDate == undefined) {
            this.sessionMap.set(START_DATE_KEY, this.formatDate(new Date()));
            this.sessionMap.set(STOP_DATE_KEY, this.formatDate(new Date()));
        }
    }

    putSessionData(key: string, data: any) {
        localStorage.setItem(key, data);
        this.sessionMap.set(key, data);
    }

    getSessionData(key: string): any {
        console.log('HERE????????????????? ' + key);
        return this.sessionMap.get(key);
    }

    
  // TODO make a utility function
  private formatDate(date: Date): string {
    return this.datePipe.transform(date, "yyyy-MM-dd")
  }
}
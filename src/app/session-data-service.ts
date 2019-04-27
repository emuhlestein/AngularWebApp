import { Injectable } from '@angular/core'; 

@Injectable()
export class SessionDataService {
    private sessionMap = new Map<string, any>();

    putSessionData(key: string, data: any) {
        localStorage.setItem(key, data);
        this.sessionMap.set(key, data);
    }

    getSessionData(key: string): any {
        return this.sessionMap.get(key);
    }
}
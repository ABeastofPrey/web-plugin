import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface QueryRes { id: string, res: string };

@Injectable({
    'providedIn': 'root'
})
export class WebsocketService {

    private queryEvents: EventEmitter<string>[] = [];
    private onResEvents: EventEmitter<string>[] = [];
    public onResponse: EventEmitter<QueryRes> = new EventEmitter<QueryRes>();

    constructor() {
        this.onResponse.subscribe((res: QueryRes) => {
            const event = this.onResEvents.find(e => e['id'] === res.id);
            event.emit(res.res);
        });
    }

    public rigisterQueryEvents(event: EventEmitter<string>): void {
        this.queryEvents.push(event);
    }

    public query(api: string): Promise<any> {
        const id = Math.random().toString().slice(2);
        const ob = { id, api };
        const event = new EventEmitter<string>();
        event['id'] = id;
        this.onResEvents.push(event);
        return new Promise((resolve, reject) => {
            event.subscribe(res => {
                resolve(res);
            });
            this.queryEvents.forEach(e => {
                e.emit(JSON.stringify(ob));
            });
        });
    }

    public simpleQuery(api: string): Observable<any> {
        return of('response');
    }
}
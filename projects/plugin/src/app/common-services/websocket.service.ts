import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    'providedIn': 'root'
})
export class WebsocketService {

    public query(api: string): Promise<any> {
        console.log(api)
        return Promise.resolve('query response');
    }

    public simpleQuery(api: string): Observable<any> {
        return of('response');
    }
}
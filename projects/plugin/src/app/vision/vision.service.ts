import { Injectable, EventEmitter } from '@angular/core';
// import { WebsocketService } from '../../core';
import { MatDialog } from '@angular/material/dialog';
// import { NewDialogTemplateComponent } from '../components/new-dialog-template/new-dialog-template.component';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CreateDialogReturn, CreateDialog, ConfirmDialog } from './vision.enum';
// import { YesNoDialogComponent } from '../../../components/yes-no-dialog/yes-no-dialog.component';

import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VisionService {

    private searchEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        // private ws: WebsocketService, private dialogs: MatDialog
    ) {

        // this.searchEvent.pipe(debounceTime(1000)).subscribe(api => {
        //     this.ws.query(api);
        // });
    }

    debounceVload(api: string): void {
        this.searchEvent.next(api);
    }

    search(api: string): Promise<any> {
        return Promise.reject([]);
        // return this.ws.query(api);
    }

    createDialog(data: CreateDialog): Observable<CreateDialogReturn> {
        // return this.dialogs.open(NewDialogTemplateComponent, data).afterClosed();
        return of({
            name: 'name',
            status: true
        });
    }

    yesnoDialog(data: ConfirmDialog): Observable<boolean> {
        // return this.dialogs.open(YesNoDialogComponent, { data: data }).afterClosed();
        return of(true);
    }

    setCurrentStation(station: string): Promise<any> {
        let api: string = `setCurrentStation("${station}")`;
        // return this.ws.query(api);
        return Promise.reject();
    }

    getCurrentStation(): Promise<any> {
        let api: string = `?getCurrentStation`;
        return Promise.reject([]);
        // return this.ws.query(api);
    }

    setCurrentJob(station: string, job: string): Promise<any> {
        let api: string = `setCurrentJob("${station}","${job}")`;
        // return this.ws.query(api);
        return Promise.reject([]);
    }

    getCurrentJob(station: string): Promise<any> {
        let api: string = `?getCurrentJob("${station}")`;
        // return this.ws.query(api);
        return Promise.reject([]);
    }

    setCurrentCalStation(station: string): Promise<any> {
        let api: string = `setCurrentCalStation("${station}")`;
        // return this.ws.query(api);
        return Promise.reject([]);
    }

    getCurrentCalStation(): Promise<any> {
        let api: string = `?getCurrentCalStation`;
        // return this.ws.query(api);
        return Promise.reject([]);
    }

}

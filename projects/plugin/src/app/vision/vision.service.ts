import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CreateDialogReturn, CreateDialog, ConfirmDialog } from './vision.enum';

import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VisionService {

    private searchEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        // private ws: WebsocketService, private dialogs: MatDialog
    ) { }
}

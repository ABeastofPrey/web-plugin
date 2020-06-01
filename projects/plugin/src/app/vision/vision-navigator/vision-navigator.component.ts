import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewDialogTemplateComponent } from '../../common-comps/new-dialog-template/new-dialog-template.component';


@Component({
    selector: 'plugin-vision-navigator',
    templateUrl: './vision-navigator.component.html',
    styleUrls: ['./vision-navigator.component.scss']
})
export class VisionNavigatorComponent implements OnInit {
    @Input() canEdit = true;
    constructor(private dialog: MatDialog) { }

    ngOnInit(): void { }

    public create(): void {
        this.dialog.open(NewDialogTemplateComponent, {
            disableClose: false
        }).afterClosed();
    }
}

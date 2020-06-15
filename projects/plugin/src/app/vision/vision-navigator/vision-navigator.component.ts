import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewDialogTemplateComponent } from '../../common-comps/new-dialog-template/new-dialog-template.component';
import { VisionService } from '../vision.service';

@Component({
    selector: 'plugin-vision-navigator',
    templateUrl: './vision-navigator.component.html',
    styleUrls: ['./vision-navigator.component.scss']
})
export class VisionNavigatorComponent implements OnInit {
    @Input() canEdit = true;
    public stationList: string[] = [];
    public station: string = '';
    constructor(private dialog: MatDialog, private service: VisionService) { }

    ngOnInit(): void { }

    public create(): void {
        this.dialog.open(NewDialogTemplateComponent, {
            disableClose: false,
            data: {
                stationList: this.stationList
            }
        }).afterClosed().subscribe(created => {
            console.log(created);
            if (created && created.status) {
                this.stationList.push(created.name);
                this.station = created.name;
                this.service.stationChange.emit(this.station);
            }
        });
    }

    public changeStation(): void {
        this.service.stationChange.emit(this.station);
    }
}

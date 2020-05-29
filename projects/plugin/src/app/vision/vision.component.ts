import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    // selector: 'plugin-vision',
    templateUrl: './vision.component.html',
    styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {
    @Input() name: string = 'Init value';
    @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
    @Input() queryResponse: string;
    @Output('query-event') queryEvent: EventEmitter<string> = new EventEmitter<string>();
    constructor() { }

    ngOnInit(): void { }

    public vTran(): void {
        const api = '?scara.VTran';
        this.nameChange.emit('new name');
        this.queryEvent.emit(api);
    }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WebsocketService } from '../common-services/websocket.service';

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
    constructor(private websocketService: WebsocketService) { }

    ngOnInit(): void {
        this.queryEvent.subscribe(queryObj => {
            const { id, api } = JSON.parse(queryObj);
            console.log(id, api);
            setTimeout(() => {
                const resObj = { id, res: '0' };
                this.websocketService.onResponse.emit(resObj)
            }, 1000);
        });
        this.websocketService.rigisterQueryEvents(this.queryEvent);
    }

    public vTran(): void {
        const api = '?scara.VTran';
        this.nameChange.emit('new name');
        this.queryEvent.emit(api);
    }
}

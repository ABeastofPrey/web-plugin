import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { WebsocketService } from '../common-services/websocket.service';
import { isUndefined } from 'ramda-adjunct';
import { prop, compose } from 'ramda';

@Component({
    // selector: 'plugin-vision',
    templateUrl: './vision.component.html',
    styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit, OnChanges {
    @Input('query-response') queryResponse: string;
    @Output('query-event') queryEvent: EventEmitter<string> = new EventEmitter<string>();
    constructor(private websocketService: WebsocketService) { }

    ngOnInit(): void {
        this.websocketService.rigisterQueryEvents(this.queryEvent);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes['queryResponse'].currentValue);
        (({ queryResponse }) => {
            if (isUndefined(queryResponse)) return;
            const resObj = compose(JSON.parse, prop('currentValue'))(queryResponse);
            this.websocketService.onResponse.emit(resObj);
        })(changes);
    }
}

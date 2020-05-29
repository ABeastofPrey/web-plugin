import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface WebsocketService {
    query: (api: string) => Promise<any>;
}

@Component({
    // selector: 'plugin-vision',
    templateUrl: './vision.component.html',
    styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {
    @Input() value: string = 'Init value';
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
    @Input() websocketService: WebsocketService;
    constructor() { 

    }

    ngOnInit(): void {
    }

    public vTran(): void {
        const api = '?scara.VTran';
        if (this.websocketService !== undefined) {
            this.websocketService.query(api).then(res => {
                console.log('=======================================');
                console.log(res);
            });
        } else {
            console.log('websocketService is undefined');
        }
    }
}

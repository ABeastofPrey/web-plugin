import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VisionService } from '../vision.service';
@Component({
    selector: 'app-vision-template-config',
    templateUrl: './vision-template-config.component.html',
    styleUrls: ['./vision-template-config.component.scss']
})
export class VisionTemplateConfigComponent implements OnInit {
    public ip: string = "";
    public port: string = '';
    public currentStation: string;
    public terminators: string[] = ['\r\n', '\n', '\t'];

    constructor(private service: VisionService) {
        this.service.stationChange.subscribe(station => {
            this.currentStation = station;
        });
    }

    ngOnInit(): void {

    }

    public changeIp(event): void {
        console.log(event);
    }
}

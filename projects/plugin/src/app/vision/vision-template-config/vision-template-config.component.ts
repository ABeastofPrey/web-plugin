import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VisionService } from '../vision.service';
@Component({
    selector: 'app-vision-template-config',
    templateUrl: './vision-template-config.component.html',
    styleUrls: ['./vision-template-config.component.scss']
})
export class VisionTemplateConfigComponent implements OnInit {

    constructor(
        private service: VisionService,
    ) {

    }

    ngOnInit(): void {

    }
}

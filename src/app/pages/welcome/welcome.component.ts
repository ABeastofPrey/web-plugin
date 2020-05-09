import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppPluginService } from '../../app.plugin.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('loadPluginBtn', { static: true }) loadPluginBtn: any;

  constructor(private pluginService: AppPluginService) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    fromEvent(this.loadPluginBtn.elementRef.nativeElement, 'click').subscribe(() => {
      this.pluginService.loadPlugin();
    });
  }

}

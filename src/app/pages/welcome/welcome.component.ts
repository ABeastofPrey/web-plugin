import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppPluginService } from '../../app.plugin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NgElement, WithProperties } from '@angular/elements';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('loadPluginBtn', { static: true }) loadPluginBtn: any;

  constructor(
    private pluginService: AppPluginService,
    private message: NzMessageService
  ) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    fromEvent(this.loadPluginBtn.elementRef.nativeElement, 'click').subscribe(() => {
      // this.pluginService.loadPlugin();
      this.loadPluginA();
    });
  }

  private loadPluginA(): void {
    const hostElement = document.getElementById('pluginContent');
    const eleName = 'my-plugin';
    const element: NgElement & WithProperties<any> = document.createElement(eleName) as any;

    const script = document.createElement('script');
    script.src = 'assets/plugins/plugin/main-es2015.js';

    const script2 = document.createElement('script');
    script2.src = 'assets/plugins/plugin/polyfills-es2015.js'

    // const script1 = document.createElement('script');
    // script1.src = 'assets/plugins/plugin/scripts.js'

    hostElement.appendChild(script);
    // hostElement.appendChild(script1);
    hostElement.appendChild(script2);
    hostElement.appendChild(element);

    script.onload = () => {
      this.message.create('success', `Plugin a main.js loaded.`);
    };
    script.onerror = () => {
      this.message.create('error', `Plugin a main.js load failed.`);
    };

  }

}

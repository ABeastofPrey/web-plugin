import { Component } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { VisionComponent } from './vision/vision.component';

declare const VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Version: ' + VERSION;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    
    // const myPlugin: NgElement & WithProperties<VisionComponent> = document.createElement('plugin-vision') as any;
    // myPlugin.name = 'Hello vision';
    // myPlugin.websocketService = { query: () => Promise.resolve('haha') };
    // document.body.appendChild(myPlugin);
  }
}

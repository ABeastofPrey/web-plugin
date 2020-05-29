import { Component } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor() { }

	public loadPlugin(): void {
		this.loadPluginA();
	}

	private loadPluginA(): void {
	  const hostElement = document.getElementById('pluginHost');
	  const eleName = 'my-plugin';
	  const element: NgElement & WithProperties<any> = document.createElement(eleName) as any;
	  const script = document.createElement('script');
	  script.src = 'assets/plugins/plugin.js';
	  hostElement.appendChild(script);
	  hostElement.appendChild(element);
  
	  // script.onload = () => {
	  //   this.message.create('success', `Plugin a main.js loaded.`);
	  // };
	  // script.onerror = () => {
	  //   this.message.create('error', `Plugin a main.js load failed.`);
	  // };
  
	  const visionPlugin = document.createElement('plugin-vision') as any;
	  hostElement.appendChild(visionPlugin);
	  
	}
}

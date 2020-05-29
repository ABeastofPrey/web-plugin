import { Component } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public loaded = false;
	public test = 'Hello vision plugin'
	constructor() { }

	public loadPlugin(): void {
		const hostElement = document.getElementById('pluginHost');
		const mpScript = document.createElement('script');
		mpScript.src = 'assets/plugins/plugin.js';
		hostElement.appendChild(mpScript);

		const visionPlugin = document.createElement('plugin-vision') as any;
		visionPlugin.setAttribute('name', 'Hello vision plugin');
		visionPlugin.setAttribute('websocket-service', { query: function(api)  {
			return Promise.resolve('hahaha');
		}});
		hostElement.appendChild(visionPlugin);

		this.loaded = true;
	}
}

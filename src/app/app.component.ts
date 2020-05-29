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
		const hostElement = document.getElementById('pluginHost');
		const visionPlugin = document.createElement('plugin-vision') as any;
		const mpScript = document.createElement('script');
		mpScript.src = 'assets/plugins/plugin.js';

		visionPlugin.name = 'Hello vision plugin';
		visionPlugin.websocketService = { query: () => Promise.resolve('awsome') };

		hostElement.appendChild(mpScript);
		hostElement.appendChild(visionPlugin);
	}
}

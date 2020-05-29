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

		const visionPlugin = document.createElement('plugin-vision')as HTMLElement;
		visionPlugin.setAttribute('name', 'Hello vision plugin');
		visionPlugin.addEventListener('query-event', function(event: CustomEvent) {
			console.log(event.detail);
			visionPlugin.setAttribute('name', 'Query result');
		});
		hostElement.appendChild(visionPlugin);
		this.loaded = true;
	}
}
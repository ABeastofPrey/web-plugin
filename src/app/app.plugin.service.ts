import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class AppPluginService {
    private config = {
        "client-a": {
            loaded: false,
            path: 'assets/plugins/plugin-a/main.js',
            element: 'client-a'
        },
        "client-b": {
            loaded: false,
            path: 'assets/plugins/plugin-b/main.js',
            element: 'client-b'
        },
    };

    constructor(private message: NzMessageService) { }

    public loadPlugin(): void {
        this.load('client-a');
        // this.load('client-b');
    }

    private load(name: string): void {
        console.log(`load: ${name}`);
        const configItem = this.config[name];
        if (configItem.loaded) return;

        const content = document.getElementById('pluginContent');

        const script = document.createElement('script');
        script.src = configItem.path;
        content.appendChild(script);

        const element: HTMLElement = document.createElement(configItem.element);
        content.appendChild(element);

        element.addEventListener('message', (msg: any) => console.debug('shell received message: ', msg.detail));
        element.setAttribute('state', 'init');

        script.onload = () => {
            this.message.create('success', `Plugin loaded.`);
        };
        script.onerror = () => {
            this.message.create('error', `Plugin load failed.`);
        };


        // this.stateService.registerClient(element);
    }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisionComponent } from './vision/vision.component';
import { VisionTemplateConfigComponent } from './vision/vision-template-config/vision-template-config.component';
import { VisionCalibrationComponent } from './vision/vision-calibration/vision-calibration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { NgElement, WithProperties } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    VisionComponent,
    VisionTemplateConfigComponent,
    VisionCalibrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [VisionComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    // this.ngDoBootstrap();
  }

  ngDoBootstrap() {
    console.log('define plugin-vision')
    const visionEle = createCustomElement(VisionComponent, { injector: this.injector });
    customElements.define('plugin-vision', visionEle);

    // setTimeout(() => {
    //   const myPlugin: NgElement & WithProperties<VisionComponent> = document.createElement('plugin-vision') as any;
    //   myPlugin.name = 'Hello vision';
    //   myPlugin.websocketService = { query: () => Promise.resolve('haha') };
    //   document.body.appendChild(myPlugin);
    // }, 50);
  }
}

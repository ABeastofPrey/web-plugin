import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisionComponent } from './vision/vision.component';
import { VisionNavigatorComponent } from './vision/vision-navigator/vision-navigator.component';
import { VisionTemplateConfigComponent } from './vision/vision-template-config/vision-template-config.component';
import { VisionCalibrationComponent } from './vision/vision-calibration/vision-calibration.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { DemoMaterialModule } from './material-module';
import { CommonCompsModule } from './common-comps/common-comps.module';

import { NgElement, WithProperties } from '@angular/elements';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    VisionComponent,
    VisionTemplateConfigComponent,
    VisionCalibrationComponent,
    VisionNavigatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    DemoMaterialModule,
    CommonCompsModule
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

    setTimeout(() => {
      if (environment.production) return;
      const myPlugin: NgElement & WithProperties<VisionComponent> = document.createElement('plugin-vision') as any;
      document.body.appendChild(myPlugin);
    }, 50);
  }
}

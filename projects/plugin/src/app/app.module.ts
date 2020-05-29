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
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';

import { NgElement, WithProperties } from '@angular/elements';
import { environment } from '../environments/environment';

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
    MatTabsModule,
    MatIconModule,
    MatSelectModule
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
      myPlugin.name = 'Hello vision';
      document.body.appendChild(myPlugin);
    }, 50);
  }
}

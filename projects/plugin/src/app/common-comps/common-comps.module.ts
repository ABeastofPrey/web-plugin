import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDialogTemplateComponent } from './new-dialog-template/new-dialog-template.component';
import { IpAddressComponent } from './ip-address/ip-address.component';
import { IpFormFieldComponent } from './ip-form-field/ip-form-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material-module';
@NgModule({
    declarations: [NewDialogTemplateComponent, IpAddressComponent, IpFormFieldComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, DemoMaterialModule],
    exports: [NewDialogTemplateComponent, IpAddressComponent, IpFormFieldComponent],
    providers: [],
    entryComponents: [NewDialogTemplateComponent, IpAddressComponent]
})
export class CommonCompsModule { }
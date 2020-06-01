import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDialogTemplateComponent } from './new-dialog-template/new-dialog-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material-module';
@NgModule({
    declarations: [NewDialogTemplateComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, DemoMaterialModule],
    exports: [NewDialogTemplateComponent],
    providers: [],
    entryComponents: [NewDialogTemplateComponent]
})
export class CommonCompsModule { }
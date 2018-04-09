import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrinterRoutingModule } from './printer-routing.module';
import { PrinterComponent } from './printer.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModelComponent } from './form-model/form-model.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrinterRoutingModule
  ],
  declarations: [
    PrinterComponent,
    FormTemplateDrivenComponent,
    FormModelComponent
  ],
  exports: [
    PrinterComponent
  ]
})
export class PrinterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrinterRoutingModule } from './printer-routing.module';
import { PrinterComponent } from './printer.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrinterRoutingModule
  ],
  declarations: [
    PrinterComponent,
    FormTemplateDrivenComponent
  ],
  exports: [
    PrinterComponent
  ]
})
export class PrinterModule { }

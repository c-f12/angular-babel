import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CabezaComponent } from './cabeza/cabeza.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PieComponent,
    CabezaComponent,
    LogoComponent,
    MenuComponent,
  ],
  exports: [
    PieComponent,
    CabezaComponent,
    MenuComponent
    // No necesitamos exportar el logo porque no vamos a usarlo fuera de este módulo
  ]
})
export class CoreModule { }

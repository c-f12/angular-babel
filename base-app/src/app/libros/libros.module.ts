import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BooksService } from '../servicios/books.service';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { FormsModule } from '@angular/forms';
import { LibrosGoogleComponent } from './libros-google/libros-google.component';
import { HttpClientModule } from '@angular/common/http';
 /* Importamos el módulo donde esta contenido el servicio, este módulo es el q hace la inyeccion */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LibrosRoutingModule
  ],
  declarations: [
    LibrosComponent,
    LibrosMockComponent,
    LibrosGoogleComponent
  ],
  exports: [
    LibrosComponent
  ],
  providers: [
    BooksService
  ]
})
export class LibrosModule { }

import { Component, OnInit } from '@angular/core';
import { GbooksService } from '../../servicios/gbooks.service';

@Component({
  selector: 'bbl-libros-by-servicio',
  templateUrl: './libros-by-servicio.component.html',
  styleUrls: ['./libros-by-servicio.component.css']
})
export class LibrosByServicioComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;
  constructor(public gbook: GbooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.gbook.getLibros(this.clave)
    .then( (response) => this.aLibros = response );
  }

  buscarRx() {
    this.gbook.getLibrosRx(this.clave)
    .subscribe( (response: any) => this.aLibros = response );
  }

}

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../servicios/books.service';

@Component({
  selector: 'bbl-libros-mock',
  templateUrl: './libros-mock.component.html',
  styleUrls: ['./libros-mock.component.css']
})
export class LibrosMockComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;
  constructor(public bookService: BooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.aLibros = []; // <-- Con cada búsqueda vaciamos el array.
    this.aLibros = this.bookService.getLibros(this.clave);
    this.clave = '';
  }

  buscarAsync() {
    this.aLibros = [];
    this.bookService.getLibrosAsync(this.clave)
    .then((response: any) => this.aLibros = response)
    .catch((error) => console.log(error));
  }

}

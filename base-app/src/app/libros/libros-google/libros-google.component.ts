import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bbl-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;
  urlBase: string;

  constructor(public http: HttpClient) { } // Inyecto el servicio http en el constructor del componente

  ngOnInit() {
    this.aLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  buscar() {
    this.aLibros = []; // <-- Con cada búsqueda vaciamos el array.
    const url = this.urlBase + this.clave;
    this.http.get(url).toPromise()  // <-- En lugar de devolverme un observable q me devuelva una promesa
    .then((response: any) => {
      console.log(response);
      response.items.forEach(element => {
        this.aLibros.push(element.volumeInfo.title);
      });
    })
    .catch((error) => console.log(error));

    this.clave = '';
  }

 /*  buscarAsync() {
    this.aLibros = [];
    this.bookService.getLibrosAsync(this.clave)
    .then((response: any) => this.aLibros = response)
    .catch((error) => console.log(error));
  } */

}

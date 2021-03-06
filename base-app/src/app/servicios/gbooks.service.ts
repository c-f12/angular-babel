import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GbooksService {

  urlBase: string;
  aLibros: Array<string>;
  constructor(public http: HttpClient) {
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
   }

/*   getLibrosBasic(clave: string): any {
    this.aLibros = [];
    const url = this.urlBase + clave;

    return this.http.get(url).toPromise();
  } */

  getLibros(clave: string): any {
    this.aLibros = [];
    const url = this.urlBase + clave;

    return this.http.get(url).toPromise()
    .then((response: any) => {
      console.log(response);
      response.items.forEach(element => {
        this.aLibros.push(element.volumeInfo.title);
      });
      return new Promise((resolve, reject) => resolve(this.aLibros));
    });
  }

  getLibrosRx(clave: string): any {
    this.aLibros = [];
    const url = this.urlBase + clave;
    // Devolvemos el observable tal y como nos llega:
    // En Angular5 usar pipe() como envoltorio para funciones antiguas:
    return this.http.get(url).pipe(
      response => this.extractTitles(response) );
  }

  private extractTitles(response: any) {
    // items dentro del JSON - items es el nombre del array
    if (response.items) {
      return response.items.map(book => book.volumeInfo.title);
    } else {
      return response;
    }
  }
}

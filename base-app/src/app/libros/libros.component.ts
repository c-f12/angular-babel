import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-libros',
  template: `
    <div class="container">
      <div class="row">
        <bbl-libros-mock class="col-4"></bbl-libros-mock>
        <bbl-libros-google class="col-4"></bbl-libros-google>
        <bbl-libros-by-servicio class="col-4"></bbl-libros-by-servicio>
      </div>
    </div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

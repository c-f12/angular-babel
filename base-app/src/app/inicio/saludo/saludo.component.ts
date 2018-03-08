import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bbl-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],

  // Native - lo aisla(shadowDOM); Emulated - afecta únicamente a este componente:
  // encapsulation: ViewEncapsulation.Emulated
})
export class SaludoComponent implements OnInit {

  sNombre: string;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Luis';
  }

  btnBorrar() {
    this.sNombre = '';
  }

}

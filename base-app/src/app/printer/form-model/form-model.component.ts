import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PrinterIf, DptoIf } from '../../modelos/master.model';
import { Printers, Dptos } from '../../modelos/master.data';

@Component({
  selector: 'bbl-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {
  aPrinters: Array<PrinterIf>;
  aDptos: Array<DptoIf>;
  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.aPrinters = Printers;
    this.aDptos = Dptos;
    /* Creamos el objeto correspondiente al formulario:
       Dos formas:
      - usando formBuilder
      - usando FormGroup
    */
   // Un FormGroup recibe un objeto donde le decimos todas las propiedades del formulario:
  // Pasamos un objeto plano (sin subobjetos) porq sino tendriamos que crear mas FormGroups:
  /* Le pasamos todos los campos de nuestro formulario y cada uno es un FormControl,
  que es el que permite que se cree la relación, que guarda la info procedente del formulario */
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      telefono: new FormControl(),
      printer: new FormControl(),
      isColor: new FormControl(),
      isClaro: new FormControl(),
      dpto: new FormControl(),
    });
  }

  enviar() {
    console.log(this.formulario);
  }

  borrar() {
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PrinterIf, DptoIf } from '../../modelos/master.model';
import { Printers, Dptos } from '../../modelos/master.data';
import { OrderPrintIf } from '../../modelos/ordenprint.model';

@Component({
  selector: 'bbl-form',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {
  aPrinters: Array<PrinterIf>;
  aDptos: Array<DptoIf>;
  orderPrint: OrderPrintIf;

  // Decorador para ver las propiedades del form -> devuelve un ElementRef
  @ViewChild('formPrinter') formulario: any;
  @ViewChild('nameState') nameState: any;

  constructor() { }

  ngOnInit() {
    this.aPrinters = Printers;
    this.aDptos = Dptos;
    this.orderPrint = {
      user: { nombre: '', apellidos: '', telefono: ''},
      printer: {id: '', name: ''},
      isColor: false,
      isClaro: false,
      dpto: {id: '', name: ''}
    };

    console.dir(this.formulario);
    console.dir(this.nameState);
  }

  enviar() {
    console.log('Datos enviados');
    console.dir(this.nameState);
  }

  borrar() {
    this.formulario.reset();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  sTarea: string;
  aTareas: Array<string>;

  constructor() { }

  ngOnInit() {
    // Arrrays y objetos hay que inicializarlos - tb puede ser this.aTareas = new Array<string> ()
    this.aTareas = [];
  }

  addTarea() {
    if (this.sTarea.length) {
      this.aTareas.push(this.sTarea);
    }
  }

  deleteTarea(i) {
    this.aTareas.splice(i, 1);
  }
}

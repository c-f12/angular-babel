import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-printer',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-6">
          <bbl-form></bbl-form>
        </div>
        <div class="col-6">
          <bbl-form-model></bbl-form-model>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PrinterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

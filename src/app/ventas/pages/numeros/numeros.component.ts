import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ventasNetas: number = 2313145123.6733;
  porcentaje: number = 0.4856;

}

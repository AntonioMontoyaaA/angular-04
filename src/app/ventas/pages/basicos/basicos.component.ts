import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreLower: string = 'antonio';
  nombreUpper: string = 'ANTONIO';
  nombreCompleto: string = 'anToNIo monTOyA';

  fecha: Date = new Date();

}

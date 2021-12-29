import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //i18nSelect
  nombre: string = 'Juan';
  genero:string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Jose', 'Juan', 'Test', 'Test2'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarNombre() {
    if(this.genero === 'masculino') {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Antonio';
      this.genero = 'masculino';
    }
  }

  eliminarNombre() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Antonio',
    edad: 37,
    direccion: 'Plano, TX'
  }

  //JSON pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },{
      nombre: 'Aquaman',
      vuela: true
    }
  ]

  //Async pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}

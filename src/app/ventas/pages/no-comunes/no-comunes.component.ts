import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Susan';
  genero: string = 'femenino';
  
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };
  
  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juani', 'Luis'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  };

  cambiarCliente() {
    this.nombre = 'Luis';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // keyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: true
    }
  ];

  // Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  } );

}

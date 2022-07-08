import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  listEstudiantes: any[] = [
    {nombre: 'Santiago', estado: 'Promocionado', graduado: 'si'},
    {nombre: 'Juan', estado: 'Promocionado', graduado: 'si'},
    {nombre: 'Ricardo', estado: 'Regular', graduado: 'no'},
    {nombre: 'Nicolas Gómez', estado: 'Libre', graduado: 'no'}
  ]
  mostrar = true;

  constructor() { }

  ngOnInit(): void {
  }

  toogle(): void{
    this.mostrar = !this.mostrar;
  }

}

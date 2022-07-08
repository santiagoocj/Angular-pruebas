import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HolaMundo';
  nombre = 'Santiago';
  textoPlaceHolder = 'Escriba algo aquí';
  desabilitado = true;
  imagenboostrap = 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png';
  texto = 'click abajo para cambiar el texto';
  twoWayDataBinding = '';

  constructor(){
    setInterval(() => this.nombre = 'Javier', 3000);
    setInterval(() => this.desabilitado = false, 3000);
  }

  getSuma(numero1: number, numero2: number){
    return numero1 + numero2;
  }

  cambiarTexto():void{
    this.texto = 'Texto cambiado :>';
  }
}

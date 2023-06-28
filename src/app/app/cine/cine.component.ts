import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  nombre!: string;
  boletos!: number;
  personas!: number;
  tarjeta!: string;
  total!: number;
  mensaje!: string;

  calcular() {
    this.mensaje = "";
    if (this.boletos/this.personas > 7){
      this.mensaje = "No se pueden comprar más de 7 boletos por persona";
    } else {
      let descuento = 0;
      this.total = this.boletos * 12;
      if (this.boletos > 5) {
        descuento = descuento + 0.15;
      } else if (this.boletos > 2) {
        descuento = descuento + 0.10;
      }

      if (this.tarjeta == "si") {
        descuento = descuento + 0.10;
      }

      this.total = this.total - this.total * descuento;
    }
  }
}


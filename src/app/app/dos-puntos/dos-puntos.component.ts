import { Component } from '@angular/core';

@Component({
  selector: 'app-dos-puntos',
  templateUrl: './dos-puntos.component.html',
  styleUrls: ['./dos-puntos.component.css']
})
export class DosPuntosComponent {

  
  x1!:number;
  x2!:number;
  y1!:number;
  y2!:number;
  resultado!:string;


  calcular() : void{
    let res = Math.sqrt(Math.pow(this.x2-this.x1, 2) + Math.pow(this.y2-this.y1, 2))
    this.resultado = ('La distancia es ') + res.toFixed(2)
  }
}

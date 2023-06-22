import { Component } from '@angular/core';

@Component({
  selector: 'app-dos-puntos',
  templateUrl: './dos-puntos.component.html',
  styleUrls: ['./dos-puntos.component.css']
})
export class DosPuntosComponent {

  
  num1="";
  num2="";
  resultado:number=0;


  sumar(){
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }
}

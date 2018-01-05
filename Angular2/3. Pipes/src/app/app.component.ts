import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string ="Andrés";
  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  a:number = 0.234;
  salario:number = 1234.5;
  objeto = {
    nombre: "Andrés",
    edad: 22,
    direccion:{
      calle:"Calle",
      case:"Casa"
    }
  }
  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Data correcto');
    },3500);
  })
  fecha = new Date();
  nombre2:string ="anDrés saNCHo ASíN";
}

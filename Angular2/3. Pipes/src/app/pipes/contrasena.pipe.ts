import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, cifrar:boolean = true): string {
    if(cifrar){
      let aux:string = "";
      for(let i:number = 0;i<value.length;i++){
        aux += '*';
      }
      value = aux;
    }
    return value;
  }

}

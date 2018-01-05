import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean = true): string {
    value = value.toLowerCase();
    let values = value.split(" ");
    if(values.length>0){
      if(todas){
        for(let i in values){
          values[i] = values[i][0].toUpperCase()+values[i].substring(1);
        }
      }else{
        values[0] = values[0][0].toUpperCase()+values[0].substring(1);
      }
    }
    return values.join(" ");
  }

}

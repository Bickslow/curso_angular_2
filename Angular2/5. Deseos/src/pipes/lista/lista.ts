import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../app/clases/listas';

/**
 * Generated class for the ListaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'lista',
  pure: false //El pipe se ejecutará cada vez que cargue la vista
})
export class ListaPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(listas: Lista[], tipo:boolean = false):Lista[] {
    let listasTipo:Lista[] = [];
    for (let i = 0; i < listas.length; i++) {
        if(listas[i].terminada == tipo){
          listasTipo.push(listas[i]);
        }
    }
    return listasTipo;
  }
}

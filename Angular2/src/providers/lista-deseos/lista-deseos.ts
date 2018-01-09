import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lista } from '../../app/clases/listas';

/*
  Generated class for the ListaDeseosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaDeseosProvider {
  listas:Lista[] = [];
  constructor() {
    this.cargarListasLocal();
  }

  cargarListasLocal(){
    if(localStorage.getItem("listas")){
      this.listas = JSON.parse(localStorage.getItem("listas"));
    }
  }

  guardarListasLocal(){
    localStorage.setItem("listas",JSON.stringify(this.listas));
  }

  guardarListaLocal(lista:Lista){
    this.listas.push(lista);
    this.guardarListasLocal();
  }

}

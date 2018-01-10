import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lista } from '../../app/clases/listas';
import { ListaItem } from '../../app/clases/lista-item';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  idx:number;
  lista:Lista;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _listaDeseosProvider:ListaDeseosProvider,
              public alertCtrl:AlertController) {
    this.idx  = this.navParams.get("idx");
    this.lista  = this.navParams.get("lista");
  }

  ionViewDidLoad() {
  }

  actualizar(item:ListaItem){
    item.completado = !item.completado;
    this.lista.terminada = this.compruebaCompletados();
    this._listaDeseosProvider.guardarListasLocal();
  }

  compruebaCompletados(){
    for (let i = 0; i < this.lista.items.length; i++) {
      let item = this.lista.items[i];
      if(item.completado == false){
        return false;
      }
    }
    return true;
  }

  borrarLista(){
    let alert = this.alertCtrl.create({
      title:'Cuidado',
      subTitle: 'La lista será eliminada',
      buttons: [{
          text: 'Cancelar',
          handler: () => {
            return;
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this._listaDeseosProvider.borrarLista(this.idx);
            this.navCtrl.pop();
          }
        }]
    });
    alert.present();
  }

}

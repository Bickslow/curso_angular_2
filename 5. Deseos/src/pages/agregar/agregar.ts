import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lista } from '../../app/clases/listas';
import { ListaItem } from '../../app/clases/lista-item';
import { AlertController } from 'ionic-angular';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  nombreLista:string = "";
  nombreItem:string = "";

  items:ListaItem[] = [];
  constructor(public alertCtrl:AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              public _listaDeseos: ListaDeseosProvider) {
  }

  ionViewDidLoad() {
  }

  agregar(){
    if(this.nombreItem.length>0){
      let item = new ListaItem();
      item.nombre = this.nombreItem;
      this.items.push(item);
      this.nombreItem = "";
    }return;
  }

  borrarItem(i:number){
    this.items.splice(i,1);
  }

  guardarLista(){
    if(this.nombreLista.length > 0){
      let lista = new Lista (this.nombreLista);
      lista.items = this.items;
      this._listaDeseos.guardarListaLocal(lista);
      this.navCtrl.pop();
    }else{
      let alert = this.alertCtrl.create({
        title:'Cuidado',
        subTitle: 'El nombre de la lista está vacío',
        buttons: ['OK']
      });
      alert.present();return;
    }
  }
}

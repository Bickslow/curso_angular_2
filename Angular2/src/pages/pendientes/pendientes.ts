import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
import { AgregarPage } from '../agregar/agregar';

/**
 * Generated class for the PendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  constructor(public _listaDeseos: ListaDeseosProvider,
              private navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendientesPage');
  }

  agregar(){
    this.navCtrl.push(AgregarPage);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
import { AgregarPage } from '../agregar/agregar';
import { DetallePage } from '../detalle/detalle';

/**
 * Generated class for the TerminadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosPage {

  constructor(public _listaDeseos: ListaDeseosProvider,
              private navCtrl: NavController) {

  }

  ionViewDidLoad() {
  }

  verDetalle(lista, idx){
    this.navCtrl.push(DetallePage, {
      lista,
      idx
    });
  }

}

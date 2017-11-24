import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AreaPage } from '../../pages/area/area';
import { NivelPage } from '../../pages/nivel/nivel';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, public loadingCtrl: LoadingController ) {
  }
  data = {};

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  saveForm(){
    let loading = this.loadingCtrl.create({
      content: 'Registrando...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss(this.navCtrl.setRoot(HomePage));
    }, 2000);

  	
  }

  verArea(){
    let modal = this.modal.create(AreaPage);
    modal.present();
  }

  verNivel(){
    let modal = this.modal.create(NivelPage);
    modal.present();
  }

}

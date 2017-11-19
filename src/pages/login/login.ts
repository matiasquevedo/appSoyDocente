import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { RegisterPage } from '../../pages/register/register';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
  }
  data = {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registrar(){
  	let modal = this.modal.create(RegisterPage);
    modal.present();
  }

  saveForm(){
  	this.navCtrl.setRoot(HomePage);
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModalPage } from '../../pages/modal/modal';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modal: ModalController) {

  }

  mostrar(){
  	let modal = this.modal.create(ModalPage);
    modal.present();
  }



}

/*generate page login va a mostrar suplencias
boton agregar 
nombre apellido email
edad area nivel
foto perfil
*/

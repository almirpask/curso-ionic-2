import { ModalLogin } from './../modal-login/modal-login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the Modal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class Modal {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal');
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalLogin);

    modal.onDidDismiss((data)=>{
      console.log(data);
    });

    modal.present();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';

/**
 * Generated class for the Toast page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class Toast {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Toast');
  }

  showToast(){
    console.log('entrou toast');
    let toast = this.toastCtrl.create({
      message: 'olar',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Fechar'
    });

    toast.onDidDismiss( ()=>{
      console.log('finalizado');
    });
    toast.present();
  }
}

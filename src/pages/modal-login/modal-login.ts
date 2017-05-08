import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalLogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-login',
  templateUrl: 'modal-login.html',
})
export class ModalLogin {
  user: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalLogin');
  }

  logar(){
    this.viewCtrl.dismiss(this.user);
  }

  close(){
    this.viewCtrl.dismiss();
  }

}

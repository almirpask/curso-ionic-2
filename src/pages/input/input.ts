import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';

/**
 * Generated class for the Input page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-input',
  templateUrl: 'input.html',
})
export class Input {
  login:string;
  senha:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Input');
  }

  entrar(){
    let texto = ('Login: '+ this.login + ' senha: ' + this.senha);
    let alert = this.alertCtrl.create({
      title: 'entrando...',
      subTitle: texto
    });
    alert.present();
  }

}

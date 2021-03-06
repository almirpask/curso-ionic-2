import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Card page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class Card {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('mensagem'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Card');
  }
  voltar(){
    this.navCtrl.pop();
  }
}

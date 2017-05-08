import { ContatosTab } from './../contatos-tab/contatos-tab';
import { HomeTab } from './../home-tab/home-tab';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tab page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class Tab {

  homePage:any = HomeTab;
  contatosPage:any = ContatosTab;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab');
  }

}

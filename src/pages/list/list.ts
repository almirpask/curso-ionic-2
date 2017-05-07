import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the List page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class List {

  personagens: Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personagens = [
      'Tyrion Lannister',
      'Daenerys Targaryen',
      'Oberin Martell'
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad List');
  }

}

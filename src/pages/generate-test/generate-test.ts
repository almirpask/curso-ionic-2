import { ConnectionService } from './../../providers/connection-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GenerateTest page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-generate-test',
  templateUrl: 'generate-test.html',
  providers: [ConnectionService]
})
export class GenerateTest {

  constructor(public navCtrl: NavController, public navParams: NavParams, private connectionService: ConnectionService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateTest');
  }
  
  buscarCep():void{
    this.connectionService.getCep('18460000')
    .then((res)=>{
      let json = res.json();
      console.log(json);
    }).catch((err)=>{
      console.log(err);
    });
  }
}

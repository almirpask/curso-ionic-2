import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Alert page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class Alert {
  user : string =   'none'

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Alert');
  }
  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Meu alerta',
      subTitle: 'Alerta maneiro',
      buttons: ['OK']
    })
    
    alert.present();
  }
  
  showAlertInputs(){
    let alert = this.alertCtrl.create({
      title: 'Meu alerta',
      subTitle: 'Alerta maneiro',
      inputs:[
        {name:'nome', placeholder:'digite um nome'}
      ],
      buttons: [
        {text:'cancelar'},
        {
          text:'oK',
          handler: (data) => {
            this.user = data.nome;
          }

        },

      ]
    })
    
    alert.present();
  }

}

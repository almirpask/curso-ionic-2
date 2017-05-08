import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContatosTab } from './contatos-tab';

@NgModule({
  declarations: [
    ContatosTab,
  ],
  imports: [
    IonicPageModule.forChild(ContatosTab),
  ],
  exports: [
    ContatosTab
  ]
})
export class ContatosTabModule {}

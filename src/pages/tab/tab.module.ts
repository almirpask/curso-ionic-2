import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab } from './tab';

@NgModule({
  declarations: [
    Tab,
  ],
  imports: [
    IonicPageModule.forChild(Tab),
  ],
  exports: [
    Tab
  ]
})
export class TabModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTab } from './home-tab';

@NgModule({
  declarations: [
    HomeTab,
  ],
  imports: [
    IonicPageModule.forChild(HomeTab),
  ],
  exports: [
    HomeTab
  ]
})
export class HomeTabModule {}

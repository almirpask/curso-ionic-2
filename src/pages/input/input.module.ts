import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Input } from './input';

@NgModule({
  declarations: [
    Input,
  ],
  imports: [
    IonicPageModule.forChild(Input),
  ],
  exports: [
    Input
  ]
})
export class InputModule {}

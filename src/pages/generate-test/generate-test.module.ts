import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerateTest } from './generate-test';

@NgModule({
  declarations: [
    GenerateTest,
  ],
  imports: [
    IonicPageModule.forChild(GenerateTest),
  ],
  exports: [
    GenerateTest
  ]
})
export class GenerateTestModule {}

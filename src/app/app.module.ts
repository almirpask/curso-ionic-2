import { List } from './../pages/list/list';
import { Input } from './../pages/input/input';
import { Icons } from './../pages/icons/icons';
import { Card } from './../pages/card/card';
import { Button } from './../pages/button/button';
import { Alert } from './../pages/alert/alert';
import { HttpModule } from '@angular/http';
import { GenerateTest } from './../pages/generate-test/generate-test';
import { MenuTest } from './../pages/menu-test/menu-test';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTest,
    GenerateTest,
    Alert,
    Button,
    Card,
    Icons,
    Input,
    List

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTest,
    GenerateTest,
    Alert,
    Button,
    Card,
    Icons,
    Input,
    List
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

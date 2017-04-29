import { GenerateTest } from './../pages/generate-test/generate-test';
import { MenuTest } from './../pages/menu-test/menu-test';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<{component: any, title: string, icon: string}>
  rootPage:any = HomePage;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      {component: HomePage, title: 'Home', icon:'home'},
      {component: MenuTest, title: 'Menu Teste', icon:'home'},
      {component: GenerateTest, title: 'Generate', icon:'home'},
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page:any):void {
    this.rootPage = page.component;
    
  }
}


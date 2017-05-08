import { Toast } from './../pages/toast/toast';
import { Tab } from './../pages/tab/tab';
import { Navigation } from './../pages/navigation/navigation';
import { Modal } from './../pages/modal/modal';
import { Grid } from './../pages/grid/grid';
import { List } from './../pages/list/list';
import { Input } from './../pages/input/input';
import { Icons } from './../pages/icons/icons';
import { Card } from './../pages/card/card';
import { Button } from './../pages/button/button';
import { Alert } from './../pages/alert/alert';
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
      {component: Alert, title: 'Alert', icon:'alert'},
      {component: Button, title: 'Button', icon:'md-radio-button-on'},
      {component: Card, title: 'Card', icon:'md-albums'},
      {component: Icons, title: 'Icons', icon:'md-attach'},
      {component: Input, title: 'Inputs', icon:'md-attach'},
      {component: List, title: 'Lists', icon:'car'},
      {component: Grid, title: 'Grids', icon:'star'},
      {component: Modal, title: 'Modals', icon:'md-bonfire'},
      {component: Navigation, title: 'Navigations', icon:'navigate'},
      {component: Tab, title: 'Tabs', icon:'sync'},
      {component: Toast, title: 'Toast', icon:'sunny'},

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


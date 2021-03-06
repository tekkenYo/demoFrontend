import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform, Events, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Login } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ClaimResultPage } from '../pages/claim-result/claim-result';
import { CreateClaimPage } from '../pages/create-claim/create-claim';
import { ClaimListPage } from '../pages/claim-list/claim-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = Login;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
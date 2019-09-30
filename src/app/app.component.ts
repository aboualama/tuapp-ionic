import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SettingProvider } from './provider/setting/setting';

import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent  implements OnInit { 
 
  public username: any;
  public usermail: any;

  async ngOnInit() {
    let user = await Auth.currentAuthenticatedUser(); 
    const { attributes } = user;
    this.username = await user.username;  
    this.usermail = await attributes.email;  
    console.log(attributes); 
  }




  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },  
    {
      title: 'Login & Register',
      url: '/login',
      icon: 'log-in'
    },   
    {
      title: 'Add Service',
      url: '/addservice',
      icon: 'add'
    } ,   
    {
      title: 'Services',
      url: '/service',
      icon: 'bowtie'
    } ,   
    {
      title: 'Booked Service',
      url: '/bookedservice',
      icon: 'checkbox-outline'
    } ,   
    {
      title: 'City',
      url: '/city',
      icon: 'pin'
    } 
  ];

  constructor(
    SettingProvider: SettingProvider,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

  ) {
    this.initializeApp();
    SettingProvider;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

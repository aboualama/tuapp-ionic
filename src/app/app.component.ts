import {Component, OnInit} from '@angular/core';

import {Events, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SettingProvider} from './provider/setting/setting';
import {AppId} from './AppId/Id';
import {Auth} from 'aws-amplify';
import {Router} from '@angular/router';
import {AmplifyService} from 'aws-amplify-angular';
import {AuthGuardService} from './services/auth-route-guard';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    public username = 'User Name';
    public usermail = 'User Email';
    public user;
    public logedIn: boolean;

    async ngOnInit() {
        console.log(AppId);
        this.user = await Auth.currentUserInfo();
        if (this.user) {
            const {attributes} = this.user;
            this.username = await this.user.username;
            this.usermail = await attributes.email;
            this.router.navigate(['/service']);
        }
    }

    Logout = async () => {
        await Auth.signOut();
    };


    public appPages = [
        /*  {
              title: 'Home',
              url: '/home',
              icon: 'home'
          },*/

        {
            title: 'Servizi',
            url: '/service',
            icon: 'bowtie'
        },
        {
            title: 'lista Prenotazioni',
            url: '/bookedservice',
            icon: 'checkbox-outline'
        }, {
            title: 'Contatti',
            url: '/about',
            icon: 'checkbox-outline'
        },
        {
            title: 'Add Service',
            url: '/addservice',
            icon: 'add'
        },
        {
            title: 'Setting',
            url: '/setting',
            icon: 'add'
        },
        {
          title: 'User Management',
          url: '/usermanagment',
          icon: 'users'
        },/*
        {
            title: 'Login & Register',
            url: '/login',
            icon: 'log-in'
        },*/
        // {
        //   title: 'ui-element',
        //   url: '/ui-element',
        //   icon: 'pin'
        // }
    ];
    authState: any;
    loggedIn: boolean;
    // including AuthGuardService here so that it's available to listen to auth events
    authService: AuthGuardService;
    amplifyService: AmplifyService;

    constructor(

        SettingProvider: SettingProvider,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public events: Events, public router: Router,
        public amplify: AmplifyService
    ) {

        this.authState = {loggedIn: false};
        //  this.authService = guard;
        this.amplifyService = amplify;
        this.amplifyService.authStateChange$
            .subscribe(authState => {
                this.authState.loggedIn = authState.state === 'signedIn';
                if (authState.state === 'signedIn') {
                    this.loggedIn = true;
                    this.router.navigate(['/service']);
                } else if (authState.state === 'signedOut') {
                    this.loggedIn = false;
                    this.router.navigate(['/']);

                }
                this.events.publish('data:AuthState', this.authState);
            });
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

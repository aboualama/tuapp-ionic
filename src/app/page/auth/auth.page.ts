import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Auth, Hub} from 'aws-amplify';
import {Router} from '@angular/router';
import {AmplifyService} from 'aws-amplify-angular';
import {Observable} from 'rxjs';
import {AuthState} from 'aws-amplify-angular/dist/src/providers';
import {Events} from '@ionic/angular';
import {AuthGuardService} from '../../services/auth-route-guard';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements AfterContentInit {
    authState: any;
    // including AuthGuardService here so that it's available to listen to auth events
    authService: AuthGuardService;
    amplifyService: AmplifyService;

    constructor(public events: Events, public router: Router,
                public amplify: AmplifyService) {
        this.authState = {loggedIn: false};
        //  this.authService = guard;
        this.amplifyService = amplify;
        this.amplifyService.authStateChange$
            .subscribe(authState => {
                this.authState.loggedIn = authState.state === 'signedIn';
                if (authState.state === 'signedIn') {
                    this.router.navigate(['/service']);
                } else if (authState.state === 'signedOut') {
                    this.router.navigate(['/']);
                }
                this.events.publish('data:AuthState', this.authState);
            });
    }

    ionViewDidEnter() {
        this.events.publish('data:AuthState', this.authState);
    }

    ngAfterContentInit() {
        Hub.listen('auth', ({payload: {event, data}}) => {
            console.log(data);
            console.log(event);
        });
        /* Hub.listen('auth', ({payload: {event, data}}) => {
             console.log(event,data);
         });*/
    }


    async auth(event) {
        if (Auth.currentUserInfo()) {
            console.log('service');
            console.log('mm');
            // this.router.navigate(['/service']);
        } else {
            console.log('login');
            //    this.router.navigate(['/login']);
        }

    }
}

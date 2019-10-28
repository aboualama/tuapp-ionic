import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicStorageModule} from '@ionic/storage';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {ModalBasicPageModule} from './page/ui-element/modal/modal-basic/modal-basic.module';
import {ModalBoxPageModule} from './page/ui-element/modal/modal-box/modal-box.module';
import {AmplifyIonicModule, AmplifyModules, AmplifyService} from 'aws-amplify-angular';

 
import { DatePicker } from '@ionic-native/date-picker/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        AppRoutingModule,
        ModalBasicPageModule,
        ModalBoxPageModule,


    ],
    providers: [
        StatusBar,
        SplashScreen,
        AmplifyIonicModule,
        AmplifyService,
        DatePicker,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

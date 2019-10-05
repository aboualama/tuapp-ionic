import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';


import API from '@aws-amplify/api';
// import PubSub from '@aws-amplify/PubSub';  
import awsConfig from './aws-exports.js';

import Amplify, {Storage} from 'aws-amplify';  // for auth

// PubSub.configure(awsConfig);  
API.configure(awsConfig);

Amplify.configure(awsConfig);   // for auth


if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AmplifyAngularModule, AmplifyIonicModule, AmplifyService  } from 'aws-amplify-angular';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), 
    AmplifyIonicModule,
    AmplifyAngularModule,
  ],
  declarations: [AuthPage],
  providers: [AmplifyService]
})
export class AuthPageModule {}

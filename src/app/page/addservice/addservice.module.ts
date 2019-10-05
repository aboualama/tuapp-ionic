import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddservicePage } from './addservice.page';
import {AmplifyAngularModule} from 'aws-amplify-angular';

const routes: Routes = [
  {
    path: '',
    component: AddservicePage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        AmplifyAngularModule
    ],
  declarations: [AddservicePage]
})
export class AddservicePageModule {}

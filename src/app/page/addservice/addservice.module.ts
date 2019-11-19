import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddservicePage } from './addservice.page';
import {AmplifyAngularModule, AmplifyIonicModule} from 'aws-amplify-angular';

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
        AmplifyAngularModule,
        AmplifyIonicModule
    ],
  declarations: [AddservicePage]
})
export class AddservicePageModule {}

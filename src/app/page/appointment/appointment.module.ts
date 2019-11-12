import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppointmentPage } from './appointment.page';
import {AppointmentComponent} from '../../calender/appointment/appointment/appointment.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
    declarations: [AppointmentPage, AppointmentComponent]
})
export class AppointmentPageModule {}

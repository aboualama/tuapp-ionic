import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InputPage } from './input.page';
import { ParallaxCommonModule } from '../../../common/parallax/parallax.module';
const routes: Routes = [
  {
    path: '',
    component: InputPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParallaxCommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InputPage]
})
export class InputPageModule {}

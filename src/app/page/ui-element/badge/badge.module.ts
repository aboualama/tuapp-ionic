import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BadgePage } from './badge.page';
import { ParallaxCommonModule } from '../../../common/parallax/parallax.module';

const routes: Routes = [
  {
    path: '',
    component: BadgePage
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
  declarations: [BadgePage]
})
export class BadgePageModule {}

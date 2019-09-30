import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalBasicPage } from './modal-basic.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBasicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalBasicPage],
  entryComponents: [ModalBasicPage],
  exports: [ModalBasicPage]
})
export class ModalBasicPageModule {}
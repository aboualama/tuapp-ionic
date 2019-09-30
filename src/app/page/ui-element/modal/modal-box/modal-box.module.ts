import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalBoxPage } from './modal-box.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBoxPage
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
  declarations: [ModalBoxPage],
  entryComponents: [ModalBoxPage],
  exports: [ModalBoxPage]
})
export class ModalBoxPageModule {}

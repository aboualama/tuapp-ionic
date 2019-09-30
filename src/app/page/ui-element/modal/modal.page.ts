import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalBasicPage } from './modal-basic/modal-basic.page';
import { ModalBoxPage } from './modal-box/modal-box.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  async presentModalBasic() {
    const modal = await this.modalController.create({
      component: ModalBasicPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async presentModalBox() {
    const modal = await this.modalController.create({
      component: ModalBoxPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}

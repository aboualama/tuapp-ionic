import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.page.html',
  styleUrls: ['./modal-box.page.scss'],
})
export class ModalBoxPage implements OnInit {

  constructor(public modalController: ModalController) { }

  dismiss(){
		this.modalController.dismiss();
  }
  
  ngOnInit() {
  }

}

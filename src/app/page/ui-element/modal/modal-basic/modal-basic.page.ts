import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.page.html',
  styleUrls: ['./modal-basic.page.scss'],
})
export class ModalBasicPage implements OnInit {

  constructor(public modalController: ModalController) { }

  dismiss(){
		this.modalController.dismiss();
	}

  ngOnInit() {
  }

}

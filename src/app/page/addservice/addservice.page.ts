import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { graphqlOperation, API } from 'aws-amplify';
 
import * as mutations from '../../../graphql/mutations'; 

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.page.html',
  styleUrls: ['./addservice.page.scss'],
})
export class AddservicePage implements OnInit {

 
  constructor(private modalController: ModalController, private router: Router) { }
 
  async ngOnInit() { }
   
  // create Service
  createService = async (form: { value: { servicetitle: any; serviceprice: any;}; }) => { 
    event.preventDefault()
    const  service = {
      title : form.value.servicetitle,
      price : form.value.serviceprice, 
    };
    await API.graphql(graphqlOperation(mutations.createService , { input: service }));  
    this.router.navigate(['service'])  
  } 
}   
  

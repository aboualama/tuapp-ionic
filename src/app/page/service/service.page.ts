import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { graphqlOperation, API } from 'aws-amplify';

import * as Queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations'; 

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})



export class ServicePage implements OnInit { 

  public services: any;
  public branchs: any;

  constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController, private router: Router) { }

 


  async ngOnInit() {
    this.getdata();
  }
  
  async getdata() {  

    // Get All Services
    const allservices = await API.graphql(graphqlOperation(Queries.listServices));  
    this.services = await allservices.data.listServices.items ; 
    console.log(this.services); 
  }
   

  // remove Service
  removeService = async (service: any , i: any) => {   
    if (i > -1) {
      this.services.splice(i, 1);
      }  
    const serviceId = service.id;
    await API.graphql(graphqlOperation(mutations.deleteService , { input: { id : serviceId } })); 
    console.log(service); 
  } 


  // Select Service
  selectService = async (myid: any) => {    
    this.router.navigate(['appointment/' + myid])  
    } 
  

   

} 

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { graphqlOperation, API } from 'aws-amplify';

import * as Queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations'; 

@Component({
  selector: 'app-bookedservice',
  templateUrl: './bookedservice.page.html',
  styleUrls: ['./bookedservice.page.scss'],
})
export class BookedservicePage implements OnInit {

  public items: any;  

  constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController, private router: Router) { }
 

 
  async ngOnInit() { 

    // Get All Services Booked
    // const allappointment = await API.graphql(graphqlOperation(Queries.listAppointments));  worker_id not found

    const allappointment = await API.graphql(graphqlOperation(`{listAppointments{items{id date start_time service{title}}}}`)); 
    this.items = await allappointment.data.listAppointments.items ;  
    console.log(this.items); 
  }
    

  // remove Service
  // removeService = async (service: any , i: any) => {   
  //   if (i > -1) {
  //     this.services.splice(i, 1);
  //     }  
  //   const serviceId = service.id;
  //   await API.graphql(graphqlOperation(mutations.deleteService , { input: { id : serviceId } })); 
  //   console.log(service); 
  // } 


  // // Select Service
  // selectService = async (myid: any) => {    
  //   this.router.navigate(['appointment/' + myid])  
  //   } 

}

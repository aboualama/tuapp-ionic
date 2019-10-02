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
    const allappointment = await API.graphql(graphqlOperation(Queries.listAppointments));  
    // const allappointment = await API.graphql(graphqlOperation(`{listAppointments{items{id date start_time service{title}}}}`)); 
    this.items = await allappointment.data.listAppointments.items ;  
    console.log(this.items); 
  }
    

  // remove Appointment
  removeAppointment = async (item: any , i: any) => {   
    if (i > -1) {
      this.items.splice(i, 1);
      }  
    const itemId = item.id;
    await API.graphql(graphqlOperation(mutations.deleteAppointment , { input: { id : itemId } })); 
    console.log(item); 
  } 

 

}

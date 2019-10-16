import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';

import {graphqlOperation, API} from 'aws-amplify';
import * as Queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';

import {Auth} from 'aws-amplify';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.page.html',
    styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

    public clientid: any;
    public serviceid: any;
    public servicetitle: any;
    public serviceprice: any;
    public image: any;


    constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController, private router: Router) {
    }

    async ngOnInit() {

        const serviceId = this.activatedRoute.snapshot.paramMap.get('myid');
        const service = await API.graphql(graphqlOperation(Queries.getService, {id: serviceId}));
        this.serviceid = await service.data.getService.id;
        this.image = await service.data.getService.image;
        this.servicetitle = service.data.getService.title;
        this.serviceprice = service.data.getService.price;
        console.log(this.servicetitle);

        let user = await Auth.currentAuthenticatedUser();
        const {attributes} = user;
        this.clientid = await attributes.sub;
        console.log(attributes.sub);
    }


    // Create Appointment
    createAppointment = async (form: { value: { serviceid: any; serviceprice: any; status: any; date: any; start_time: any; }; }) => {
        event.preventDefault();
        const appointment = {
            appointmentServiceId: form.value.serviceid,
            client_id: this.clientid,
            price: form.value.serviceprice,
            status: form.value.status,
            date: form.value.date,
            start_time: form.value.start_time,
            end_time: form.value.start_time,
        };
        await API.graphql(graphqlOperation(mutations.createAppointment, {input: appointment}));
        this.router.navigate(['bookedservice']);
    };
<<<<<<< HEAD
    await API.graphql(graphqlOperation(mutations.createAppointment , { input: appointment }));
    this.router.navigate(['bookedservice'])   
  } 
  
 






































=======
>>>>>>> ee19eaa7a181f9b4d9d71dbe38668a84132e3b59


}

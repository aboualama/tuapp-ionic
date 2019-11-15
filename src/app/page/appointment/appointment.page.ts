import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {AppId} from '../../AppId/Id';

import {graphqlOperation, API} from 'aws-amplify';
import * as Queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import * as moment from 'moment/moment';

import {Auth} from 'aws-amplify';

import {DatePicker} from '@ionic-native/date-picker/ngx';
import {SlotService} from '../../calender/slot.service';
import {listApps} from '../../../graphql/queries';

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
    public start_times: any;
    public end_times: any;
    public calender_offset: any;
    public moment: any;
    public Id: any;
    public all_times: any;
    public times: any;
    public status: false;
    public service_duration: any;
    public slot: any;
    public service: any;
    public date: any;


    constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController
        , private router: Router, private datePicker: DatePicker, public slotService: SlotService) {
        this.moment = moment();
    }
    
    async ngOnInit() {

        // Get User
        const user = await Auth.currentAuthenticatedUser();
        const {attributes} = user;
        this.clientid = await attributes.sub;

        // Get Service
        const Id = this.activatedRoute.snapshot.paramMap.get('myid');
        this.service = await API.graphql(graphqlOperation(Queries.getService, {id: Id}));
        this.serviceid = await this.service.data.getService.id;
        this.servicetitle = this.service.data.getService.title;
        this.serviceprice = this.service.data.getService.price;
        this.service_duration = this.service.data.getService.duration; 
    }
  


    // Load New Date
    async LoadNewDate($event) {    
        this.date =  moment($event).format('l').toString(); 
        this.getReservedTime(this.date);
    }
 
    // Get Appointments To get reserved_times
    async getReservedTime(date) {
        const appointment = await API.graphql(graphqlOperation(Queries.listAppointments, {
            filter: {
                date: {
                    contains: date
                }
            }
        }));
        console.log('this.date' ,this.date);
        const appointments = await appointment.data.listAppointments.items;
        const reservedTime = [];
        for (let $i = 0; $i < appointments.length; $i++) {
            reservedTime.push([parseInt(appointments[$i].start_time), parseInt(appointments[$i].end_time)]);
        }
         
        const calender_setting = await API.graphql(graphqlOperation(Queries.listSettings, {appId: AppId}));
        const calender_settings = await calender_setting.data.listSettings.items;
        this.calender_offset = await calender_settings[0].calender_offset;

 
        const reserved_times = await reservedTime;
        console.log('reserved_times', reserved_times);
        const available_times = await this.getAvailableTime();
        console.log('available_times', available_times);


        // Get slot with if condition
        const slot = this.calender_offset;
        this.slot = slot;
        console.log('slot', slot);

        const timeslots = this.slotService.getTimeSlots(reserved_times, available_times, true, slot, false, false);
        console.log('timeslots', timeslots);
        this.times = Object.values(timeslots);
    }
  
    // Get Settings To Get Available Time
    async getAvailableTime() {
        const listsettings = await API.graphql(graphqlOperation(Queries.listSettings, {appId: AppId}));
        const settings = await listsettings.data.listSettings.items;
        const availbleTime = [];
        for (let $i = 0; $i < settings.length; $i++) {
            availbleTime.push([this.slotService.toTime(settings[$i].start_time), this.slotService.toTime(settings[$i].end_time)]);
        }
        return availbleTime;
    }


    
 

    createAppointment = async (time: any) => {
        event.preventDefault();
        const appointment = {
            appointmentServiceId: this.serviceid,
            client_id: this.clientid,
            price: this.serviceprice,
            status: false,
            date: this.date,
            start_time: this.slotService.toTime(time),
            end_time: (this.slotService.toTime(time) + this.service_duration),
            appId: AppId
        };
        await API.graphql(graphqlOperation(mutations.createAppointment, {input: appointment}));
        console.log('prenotato');
        this.router.navigate(['service']);
    };
}

 













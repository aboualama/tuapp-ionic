import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {AppId} from '../../AppId/Id';

import {graphqlOperation, API} from 'aws-amplify';
import * as Queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import * as moment from 'moment/moment';

import {Auth} from 'aws-amplify';

import { DatePicker } from '@ionic-native/date-picker/ngx';

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
    

    constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController, private router: Router, private datePicker: DatePicker) {
        this.moment = moment();
    }

    async ngOnInit() {

    // Get service 
        const Id = this.activatedRoute.snapshot.paramMap.get('myid');
        const service = await API.graphql(graphqlOperation(Queries.getService, {id: Id}));
        this.serviceid = await service.data.getService.id;
        this.servicetitle = service.data.getService.title;
        this.serviceprice = service.data.getService.price; 
        this.service_duration = service.data.getService.duration; 

    // Get user 
        let user = await Auth.currentAuthenticatedUser();
        const {attributes} = user;
        this.clientid = await attributes.sub; 
      
    // Get Setting 
        const App_Id = await API.graphql(graphqlOperation(Queries.getApp, {id: AppId}));
        this.start_times = await App_Id.data.getApp.settings.items[0].start_time;
        this.end_times = await App_Id.data.getApp.settings.items[0].end_times;
        this.calender_offset = await App_Id.data.getApp.settings.items[0].calender_offset; 

    // Get slot if condition  
        const slot = this.calender_offset < this.service_duration ? this.calender_offset : this.service_duration;
       
        this.getTime(slot);
        this.getAppointment();
    }


    // Get Time
    async getTime(slot) {  
        console.log(slot + 'eslot'); 

        function timeToArray(start, end, slot){
            start = start.split(":");
            end = end.split(":"); 
            start = parseInt(start[0]) * 60 + parseInt(start[1]);
            end = parseInt(end[0]) * 60 + parseInt(end[1]);
        
            let result = []; 
            for (let  time = start; time <= end; time+=slot){
                result.push( timeString(time));
            } 
            return result;
        }  
        function timeString(time: number){
            let hours: any; 
            let minutes: any;
            hours = Math.floor(time / 60);
            minutes = time % 60; 
            if (hours < 10) hours = "0" + hours;  
            if (minutes < 10) minutes = "0" + minutes; 
            return hours + ":" + minutes;
        } 
        let start   = "09:00" ;
        let end     = "18:00" ; 
        this.all_times = timeToArray(start, end, slot); 
 
    } 
 
    // Get Appointments
    async getAppointment() {
        const appointment = await API.graphql(graphqlOperation(Queries.listAppointments, {
            filter: {
                date: {
                    contains: "2019-10-22"
                }
            }
        }));
        
        let appointments = await appointment.data.listAppointments.items;    
        let reserved_time =[];
        for( let $i = 0 ; $i < appointments.length ; $i++){
            reserved_time.push(appointments[$i].start_time);
        } 
    
        const available_time  = this.all_times.filter((item: any) => reserved_time.indexOf(item) < 0);
        this.times = available_time;  
    } 

    // Create Appointment
    createAppointment = async (time: any) => {
        event.preventDefault();
        const appointment = {
            appointmentServiceId: this.serviceid,
            client_id: this.clientid,
            price: this.serviceprice,
            status: this.status,
            date: "2019-10-22",
            start_time: time,
            end_time: time + this.calender_offset,
        };
        await API.graphql(graphqlOperation(mutations.createAppointment, {input: appointment}));
        this.router.navigate(['service']);
    };    
} 
   










   // const App_Id = await API.graphql(graphqlOperation(`query MyQuery {getApp(id: "1") { settings { items {  start_time  } } } }`));
 
    // let start = this.start_times; 
    // let end   = this.end_times;   
    // let start   = moment(this.start_times).format('HH:mm').toString();
    // let end   = moment(this.end_times).format('HH:mm').toString();
    // let start =  moment(this.start_times).format('LT');
    // let end =  moment(this.end_times).format('LT');
    // console.log(start);
    // console.log(end);
 
    // showDatepicker(){
    //     this.datePicker.show({
    //       date: new Date(),
    //       mode: 'date',
    //       androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
    //       okText:"Save Date",
    //       todayText:"Set Today"
    //     }).then(
    //       date => {
    //         this.myDate = date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear();
    //       },
    //       err => console.log('Error occurred while getting date: ', err)
    //     );
    //   }  
















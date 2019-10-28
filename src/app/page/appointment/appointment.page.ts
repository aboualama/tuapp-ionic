import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';

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
    public image: any;
    public start_times: any;
    public end_times: any;
    public calender_offset: any;
    public times: any;
    public moment: any;


    constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController, private router: Router, private datePicker: DatePicker) {
        this.moment = moment();
    }

    async ngOnInit() {

        const serviceId = this.activatedRoute.snapshot.paramMap.get('myid');
        const service = await API.graphql(graphqlOperation(Queries.getService, {id: serviceId}));
        this.serviceid = await service.data.getService.id;
        this.image = await service.data.getService.image;
        this.servicetitle = service.data.getService.title;
        this.serviceprice = service.data.getService.price;
        this.start_times = service.data.getService.start_time;
        this.end_times = service.data.getService.end_time;
        this.calender_offset = service.data.getService.calender_offset;
        console.log(this.servicetitle);

        let user = await Auth.currentAuthenticatedUser();
        const {attributes} = user;
        this.clientid = await attributes.sub;
        console.log(attributes.sub);

 

        this.getTime();
    }


    async getTime() { 
        function timeToArray(start: any, end: any){
            start = start.split(":");
            end = end.split(":"); 
            start = parseInt(start[0]) * 60 + parseInt(start[1]);
            end = parseInt(end[0]) * 60 + parseInt(end[1]);
        
            let result = []; 
            for (let  time = start; time <= end; time+=30){
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
        let start = this.start_times; 
        let end   = this.end_times;   
        this.times = timeToArray(start, end); 
    }
 



    // Create Appointment
    createAppointment = async (form: { value: { serviceid: any; serviceprice: any; status: any; date: any; start_time: any; end_time: any; }; }) => {
        event.preventDefault();
        const appointment = {
            appointmentServiceId: form.value.serviceid,
            client_id: this.clientid,
            price: form.value.serviceprice,
            status: form.value.status,
            date: form.value.date,
            start_time: form.value.start_time,
            end_time: form.value.end_time,
        };
        await API.graphql(graphqlOperation(mutations.createAppointment, {input: appointment}));
        this.router.navigate(['bookedservice']);
    };   




 
 
    showDatepicker(){
        this.datePicker.show({
          date: new Date(),
          mode: 'date',
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
          okText:"Save Date",
          todayText:"Set Today"
        }).then(
          date => {
            this.myDate = date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear();
          },
          err => console.log('Error occurred while getting date: ', err)
        );
      }  
     
    
} 
   
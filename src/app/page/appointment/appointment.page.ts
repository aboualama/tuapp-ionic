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


        const calender_setting = await API.graphql(graphqlOperation(Queries.listSettings, {appId: AppId}));
        const calender_settings = await calender_setting.data.listSettings.items;
        this.calender_offset = await calender_settings[0].calender_offset;


        const reserved_times = await this.getReservedTime();
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


    // Get Appointments To get reserved_times
    async getReservedTime() {
        const appointment = await API.graphql(graphqlOperation(Queries.listAppointments, {
            filter: {
                date: {
                    contains: '2019-10-22'
                }
            }
        }));
        const appointments = await appointment.data.listAppointments.items;
        const reservedTime = [];
        for (let $i = 0; $i < appointments.length; $i++) {

            reservedTime.push([parseInt(appointments[$i].start_time), parseInt(appointments[$i].end_time)]);
        }
        return reservedTime;
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

    async LoadNewDate() {
    }


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
















import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';
import {AppId} from '../../AppId/Id';

import {graphqlOperation, API} from 'aws-amplify';
import * as Queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import * as moment from 'moment';
import 'moment-timezone';


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

    private days = [];
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
    private dayActive: any;


    constructor(private activatedRoute: ActivatedRoute, private alertCtrl: AlertController, private modalController: ModalController
        , private router: Router, private datePicker: DatePicker, public slotService: SlotService) {
        this.moment = moment().locale('it-IT');
        this.generateDays();
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

        console.log('service', this.service);
        const calender_setting = await API.graphql(graphqlOperation(Queries.listSettings, {appId: AppId}));
        const calender_settings = await calender_setting.data.listSettings.items;

        this.calender_offset = await calender_settings[0].calender_offset;


        await this.loadSlots(this.moment);

    }

    async loadSlots(dateString) {


        const reserved_times = await this.getReservedTime(dateString.format('YYYY-MM-DD'));
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

    generateDays(from = null) {
        console.log(from);
        let now = moment();
        if (from != null) {
            now = moment(from, 'MMM-DD-ddd').locale('it-IT');
        }
        const legnt = this.days.length;
        this.days.push({
            month: now.tz('Europe/Rome').format('MMM'),
            day: now.tz('Europe/Rome').format('DD'),
            dayname: now.tz('Europe/Rome').format('ddd')
        });
        for (let i = 0; i < 6; i++) {
            now.add(1, 'd');

            this.days.push({
                month: now.tz('Europe/Rome').format('MMM'),
                day: now.tz('Europe/Rome').format('DD'),
                dayname: now.tz('Europe/Rome').format('ddd')
            });
        }

        this.dayActive = this.getStrDay(this.days[legnt]);
    }

    checkDay(day: any) {
        this.times = [];
        this.dayActive = this.getStrDay(day);
        console.log('day-active', this.dayActive);
        if (this.days[this.days.length - 1] == day) {
            this.generateDays(this.dayActive);
        }
        this.reload(this.dayActive);

    }

    async reload(date) {
        const now = moment(date, 'MMM-DD-ddd').locale('it-IT');
        this.loadSlots(now);
    }

    getStrDay(day: any) {
        return `${day.month}-${day.day}-${day.dayname}`;
    }

    // Get Appointments To get reserved_times
    async getReservedTime(date = null) {

        const appointment = await API.graphql(graphqlOperation(Queries.listAppointments, {
            filter: {
                appId: {eq: AppId},
                date: {

                    contains: date
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

    getDateFromActiveDay() {
        return moment(this.dayActive, 'MMM-DD-ddd').format('YYYY-MM-DD');
    }

    createAppointment = async (time: any) => {
        console.log(time);
        console.log(this.serviceid);
        event.preventDefault();
        const appointment = {
            appointmentServiceId: this.serviceid,
            client_id: this.clientid,
            price: this.serviceprice,
            status: false,
            date: this.getDateFromActiveDay(),
            start_time: this.slotService.toTime(time),
            end_time: (this.slotService.toTime(time) + this.service_duration),
            appId: AppId,
        };
        await API.graphql(graphqlOperation(mutations.createAppointment, {input: appointment}));
        console.log('prenotato');
        let alert = await this.alertCtrl.create({message: 'Appointment confirmed', buttons: ['Ok']});
        alert.present();
        this.router.navigate(['service']);
    };


    // Get Settings To Get Available Time
    async getAvailableTime() {
        const listsettings = await API.graphql(graphqlOperation(Queries.listSettings, {
                filter: {
                    appId: {eq: AppId}
                }
            }))
        ;
        const settings = await listsettings.data.listSettings.items;
        console.log('funcAvailsettings', settings);
        const availbleTime = [];
        for (let i = 0; i < settings.length; i++) {
            console.log(settings[i].calender_offset);
            availbleTime.push([this.slotService.toTime(settings[i].start_time), this.slotService.toTime(settings[i].end_time), parseInt(settings[i].calender_offset)]);
        }
        console.log('funcAvail', availbleTime);
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
















import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
import {graphqlOperation, API} from 'aws-amplify';

import * as Queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import * as moment from 'moment/moment';
import {AppId} from '../../AppId/Id';

@Component({
    selector: 'app-bookedservice',
    templateUrl: './bookedservice.page.html',
    styleUrls: ['./bookedservice.page.scss'],
})
export class BookedservicePage implements OnInit {

    public items: any;
    public moment: any;

    constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController, private router: Router) {
        this.moment = moment();
    }

    async ngOnInit() {
        // Get All Services Booked
        const allappointment = await API.graphql(graphqlOperation(Queries.listAppointments, {
            filter: {
                appId: {eq: AppId}
            }
        }));
        // const allappointment = await API.graphql(graphqlOperation(`{listAppointments{items{id date start_time service{title}}}}`));
        this.items = await allappointment.data.listAppointments.items;
        console.log(this.items);
    }


    // remove Appointment
    removeAppointment = async (item: any, i: any) => {
        if (i > -1) {
            this.items.splice(i, 1);
        }
        const itemId = item.id;
        await API.graphql(graphqlOperation(mutations.deleteAppointment, {input: {id: itemId}}));
        console.log(item);
    };


    normalizza(date: any) {

        return moment(date).format('D/M/Y').toString();

    }

     normalizzaTime(data) {
        return  moment(data).format('HH:mm').toString();
    }

     toMomentDate(date) {
        return moment(date, 'YYYY-MM-DD').locale('it-IT');
    }

     getMonth(date: any) {
        console.log(date);
        return this.toMomentDate(date).format('MMM');
    }


     getDay(date: any) {
        return (this.toMomentDate(date)).format('DDD');
    }

     getDayNumber(date: any) {
        return ( this.toMomentDate(date)).format('DD');
    }

     getTimeStr(start_time: any) {
        const hh = parseInt((start_time / 60).toString());
        return hh.toString() + ':' + (start_time - (hh * 60)).toString();
    }
}

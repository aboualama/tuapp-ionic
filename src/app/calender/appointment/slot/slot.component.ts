import {Component, Input, OnInit} from '@angular/core';
import {AppId} from '../../../AppId/Id';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../../../graphql/mutations';
import {SlotService} from '../../slot.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-slot',
    templateUrl: './slot.component.html',
    styleUrls: ['./slot.component.scss'],
})
export class SlotComponent implements OnInit {
    @Input() slot;
    @Input() serviceName;
    @Input() duration;
    @Input() price;
    @Input() service;
    @Input() clientID;
    @Input() date;

    constructor(private slotService: SlotService, private router: Router) {

    }

    ngOnInit() {
        /* this.slot = slot;
         this.serviceName = serviceName;
         this.duration = duration;*/
    }

    // Create Appointment
    createAppointment = async (time: any) => {
        event.preventDefault();
        const appointment = {
            appointmentServiceId: this.service.id,
            client_id: this.clientID,
            price: this.price,
            status: false,
            date: this.date,
            start_time: this.slotService.toTime(time),
            end_time: (this.slotService.toTime(time) + this.duration),
            appId: AppId
        };
        await API.graphql(graphqlOperation(mutations.createAppointment, {input: appointment}));
        this.router.navigate(['service']);
    };


}
